<title>Time</title>
<template>
    <div>
        <FdTime type='hour24' :value="value"></FdTime>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value : 17
        };
    }
}
</script>
