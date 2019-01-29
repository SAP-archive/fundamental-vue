<title>Time Item as a set of Time</title>
<docs>
    This shows a composition of four `FdTime` components to create a TimeItem. If this is the plan, it is suggested to use the TimeItem component instead. 
</docs>
<template>
    <div>
        <FdTime v-for="item in timeitems" :key="item.type" :type="item.type" :value="item.value"></FdTime>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeitems : [
                {
                    type : 'hour12',
                    value : '10'
                },
                {
                    type : 'minute',
                    value : '30'
                },
                {
                    type : 'second',
                    value : '00'
                },
                {
                    type : 'meridian',
                    value : 'am'
                }
            ]
        };
    }
}
</script>
