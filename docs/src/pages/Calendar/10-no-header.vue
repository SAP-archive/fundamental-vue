<title>Calendar without the Header</title>
<docs>You can hide the header by setting `headerVisible` to `false`. Without a header it is hard to tell which date is displayed/selected. Thus it is a good idea to render the currently displayed/selected date separately.</docs>
<template>
  <div>
    <FdCalendar :headerVisible="false" />
  </div>
</template>
