<template>
   <div>
    <Header>Identifier</Header>
    <Description>A visual presentation option around using an icon or user initials .</Description>
    <Import module="Identifier" path="/fundamental-vue/src/" />

    <Separator />

    <Properties type="Inputs" :desc = description />

    <Separator />

    <h2>Icon</h2>
    <DocsTile>
        <Identifier size="s" glyph="washing-machine" />
        <Identifier size="m" glyph="washing-machine" />
        <Identifier size="l" glyph="washing-machine" />
    </DocsTile>
    <DocsText>{{icons}}</DocsText>

    <Separator />

    <h2>Initials</h2>
    <DocsTile>
        <Identifier size="s" label="Wendy Wallace">WW</Identifier>
        <Identifier size="m" label="Wendy Wallace">WW</Identifier>
        <Identifier size="l" label="Wendy Wallace">WW</Identifier>
    </DocsTile>
    <DocsText>{{initials}}</DocsText>

    <Separator />

    <h2>Circle</h2>
    <DocsTile>
        <Identifier size="s" glyph="washing-machine" modifier="circle" />
        <Identifier size="m" glyph="washing-machine" modifier="circle" />
        <Identifier size="l" glyph="washing-machine" modifier="circle" />
    </DocsTile>
    <DocsText>{{circle}}</DocsText>

    <Separator />

    <h2>Transparent</h2>
    <DocsTile>
        <Identifier size="m" label="Wendy Wallace" modifier="transparent">WW</Identifier>
        <Identifier size="l" glyph="washing-machine" modifier="transparent"></Identifier>
    </DocsTile>
    <DocsText>{{transparent}}</DocsText>

    <Separator />

    <h2>Accent Colors</h2>
    <DocsTile>
        <Identifier size="m" glyph="money-bills" color="1"></Identifier>
        <Identifier size="m" glyph="money-bills" color="2"></Identifier>
        <Identifier size="m" glyph="money-bills" color="3"></Identifier>
        <Identifier size="m" glyph="money-bills" color="4"></Identifier>
        <Identifier size="m" glyph="money-bills" color="5"></Identifier>
        <Identifier size="m" glyph="money-bills" color="6"></Identifier>
        <Identifier size="m" glyph="money-bills" color="7"></Identifier>
        <Identifier size="m" glyph="money-bills" color="8"></Identifier>
        <Identifier size="m" glyph="money-bills" color="9"></Identifier>
    </DocsTile>
    <DocsText>{{accentColors}}</DocsText>
   </div>
</template>

<script>

import Identifier from "./Identifier";
import Header from "../documentation/Header";
import Separator from "../documentation/Separator";
import Description from "../documentation/Description";
import DocsText from "../documentation/DocsText";
import DocsTile from "../documentation/DocsTile";
import Import from "../documentation/Import";
import Properties from "../documentation/Properties";

const iconsCode=`<Identifier size="s" glyph="washing-machine" />
<Identifier size="m" glyph="washing-machine" />
<Identifier size="l" glyph="washing-machine" />`
const initialsCode=`<Identifier size="s" label="Wendy Wallace">WW</Identifier>
<Identifier size="m" label="Wendy Wallace">WW</Identifier>
<Identifier size="l" label="Wendy Wallace">WW</Identifier>`
const circleCode=`<Identifier size="s" glyph="washing-machine" modifier="circle" />
<Identifier size="m" glyph="washing-machine" modifier="circle" />
<Identifier size="l" glyph="washing-machine" modifier="circle" />`
const transparentCode=`<Identifier size="m" label="Wendy Wallace" modifier="transparent">WW</Identifier>
<Identifier size="l" glyph="washing-machine" modifier="transparent"></Identifier>`
const accentColorsCode=`<Identifier size="m" glyph="money-bills" color="1"></Identifier>
<Identifier size="m" glyph="money-bills" color="2"></Identifier>
<Identifier size="m" glyph="money-bills" color="3"></Identifier>
<Identifier size="m" glyph="money-bills" color="4"></Identifier>
<Identifier size="m" glyph="money-bills" color="5"></Identifier>
<Identifier size="m" glyph="money-bills" color="6"></Identifier>
<Identifier size="m" glyph="money-bills" color="7"></Identifier>
<Identifier size="m" glyph="money-bills" color="8"></Identifier>
<Identifier size="m" glyph="money-bills" color="9"></Identifier>`


export default {
  name: "IdentifierComponent",
  components: {
    Identifier,
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
      initials: initialsCode,
      circle: circleCode,
      transparent: transparentCode,
      accentColors: accentColorsCode,
      description: [
        {name: 'size', description: 'String - Three sizes are available: s (small) - 24px, m (medium) - 36px, and l  (large) - 48px.'}, 
        {name: 'glyph', description: 'String - The name of the icon to include. See the icon page for the list of icons.'},
        {name: 'label', description: 'String - Label text'},
        {name: 'modifier', description: 'String - Can be \'circle\' or \'transparent\'.'},
        {name: 'color', description: 'Number - Applies a background color. Options include numbers from 1 to 9'} ]
    }
  }
};
</script>

<style scoped></style>
