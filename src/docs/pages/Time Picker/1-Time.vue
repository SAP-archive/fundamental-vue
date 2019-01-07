<title>Time</title>
<template>
    <div>
        <FdTime type='hour12' :value="value"></FdTime>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value : 12
        };
    }
}
</script>
