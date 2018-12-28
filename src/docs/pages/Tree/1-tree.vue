<title>Tree with multiple levels</title>

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
            columns: ['First Level', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                    children: [
                        {
                            columns: ['Grandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                            children: [
                                {
                                    columns: ['GreatGrandchild 1', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                                }
                            ]
                        }
                    ]
                },
                {
                    columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },
        {
            columns: ['Row 2', 'Data Col 2', 'Data Col 3', 'DEFAULT'],
            children: [
                {
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                },
                {
                    columns: ['Child 2', 'Data Col 2', 'Data Col 3', 'INACTIVE']
                }
            ]
        },
        {
            columns: ['Row 3', 'Data Col 2', 'Data Col 3', 'INACTIVE']
        },
        {
            columns: ['Row 4', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
            children: [
                {
                    columns: ['Child 1', 'Data Col 2', 'Data Col 3', 'INACTIVE'],
                },
            ]
        }
    ]
    }
  }
}
</script>
