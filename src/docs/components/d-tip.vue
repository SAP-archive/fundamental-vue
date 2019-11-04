<template>
  <div class="fdd-tip">
    <div class="fdd-tip__body"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
}
</script>

<style>
.fdd-tip {
  background-color: #e9fafa;
  border-radius: 4px 4px;
  border-left: 8px solid #b6edef;
  color: #0f4345;
  margin: 2rem 0;
  padding: 15px 30px 15px 15px;
}
.fdd-tip > :first-child {
  margin-top: 0;
}
.fdd-tip > :last-child {
  margin-bottom: 0;
}
.fdd-tip__title {
  color: #0c3637;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: -0.9rem;
}
.fdd-tip a {
  color: #0f4345;
  background-color: #bde6e6;
  border-radius: 5px;
  text-decoration: none;
  border-bottom: none;
}
.fdd-tip a:visited {
  color: #0f4345;
}

.fdd-tip a:hover {
  background-color: #9ccccc;
  color: #004d4d;
}
.fdd-tip p,
.fdd-tip ul {
  margin-top: 1rem;
}
.fdd-tip code {
}
</style>
