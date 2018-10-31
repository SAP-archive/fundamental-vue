<template>
<button :class="[ {'fd-button' : true}, type ? 'fd-button--' + type : '', semantic ? 'fd-button--' + semantic : '', size ? 'fd-button--' + size : '', glyph ? 'sap-icon--' + glyph : '', state ? 'is-' + state : '']" @click="(e) => $emit('onclick', e)">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        type: {
            default: '',
            type: String
        },
        semantic: {
            default: '',
            type: String
        },
        size: {
            default: '',
            type: String
        },
        glyph: {
            default: '',
            type: String
        },
        state: {
            default: '',
            type: String
        },
        onclick: {
            type: Function
        }
    }
};
</script>

<style scoped></style>