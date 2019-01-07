<title>Time</title>
<template>
    <div>
        <FdTimeItem type='hour12' :value="value"></FdTimeItem>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value : '12'
        };
    }
}
</script>
