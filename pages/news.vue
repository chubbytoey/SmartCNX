<template>
<div class="container">
  <div class="block">
    <div class="title">
      <div class="text-title">ข่าวสาร</div>
      <div class="text-time">วันที่เผยแพร่</div>
    </div>
    <List />
    <List />
  </div>
</div>
</template>

<script>
import List from '../components/NewsList'
export default {
  components: {
    List
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 749px;
& > .block {
  /* background-color: red; */
  width: 960px;
  height: 600px;
  & > .title {
    height: 49px;
    background-color:rgb(0, 0, 0,0.02);
    border-radius: 6px 6px 0px 0px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: 21px;
    border-bottom: rgb(0, 0, 0, 0.05) 1px solid;
    display: flex;
    justify-content: space-between;
    & > .text-time {
      margin-right: 202px;
    }
  }
}
}
</style>
