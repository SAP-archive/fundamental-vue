<title>TimeItem</title>
<template>
    <div>
        <FdTimeItem type='hour12' :value="value" @timeItemUpdate='onTimeItemUpdate'></FdTimeItem>
    </div>
</template>

<script>
export default {
    methods: {
        onTimeItemUpdate(time){
            // handle timeItemUpdate.
        }
    },
    data() {
        return {
            value : '06:26 PM'
        };
    }
}
</script>
