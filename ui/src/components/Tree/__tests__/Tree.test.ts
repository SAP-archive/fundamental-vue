// import { assert } from 'chai';
// import { mount } from '@vue/test-utils';
// import { Tree, Props } from '../Tree';

// describe('Tree', () => {
//   const propsData: Props = {
//     headers: ['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status'],
//     treeData: [
//       {
//         columns: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//         children: [
//             {
//               columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//               children: [
//                 {
//                     columns: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//                     children: [
//                         {
//                             columns: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//                         },
//                     ],
//                 },
//               ],
//             },
//             {
//               columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//             },
//         ],
//       },
//       {
//         columns: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
//         children: [
//           {
//             columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//           },
//           {
//             columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//           },
//         ],
//       },
//       {
//         columns: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//       },
//       {
//           columns: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//           children: [
//               {
//                   columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
//               },
//           ],
//       },
//   ],
//   };

//   const tree = mount(Tree, { propsData });
//   const buttons = tree.findAll('button');
//   let nodes = tree.findAll('li');
//   const buttonToExpandAll = buttons.at(0);

//   it('the initial state', () => {
//     // have 4 nodes in the tree without any one is expanded
//     assert.lengthOf(nodes, 4);
//   });

//   it('expand all children nodes', () => {
//     assert.lengthOf(buttons, 4);
//     buttonToExpandAll.trigger('click');
//     nodes = tree.findAll('li');
//     assert.lengthOf(nodes, 11);
//     buttonToExpandAll.trigger('click');
//     nodes = tree.findAll('li');
//     assert.lengthOf(nodes, 4);
//   });

//   it('expand and collapse  the first direct child', () => {
//     const buttonToExpandFirstChild = buttons.at(1);
//     buttonToExpandFirstChild.trigger('click');
//     nodes = tree.findAll('li');
//     assert.lengthOf(nodes, 6);
//     buttonToExpandFirstChild.trigger('click');
//     nodes = tree.findAll('li');
//     assert.lengthOf(nodes, 4);
//   });

// });
