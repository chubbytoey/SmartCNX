<template>
  <button>{{text}}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type:String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
button {
  width: 140px;
  height: 40px;
  border: none;
  font-size: 14px;
  border-radius: 4px;
  border:none;
  color: #fff;
  background-color: #0094FF;
}
</style>
