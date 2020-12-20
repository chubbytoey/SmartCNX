<template>
  <div class="container">
    <List v-for="data in newsData" :key="data.id" :data="data"/>
  </div>
</template>
<script>
import axios from 'axios'
import List from '../components/NewsLineliff'
export default {
  layout: 'lineliff',
  components: {
    List
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
  flex-direction: column;
  align-items: center;
  & > :first-child {
    margin-top: 40px;
  }
}
</style>
