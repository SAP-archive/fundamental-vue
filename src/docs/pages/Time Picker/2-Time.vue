<title>Time Item as a set of Time</title>
<template>
    <div>
        <p>The time component is used for a single time value. Multiple components can be used in the time-picker to assemble a clock time. A max of four will account for hours, minutes, seconds and period of the day.</p>
        <strong>It will be rare to see this component used outside of it being composed in the time-picker component.</strong>
        <br/>
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
                    type : 'period',
                    value : 'am'
                }
            ]
        };
    }
}
</script>
