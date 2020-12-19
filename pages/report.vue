<template>
<div class="all-container">
  <Title text="การแจ้งปัญหา"/>
  <div class="container">
    <div class="filter">
      <div class="filter-sub">
        <select>
          <option>ทุกหมวดหมู่</option>
        </select>
        <select>
          <option>ทุกสถานะ</option>
        </select>
      </div>
      <div class="filter-sub">
        <select>
          <option>เรียงตามวันที่</option>
        </select>
      </div>
    </div>
    <div class="report">
      <List v-for="item in reportData" :key="item.image" :data="item"/>
    </div>
  </div>
</div>
</template>

<script>
import List from '../components/ReportList'
import Title from '../components/Title'
import axios from 'axios'
export default {
  components: {
    List,
    Title
  },data() {
    return {
      reportData: []
    }
  },
   methods: {
    fetchData () {
      axios.get('https://safe-ridge-79537.herokuapp.com/getReport')
      .then(response => {
          this.reportData = response.data
      })
    }
  }, created() {
    this.fetchData()
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  & > .filter {
    height: 56px;
    background-color: #fff;
    border-bottom: 1px solid rgb(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > :first-child {
      margin-left: 40px;
    }
    & > :last-child {
      margin-right: 40px;
    }
    & > .filter-sub {
      width: fit-content;
      & > select {
        width: 140px;
        height: 40px;
        border-radius: 4px;
        border:1px solid rgb(0,0,0,0.1);
        padding-left: 16px;
      }
    }
  }
  & > .report {
    padding-top:40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > :last-child {
      margin-bottom: 0;
    }
  }
}
</style>
