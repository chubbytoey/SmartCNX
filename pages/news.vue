<template>
<div class="all-container">
  <Title text="ข่าวสาร"/>
  <div class="container">
    <div class="block">
      <div class="title">
        <div class="text-title">ข่าวสาร</div>
        <div class="text-time">วันที่เผยแพร่</div>
      </div>
      <List v-for="item in newsData" :key="item.id" :data="item"/>
    </div>
<<<<<<< HEAD
    <NuxtLink to="/addnews">
    <Button class="addnews" text="เพิ่มข่าวสาร" />
    </NuxtLink>
=======
    <NuxtLink to="/addnews"><button class="addnews">เพิ่มข่าวสาร</button></NuxtLink>
>>>>>>> dfd5a65158f0ebac52c0f2a0ad5e35b005d19d57
  </div>
</div>
</template>

<script>
import List from '../components/NewsList'
import Title from '../components/Title'
import axios from 'axios'
export default {
  components: {
    List, Title
  }, data() {
    return {
      newsData: []
    }
  },methods: {
    fetchData () {
      axios.get('https://safe-ridge-79537.herokuapp.com/getNews')
      .then(response => {
          this.newsData = response.data
      })
    }
  }, created() {
    this.fetchData()
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
  & > a .addnews {
    width: 140px;
    height: 40px;
    border: none;
    font-size: 14px;
    border-radius: 4px;
    border:none;
    color: #fff;
    background-color: #0094FF;
    margin-top: 60px;
    cursor: pointer;
  }
}
</style>
