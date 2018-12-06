<title>Search Input with Auto Complete</title>

<template>
<div>
    <FdSearchInput v-model="searchvalue" placeholder="Enter Search Query" @search="onSearch" @autoComplete="onAutoComplete" v-bind:enableSuggest="true" v-bind:suggestionList="this.data"></FdSearchInput>
</div>
</template>

<script>
export default {
    methods: {
        onSearch(e) {
            // search handler
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
                    key: 2,
                    text: "grapes"
                },
                {
                    key: 2,
                    text: "banana"
                },
                {
                    key: 2,
                    text: "orange"
                }
            ],
            suggestions: [{
                    key: 1,
                    text: "apple"
                },
                {
                    key: 2,
                    text: "mango"
                },
                {
                    key: 2,
                    text: "grapes"
                },
                {
                    key: 2,
                    text: "banana"
                },
                {
                    key: 2,
                    text: "orange"
                }
            ]
        };
    }
};
</script>
