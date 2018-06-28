<template>
  <div>
    <Header>Icon</Header>
    <Description>Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun. Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components.</Description>
    <Import module="Icon" path="/fundamental-vue/src/" />
    
    <Separator />

    <Properties type="Inputs" :desc = description />

    <Separator />

    <DocsTile>
      <Icon glyph="cart" size="s" />
      <Icon glyph="cart" />
      <Icon glyph="cart" size="m" />
      <Icon glyph="cart" size="l" />
      <Icon glyph="cart" size="xl" />
    </DocsTile>
    <DocsText>{{icons}}</DocsText>
  </div>
</template>

<script>
import Icon from "./Icon";
import Header from "../documentation/Header";
import Separator from "../documentation/Separator";
import Description from "../documentation/Description";
import DocsText from "../documentation/DocsText";
import DocsTile from "../documentation/DocsTile";
import Import from "../documentation/Import";
import Properties from "../documentation/Properties";

const iconsCode=`<Icon glyph="cart" size="s"/>
<Icon glyph="cart" />
<Icon glyph="cart" size="m"/>
<Icon glyph="cart" size="l"/>
<Icon glyph="cart" size="xl"/>`

export default {
  name: "IconComponent",
  components: {
    Icon,
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
      icons: iconsCode,
      description: [
        {name: 'glyph', description: 'String (required) - Icon name.'}, 
        {name: 'size', description: 'String - Size of the icon. Options include \'xs\', \'s\', \'compact\', and \'l\'. If no size is provided, default (normal) will be used.'}]
    }
  }
};
</script>


<style scoped></style>
