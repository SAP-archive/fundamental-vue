import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import { Tree, Props } from '../Tree';

describe('Tree', () => {
  const propsData: Props = {
    headers: ['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status'],
    treeData: [
      {
        columns: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
        children: [
            {
              columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
              children: [
                {
                    columns: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                    children: [
                        {
                            columns: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                        },
                    ],
                },
              ],
            },
            {
              columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            },
        ],
      },
      {
        columns: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
        children: [
          {
            columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
          },
          {
            columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
          },
        ],
      },
      {
        columns: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
      },
      {
          columns: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
          children: [
              {
                  columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
              },
          ],
      },
  ],
  };

  const tree = mount(Tree, { propsData });
  const vm = tree.vm;
  const buttons = tree.findAll('button');
  const buttonToExpandAll = buttons.at(0);

  it('the initial state', () => {
    // have 4 elements in headers
    assert.lengthOf(vm.headers, 4);
    // have 4 direct children in treeData
    assert.lengthOf(vm.treeData, 4);
    // total 11 tree nodes are rendered
    assert.equal(vm.numberOfElements, 11);
    assert.lengthOf(vm.iStates, 11);
  });

  it('expand all children nodes', () => {
    assert.lengthOf(buttons, 4);
    buttonToExpandAll.trigger('click');
    assert(vm.iStates.every(w => true), 'Every node is collapsed');
    buttonToExpandAll.trigger('click');
  });

  it('collapse and close the first direct child', () => {
    const buttonToExpandFirstChild = buttons.at(1);
    buttonToExpandFirstChild.trigger('click');
    assert.equal(vm.iStates[0], true);
    buttonToExpandFirstChild.trigger('click');
    assert.equal(vm.iStates[0], false);
  });

});
