import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

export type Node = {
  id: string;
  columns: any[];
  hasChildren: boolean;
  children?: Node[] | [];
};

interface Props {
  headers: string[];
  treeData: Node[] | [];
}

@Component({ name: componentName('Tree') })
@Api.Component('Tree')
@Api.defaultSlot('Tree Content')
export class Tree extends TsxComponent<Props> {
  @Api.Prop('headers of the tree', prop => prop.type('Array<String>'))
  @Prop({ type: Array, required: true })
  public headers!: string[];
  @Api.Prop('data of the tree', prop => prop.type('Array<Node>'))
  @Prop({ type: Array, required: true })
  public treeData!: Node[];
  private iStates: boolean[] = [];
  private expandAllClicked: boolean = false;
  private numberOfElements: number = 0;
  private openAllList(treeData: Node[], numberOfElements: number) {
    const modifiedStates = this.iStates;

    if (this.numberOfElements === 0) {
      treeData.map(row => {
        row.columns.forEach(element => {
          ++this.numberOfElements;
        });
        if (row.children && row.hasChildren) {
          this.openAllList(row.children, numberOfElements);
        }
        return;
      });

      for (let i = 0; i <= numberOfElements; i++) {
        if (!this.expandAllClicked) {
          modifiedStates[i] = true;
        } else {
          modifiedStates[i] = false;
        }
      }
    } else {
      for (let i = 0; i <= this.numberOfElements; i++) {
        if (!this.expandAllClicked) {
          modifiedStates[i] = true;
        } else {
          modifiedStates[i] = false;
        }
      }
    }
    this.iStates = modifiedStates;
    this.expandAllClicked = !this.expandAllClicked;
    this.numberOfElements = this.numberOfElements;
  }
  private updateVisibility(selected: string) {
    return () => {
      const modifiedStates = this.iStates;
      if (modifiedStates[selected]) {
        modifiedStates[selected] = false;
      } else {
        modifiedStates[selected] = true;
      }
      this.iStates = modifiedStates;
    };
  }
  private createTreeList(treeData: Node[], isChild: boolean, depthLevel: number) {
    let currentDepthLevel = depthLevel;
    const trees = treeData.map(row => {
      const parent = row.columns.map((element, index) => {
        if (row.hasChildren && (row.columns.indexOf(element) === 0)) {
          if (typeof element === 'object') {
            return (
                <div key={index} class='fd-tree__col fd-tree__col--control'>
                    <button
                        class='fd-tree__control'
                        aria-label='expand'
                        aria-controls='inYUX852'
                        onClick={this.updateVisibility(row.id)}
                        aria-pressed={this.iStates[row.id]}
                    />
                    <a href={element.linkUrl} class='fd-has-font-weight-semi'>
                        {element.displayText ? element.displayText : element.linkUrl}
                    </a>
                </div>
            );
          }
          return (
              <div key={index} class='fd-tree__col fd-tree__col--control'>
                  <button
                      class='fd-tree__control'
                      aria-label='expand'
                      aria-controls='inYUX852'
                      onClick={this.updateVisibility(row.id)}
                      aria-pressed={this.iStates[row.id]}
                  />
                  {element}
              </div>
          );
        }

        if (row.columns.indexOf(element) === 0) {
          return (
              <div key={index} class='fd-tree__col fd-tree__col--control'>
                  {typeof element === 'object' ? (
                      <a href={element.linkUrl} class='fd-has-font-weight-semi'>
                          {element.displayText ? element.displayText : element.linkUrl}
                      </a>
              ) : (
                element
              )}
              </div>
          );
        }
        return (
            <div key={index} class='fd-tree__col'>
                {typeof element === 'object' ? (
                    <a href={element.linkUrl} class='fd-has-font-weight-semi'>
                        {element.displayText ? element.displayText : element.linkUrl}
                    </a>
            ) : (
              element
            )}
            </div>
        );
      });

      let tree: any;

      const displayLevel =
        'fd-tree__group fd-tree__group--sublevel-' + currentDepthLevel;

      if (row.children && row.hasChildren && this.iStates[row.id]) {
        tree = this.createTreeList(row.children, true, currentDepthLevel++);
      }
      if (isChild) {
        return (
            <ul
              key={row.id}
              class={displayLevel}
              role='group'
            >
                <ul class='fd-tree-child'>
                    <li
                      class='fd-tree__item'
                      role='treeitem'
                      aria-expanded='true'
                      key={row.id}
                    >
                        <div class='fd-tree__row'>
                            {parent}
                        </div>
                        {tree}
                    </li>
                </ul>
            </ul>
        );
      }
      currentDepthLevel = 0;
      return (
          <li
              class='fd-tree__item'
              role='treeitem'
              aria-expanded='true'
              key={row.id}
          >
              <div class='fd-tree__row'>
                  {parent}
              </div>
              {tree}
          </li>
      );
    });

    return trees;
  }
  public render() {
    return (
      <div>
        <div class='fd-tree fd-tree--header'>
            <div class='fd-tree__row fd-tree__row--header'>
                {this.headers.map((header, index) => {
                  if (this.headers.indexOf(header) === 0) {
                    return (
                        <div
                            key={index}
                            class='fd-tree__col fd-tree__col--control'
                        >
                            <button
                                class='fd-tree__control '
                                aria-label='expand'
                                aria-pressed={this.expandAllClicked}
                                onClick={e => this.openAllList(this.treeData, 0)}
                            />
                            {header}
                        </div>
                    );
                  }
                  return (
                      <div key={index} class='fd-tree__col'>
                          {header}
                      </div>
                  );
                })}
            </div>
        </div>
        <ul class='fd-tree' id='tWsod582' role='tree'>
          {this.createTreeList(this.treeData, false, 0)}
        </ul>
      </div>
    );
  }
}
