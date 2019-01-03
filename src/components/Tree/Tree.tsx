import { Base, DefaultSlot, Component, Prop } from '@/core';

type Node = {
  columns: any[];
  children?: Node[] | [];
};

type NodeWithId = {
  id: string;
  columns: any[];
  children?: NodeWithId[] | [];
};

type LinkNode = {
  displayText?: string;
  linkUrl: string;
};

export interface Props {
  headers: string[];
  treeData: Node[];
}

@Component('Tree')
@DefaultSlot('Tree Content')
export class Tree extends Base<Props> {
  @Prop('headers of the tree', { type: Array, required: true })
  public headers!: string[];

  @Prop('data of the tree', { type: Array, required: true })
  public treeData!: Node[];

  public iStates: boolean[] = [];
  private expandAllClicked: boolean = false;
  public numberOfElements: number = 0;
  public treeDataWithIds: NodeWithId[] = [];
  // to change each Node to NodeWithId with id=0
  // TODO: change id from string to number
  private initializeTreeDataWithIds(treeData: Node[]) {
    const treeDataWithIds = treeData.map(n => {
      let children = n.children || [];
      if (children && children.length) {
        children = this.initializeTreeDataWithIds(children);
      }
      if (children && children.length) {
        return {id:String(0), children, columns: n.columns} as NodeWithId;
      } else {
        return {id:String(0), columns: n.columns} as NodeWithId;
      }
    });
    return treeDataWithIds;
  }
  // method to assign ids to element in order of
  // from parent to innermost children
  // then go to the next parent
  private assignIds(treeData: NodeWithId[]) {
    treeData.forEach(n => {
      const id = String(this.numberOfElements++);
      n.id = id;
      if (n.children && n.children.length) {
        this.assignIds(n.children);
      }
    });
  }
  private openAllList(treeData: NodeWithId[]) {
    const modifiedStates = this.iStates.slice();
    for (let i = 0; i < this.numberOfElements; i++) {
      if (!this.expandAllClicked) {
        modifiedStates[i] = true;
      } else {
        modifiedStates[i] = false;
      }
    }
    this.iStates = modifiedStates;
    this.expandAllClicked = !this.expandAllClicked;
  }

  private updateVisibility(selected: string) {
    const modifiedStates = this.iStates.slice();
    if (modifiedStates[selected]) {
      modifiedStates[selected] = false;
    } else {
      modifiedStates[selected] = true;
    }
    this.iStates = modifiedStates;
  }
  private renderLink(element: LinkNode) {
    return (
      <a href={element.linkUrl} class='fd-has-font-weight-semi'>
        {element.displayText ? element.displayText : element.linkUrl}
      </a>
    );
  }
  private createTreeList(treeData: NodeWithId[], isChild: boolean, depthLevel: number) {
    let currentDepthLevel = depthLevel;
    const trees = treeData.map(row => {
      // prepare the parent html
      const parent = row.columns.map((element, index) => {
        if (row.children && row.children.length && (row.columns.indexOf(element) === 0)) {
          if (typeof element === 'object') {
            return (
                <div key={index} class='fd-tree__col fd-tree__col--control'>
                    <button
                        class='fd-tree__control'
                        aria-label='expand'
                        aria-controls='inYUX852'
                        onClick={() => this.updateVisibility(row.id)}
                        aria-pressed={this.iStates[row.id]}
                    />
                    {this.renderLink(element)}
                </div>
            );
          }
          return (
              <div key={index} class='fd-tree__col fd-tree__col--control'>
                  <button
                      class='fd-tree__control'
                      aria-label='expand'
                      aria-controls='inYUX852'
                      onClick={() => this.updateVisibility(row.id)}
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
                    this.renderLink(element)
              ) : (
                element
              )}
              </div>
          );
        }
        return (
            <div key={index} class='fd-tree__col'>
                {typeof element === 'object' ? (
                  this.renderLink(element)
            ) : (
              element
            )}
            </div>
        );
      });
      // prepare the tree html
      let tree: any;

      const displayLevel =
        'fd-tree__group fd-tree__group--sublevel-' + currentDepthLevel;

      if (row.children && row.children.length && this.iStates[row.id]) {
        tree = this.createTreeList(row.children, true, ++currentDepthLevel);
      }
      // compose parent and tree for one node
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
    // return the whole
    return trees;
  }
  public created() {
    // to assign arbitrary ids
    this.treeDataWithIds = this.initializeTreeDataWithIds(this.treeData);
    // to assign correct ids
    this.assignIds(this.treeDataWithIds);
    this.iStates = [...Array(this.numberOfElements).keys()].map(() => false);
  }
  public render() {
    // if (this.numberOfElements === 0 && this.hasInitialized === false) {
    //   console.log('initialize');
    //   // to assign arbitrary ids
    //   this.treeDataWithIds = this.initializeTreeDataWithIds(this.treeData);
    //   console.log(this.treeDataWithIds);
    //   // to assign correct ids
    //   this.assignIds(this.treeDataWithIds);
    //   this.iStates = [...Array(this.numberOfElements).keys()].map(() => false);
    //   console.log(this.iStates);
    //   this.hasInitialized = true;
    // }
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
                                onClick={() => this.openAllList(this.treeDataWithIds)}
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
          {this.createTreeList(this.treeDataWithIds, false, 0)}
        </ul>
      </div>
    );
  }
}
