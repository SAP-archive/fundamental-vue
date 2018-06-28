<template>
  <div>
    <Header>Image</Header>
    <Description>When using images, use the following helpers classes to adjust the size and the shape.</Description>
    <Import module="Image" path="/fundamental-vue/src/" />

    <Separator />

    <Properties type="Inputs" :desc = description />

    <Separator />

    <h2>Sizes</h2>
    <DocsTile>
      <Img size="s" url="https://placeimg.com/400/400/nature" />
      <Img size="m" url="https://placeimg.com/400/400/nature" />
      <Img size="l" url="https://placeimg.com/400/400/nature" />
    </DocsTile>
    <DocsText>{{sizesImage}}</DocsText>

    <Separator />
            
    <h2>Shapes</h2>
    <DocsTile>
      <Img size="s" isCircle url="https://placeimg.com/400/400/nature" />
      <Img size="m" isCircle url="https://placeimg.com/400/400/nature" />
      <Img size="l" isCircle url="https://placeimg.com/400/400/nature" />
    </DocsTile>
    <DocsText>{{shapesImage}}</DocsText>
  </div>
</template>

<script>

import Img from "./Image";
import Header from "../documentation/Header";
import Separator from "../documentation/Separator";
import Description from "../documentation/Description";
import DocsText from "../documentation/DocsText";
import DocsTile from "../documentation/DocsTile";
import Import from "../documentation/Import";
import Properties from "../documentation/Properties";

const sizesImageCode=`<Img size="s" photo="https://placeimg.com/400/400/nature" />
<Img size="m" photo="https://placeimg.com/400/400/nature" />
<Img size="l" photo="https://placeimg.com/400/400/nature" />`

const shapesImageCode=`<Img size="s" type="circle" photo="https://placeimg.com/400/400/nature" />
<Img size="m" type="circle" photo="https://placeimg.com/400/400/nature" />
<Img size="l" type="circle" photo="https://placeimg.com/400/400/nature" />`

export default {
  name: "ImageComponent",
  components: {
    Img,
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
      sizesImage: sizesImageCode,
      shapesImage: shapesImageCode,
      description: [
        {name: 'size', description: 'String (required)- the size of the image. Size options include \'s\' (24x24), \'m\' (36x36), and \'l\' (48x48).'}, 
        {name: 'photo', description: 'String (required) - picture url.'}, 
        {name: 'type', description: 'String - When set to true renders a round image.'}]
    }
  }
};
</script>


<style scoped></style>
