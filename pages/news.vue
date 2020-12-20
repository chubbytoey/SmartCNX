<template>
<div class="all-container">
  <Title text="ข่าวสาร"/>
  <div class="container">
    <div class="block">
      <div class="title">
        <div class="text-title">ข่าวสาร</div>
        <div class="text-time">วันที่เผยแพร่</div>
      </div>
      <List />
      <List />
    </div>
    <NuxtLink to="/addnews">
    <Button class="addnews" text="เพิ่มข่าวสาร" />
    </NuxtLink>
  </div>
</div>
</template>

<script>
import List from '../components/NewsList'
import Button from '../components/Button'
import Title from '../components/Title'
export default {
  components: {
    List, Button, Title
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 749px;
& > .block {
  width: 960px;
  margin-top: 40px;
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
& > .addnews {
  margin-top: 60px;
}
}
</style>
