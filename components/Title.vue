<template>
<div class="title-container">
  <label>{{text}}</label>
</div>
</template>
<script>
export default {
  props: {
    text: {
      type:String,
      default:null
    }
  }
}
</script>
<style scoped lang="scss">
.title-container {
  width: 100%;
  height: 72px;
  background-color: #fff;
  border-bottom: 1px solid rgb(0,0,0,0.1);
  display: flex;
  align-items: center;
  & > label {
    font-size: 24px;
    font-weight: 400;
    margin-left: 40px;
     color:rgb(0,0,0,0.85);
  }
}
</style>
