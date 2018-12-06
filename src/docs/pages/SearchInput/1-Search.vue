<title>Search Input</title>

<template>
    <div>
        <FdSearchInput v-model="searchVal" placeholder='Enter Search Query' @search='onSearch'>
      </FdSearchInput>   
    </div>
</template>

<script>
export default {
    methods: {
        onSearch(e){
            // search handler
        }
    },
    data(){
        return {
            searchVal : 'Dips'
        };
    }
}
</script>


