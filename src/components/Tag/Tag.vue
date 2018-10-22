<template>
<span class="fd-tag" role="button" @click="(e) => $emit('onclick', e)">
    <slot></slot>
</span>
</template>

<script>
export default {
    name: "Tag",
    props: {
        onclick: {
            type: Function
        }
    }
};
</script>
