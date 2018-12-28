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
            id: '1',
            columns: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    id: '2',
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                    children: [
                        {
                            id: '3',
                            columns: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    id: '4',
                                    columns: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '5',
                    columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },
        {
            id: '6',
            columns: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
            children: [
                {
                    id: '7',
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                },
                {
                    id: '8',
                    columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },
        {
            id: '9',
            columns: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
        },
        {
            id: '10',
            columns: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    id: '11',
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                },
            ]
        }
    ]
    }
  }
}
</script>
