<title>Search Input with Auto Complete</title>

<template>
<div>
    <FdLabel>The search value is: {{searchvalue}}</FdLabel>
    <FdSearchInput v-bind:value="searchvalue" placeholder="Enter Search Query" @search="onSearch" @autoComplete="onAutoComplete" v-bind:enableSuggest="true" >
      <FdMenuItem v-for="item in data" :key="item.key" @click="searchvalue = item.text">{{item.text}}</FdMenuItem>
    </FdSearchInput>
</div>
</template>

<script>
export default {
    methods: {
        onSearch(txt) {
            // search handler
            this.searchvalue = txt;
        },
        onAutoComplete(e) {
            // auto complete handler
        }
    },
    data() {
        return {
            searchvalue: "",
            data: [{
                    key: 1,
                    text: "apple"
                },
                {
                    key: 2,
                    text: "mango"
                },
                {
                    key: 3,
                    text: "grapes"
                },
                {
                    key: 4,
                    text: "banana"
                },
                {
                    key: 5,
                    text: "orange"
                }
            ]
        };
    }
};
</script>
