export default {
  title: 'Form'
}

export const Checkbox = () => ({
  components: {
    Example: require('./../src/docs/pages/form/checkbox.vue').default,
    template: '<Example />',
  }
})

// export const Radio = () => require('./../src/docs/pages/form/radio.vue').default
