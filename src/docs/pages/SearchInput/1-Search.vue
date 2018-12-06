<title>Search Input</title>

<template>
    <div>
        <FdLabel>The Search value is : {{searchVal}}</FdLabel>
        <FdSearchInput v-model="searchVal" placeholder='Enter Search Query' @search='onSearch'>
      </FdSearchInput>   
    </div>
</template>

<script>
export default {
    methods: {
        onSearch(txt){
            // search handler
            this.searchVal = txt;
        }
    },
    data(){
        return {
            searchVal : 'Dips'
        };
    }
}
</script>


