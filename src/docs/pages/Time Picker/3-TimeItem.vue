<title>TimeItem</title>
<template>
    <div>
        <FdTimeItem type='hour24' :value="value" @timeItemUpdate='onTimeItemUpdate'></FdTimeItem>
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
            value : '18:26'
        };
    }
}
</script>
