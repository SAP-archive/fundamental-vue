<template>
<div>
    <h3 class="header">@{{ type }}</h3>
    <table>
        <tbody>
            <tr class="property-row" v-for="property in desc" :key="property.name">
                <th class="property-header">{{property.name}}</th>
                <td v-if="property.dataType">{{property.dataType}} - </td>
                <td>{{property.description}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
  name: "Properties",
  props: {
    type: {
      default: "",
      type: String,
      required: true
    },
    desc: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>

