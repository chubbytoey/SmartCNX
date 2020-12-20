<template>
<div class="newscontainer">
  <div class="topic">
    {{data.topic}}
  </div>
  <div class="detail">
    {{data.detail}}
  </div>
  <div @click="changePage(data.news_id)" class="seemore">อ่านเพิ่มเติม...</div>
</div>
</template>
<script>
import newsVue from '../pages/news.vue'
export default {
  props: {
    data: {
      type:Object,
      default:null
    }
  },methods: {
    changePage (id) {
      this.$router.push(`/descript?id=${id}`)
    }
  }
}
</script>
<style scoped lang="scss">
.newscontainer {
  width: 80%;
  height: 140px;
  margin-bottom: 16px;
  border-radius: 8px;
  border:1px solid rgb(0,0,0,0.1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  & > .topic {
    color:#000;
    font-size: 18px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  & > .detail {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 14px;
  }
  & > .seemore {
    text-align: right;
    font-size: 12px;
    color:#2196F3;
    margin-top: 10px;
  }
}
</style>
