<template>
   <div>
    <Header>Badge and Label</Header>
    <Description>Badges and labels are used to indicate status. Colors, generally in combination with text, are used to easily highlight the state of an object. <br />
      The following colors should be used: <br />
        - Black: default or inactive status; <br />
        - Green: positive status, used for active, published, approved; <br />
        - Orange: a warning status or to indicate that an action can be taken; <br />
        - Red: error status. </Description>

    <Import module="Badge, Label" path="/fundamental-vue/src/" />
    
    <Separator />

    <Properties type="Inputs" :desc = description />

    <Separator />

    <h2>Default Badge</h2>
    <DocsTile>
      <Badge>Default</Badge>
      <Badge type="success">Default</Badge>
      <Badge type="warning">Default</Badge>
      <Badge type="error">Default</Badge>
    </DocsTile>
    <DocsText>{{defaultBadge}}</DocsText>

    <Separator />

    <h2>Pill Badge</h2>
    <Description><code>fd-badge--pill</code> modifier can be used to render a pill version of the badge.</Description>
    <DocsTile>
      <Badge modifier="pill">Default</Badge>
      <Badge type="success" modifier="pill">Default</Badge>
      <Badge type="warning" modifier="pill">Default</Badge>
      <Badge type="error" modifier="pill">Default</Badge>
    </DocsTile>
    <DocsText>{{pillBadge}}</DocsText>
   
    <Separator />

    <h2>Filled Badge</h2>
    <Description><code>fd-badge--filled</code> modifier can be used to render a filled version of the badge.</Description>
    <DocsTile>
      <Badge modifier="filled">Default</Badge>
      <Badge type="success" modifier="filled">Default</Badge>
      <Badge type="warning" modifier="filled">Default</Badge>
      <Badge type="error" modifier="filled">Default</Badge>
    </DocsTile>
    <DocsText>{{filledBadge}}</DocsText>
      
    <Separator />

    <h2>Label</h2>
    <DocsTile>
      <Label>Default</Label>
      <Label type="success">Default</Label>
      <Label type="warning">Default</Label>
      <Label type="error">Default</Label>
    </DocsTile>
    <DocsText>{{label}}</DocsText>
   </div>
</template>

<script>

import Badge from "./Badge";
import Label from "./Label";
import Header from "../documentation/Header";
import Separator from "../documentation/Separator";
import Description from "../documentation/Description";
import DocsText from "../documentation/DocsText";
import DocsTile from "../documentation/DocsTile";
import Import from "../documentation/Import";
import Properties from "../documentation/Properties";

const defaultBadgeCode = `<Badge>Default</Badge>
<Badge type="success">Default</Badge>
<Badge type="warning">Default</Badge>
<Badge type="error">Default</Badge>`

const pillBadgeCode = `<Badge modifier="pill">Default</Badge>
<Badge type="success" modifier="pill">Default</Badge>
<Badge type="warning" modifier="pill">Default</Badge>
<Badge type="error" modifier="pill">Default</Badge>`

const filledBadgeCode = `<Badge modifier="filled">Default</Badge>
<Badge type="success" modifier="filled">Default</Badge>
<Badge type="warning" modifier="filled">Default</Badge>
<Badge type="error" modifier="filled">Default</Badge>`

const labelCode = `<Label>Default</Label>
<Label type="success">Default</Label>
<Label type="warning">Default</Label>
<Label type="error">Default</Label>`

export default {
  name: "BadgeComponent",
  components: {
    Badge, 
    Label,
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
      defaultBadge: defaultBadgeCode,
      pillBadge: pillBadgeCode,
      filledBadge: filledBadgeCode,
      label: labelCode,
      description : [
            { name: 'type', description: 'String - The type indicates the status of the badge/label. Options include default, success, warning, and error. Leave empty for default.' },
            { name: 'modifier', description: 'String - Modifiers can be pill and filled. Leave empty for normal.' }
       ]
    }
  }
};
</script>


<style scoped>
  .fd-badge, .fd-label {
    margin-right: 10px;
  }
</style>
