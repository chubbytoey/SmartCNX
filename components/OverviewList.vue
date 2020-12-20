<template>
<div class="overview-container">
  <div class="main-text">
    {{text.maintext}}:
  </div>
  <div class="total" v-bind:style="style">
    {{text.total}}
  </div>
</div>
</template>

<script>
export default {
  props: {
    text: {
      type:Object,
      default:null
    }
  }, data() {
    return {
      style: {
        color: this.text.color
      }
    }
  }
}
</script>

<style scoped lang="scss">
.overview-container {
  width: 220px;
  height: 100px;
  background-color: #fff;
  border: 1px solid rgb(0,0,0,0.1);
  border-radius: 8px;
  padding-left: 32px;
  padding-top: 24px;
  margin-right: 27px;
  & > .main-text {
    font-size: 14px;
    color: #000;
  }
  & > .total {
    font-size: 24px;
  }
}
</style>
