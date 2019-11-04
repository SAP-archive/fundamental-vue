<template>
  <fd-table :headers="['email', 'name', 'highlight']" :items="items">
    <template #row="{ item }">
      <fd-table-row :highlight="item.highlight">
        <template #email>
          <fd-table-cell>
            {{ item.email }}
          </fd-table-cell>
        </template>
        <template #name>
          <fd-table-cell>
            {{ item.name }}
          </fd-table-cell>
        </template>
        <template #highlight>
          <fd-table-cell>
            {{ item.highlight || 'none' }}
          </fd-table-cell>
        </template>
      </fd-table-row>
    </template>
  </fd-table>
</template>

<script>
export default {
  data: () => ({
    items: [
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: null },
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: 'information' },
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: null },
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: 'error' },
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: null },
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: 'warning' },
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: null },
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: 'valid' },
      { email: 'user.name@email.com', name: 'First Name – Last Name', highlight: null }
    ]
  })
}
</script>
