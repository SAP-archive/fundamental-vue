<title>Rich Tree</title>

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
          columns: ['First Level'],
          children: [
            {
              columns: [{
              },{
                  displayText: 'Google',
                  linkUrl: 'http://google.com',
              },
              {
                  displayText: 'Bing',
                  linkUrl: 'http://bing.com'
              },
              {
                  displayText: 'Yahoo',
                  linkUrl: 'http://yahoo.com'
              }]
            }
          ]
        }

    ]
    }
  }
}
</script>
