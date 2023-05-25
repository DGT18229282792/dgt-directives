<template>
  <div class="hello">
    <h1 v-draggable>测试拖拽</h1>
    <div class="testEllipsis" v-ellipsis >测试文本溢出测试文本溢出测试文本溢出测试文本溢出测试文本溢出</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.testEllipsis{
  width: 150px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #666;
  text-align: left;
}
</style>
