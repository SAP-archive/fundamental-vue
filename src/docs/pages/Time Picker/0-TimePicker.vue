<title>TimePicker</title>
<tip>`FdTimePicker` is still under heavy development. Things might break.</tip>
<docs>
```
<FdTimePicker />
```
</docs>
<template>
    <div>
        <FdTime type='hour24' :value="value"></FdTime>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value : 18
        };
    }
}
</script>
