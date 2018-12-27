<title>Default Token</title>

<template>
  <div>
    <FdTree :treeData="treeData" :headers="headers">
    </FdTree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: ['Column Header', 'Column Header 1 ', 'Column Header 2', 'Status'],
      treeData: [
        {
            id: '1', hasChildren: true,
            columns: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    id: '2', hasChildren: true,
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                    children: [
                        {
                            id: '3', hasChildren: true,
                            columns: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '4', hasChildren: false,
                                    columns: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '5', hasChildren: false,
                    columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },
        {
            id: '6', hasChildren: true,
            columns: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
            children: [
                {
                    id: '7', hasChildren: false,
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                },
                {
                    id: '8', hasChildren: false,
                    columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },
        {
            id: '9', hasChild: false,
            columns: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
        },
        {
            id: '10', hasChildren: true,
            columns: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    id: '11', hasChildren: false,
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                },
            ]
        }
    ]
    }
  }
}
</script>
