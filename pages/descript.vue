<template>
<div class="container">
  <div class="main-text">
    หัวข้อข่าว: {{data.topic}}
  </div>
  <div class="sub-text">
  รายละเอียด: {{data.detail}}
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  layout:'lineliff',
  data() {
    return {
      data: {}
    }
  },methods: {
    fetchData (id) {
      axios.get(`https://safe-ridge-79537.herokuapp.com/getNewsList?id=${id}`)
      .then(response => {
        this.data = response.data
      })
    }
  }, created() {
    this.fetchData(this.$route.query.id)
  }
}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  & > .main-text {
    color:#000;
    font-size: 20px;
    margin-bottom: 20px;
  }
  & > .sub-text {
    font-size: 18px;
  }
}
</style>
