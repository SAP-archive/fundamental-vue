<template>
<div>
    <Header>Tag</Header>
    <Description>Tags are used to represent contextualizing information. They can be useful to show applied filters, selected values for form field or object metadata.</Description>

    <Import module="Tag" path="/fundamental-vue/src/" />
    <Separator />

    <Properties type="Inputs" :desc=properties />
    <Separator />

    <DocsTile>
        <Tag>Lorem</Tag>
        <Tag>Ipsum</Tag>
        <Tag>Dolor</Tag>
        <Tag>Sit</Tag>
        <Tag>Amet</Tag>
    </DocsTile>
    <DocsText>{{tagCode}}</DocsText>

    <Separator />

</div>
</template>

<script>
import Tag from "./Tag";
import Header from "../documentation/Header";
import Separator from "../documentation/Separator";
import Description from "../documentation/Description";
import DocsText from "../documentation/DocsText";
import DocsTile from "../documentation/DocsTile";
import Import from "../documentation/Import";
import Properties from "../documentation/Properties";

const tagCode = `<Tag>Lorem</Tag>
<Tag>Ipsum</Tag>
<Tag>Dolor</Tag>
<Tag>Sit</Tag>
<Tag>Amet</Tag>`;

export default {
    name: "TagComponent",
    components: {
        Tag,
        Header,
        Separator,
        Description,
        DocsText,
        DocsTile,
        Import,
        Properties
    },
    data() {
        return {
            tagCode,
            properties: [{
                name: 'onclick',
                dataType: 'Function',
                description: 'The function that is executed when the Tag is clicked.'
            }]
        }
    }
}
</script>

<style scoped>
.fd-tag {
    margin-right: 10px;
}
</style>
