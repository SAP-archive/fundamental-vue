<title>TimePicker</title>
<tip>`FdTimePicker` is still under heavy development. Things might break.</tip>
<docs>
```
<FdTimePicker />
```
</docs>
<template>
    <div>
        <FdTimePicker :value="value"></FdTimePicker>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value : '23:23:23'
        };
    }
}
</script>
