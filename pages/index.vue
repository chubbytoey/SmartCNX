<template>
<div class="all-container">
  <Title text="ภาพรวม"/>
  <div class="container">
    <div class="overview">
      <List v-for="data in overviewButton" :key="data.id" :text="data" />
    </div>
    <div class="map">
      <div class="map-text">
        แผนที่การดำเนินการปัจจุบัน
      </div>
      <google-map
          :mapClick="true"
          :height="500"
      />
    </div>
  </div>
</div>
</template>

<script>
import Title from '../components/Title'
import List from '../components/OverviewList'
import GoogleMap from '../components/GoogleMap'
import axios from 'axios'
import LogoVue from '../components/Logo.vue'

export default {
  components: {
    Title, List,
    GoogleMap
  },data() {
    return {
      overviewButton: [{
        id:0,
        maintext: 'รอตรวจสอบ',
        total: '30 รายการ',
        color: '#F7B500'
      },{
        id:1,
        maintext: 'ดำเนินการแก้ไข',
        total: '12 รายการ',
        color: '#2196F3'
      },{
        id:2,
        maintext: 'เสร็จสิ้น',
        total: '100 รายการ',
        color: '#0AC775'
      },{
        id:3,
        maintext: 'ปฎิเสธ',
        total: '22 รายการ',
        color: '#FF3B30'
      }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  & > .overview {
    height: 184px;
    border-bottom: 1px solid rgb(0,0,0,0.1);
    display: flex;
    align-items: center;
    padding:0 60px;
    justify-content: space-around;
    & > :last-child {
    margin-right: 0;
    }
  }
  & > .map {
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 40px;
    flex-direction: column;
    justify-content: center;
    margin-top: 36px;
    & > .map-text {
      color:#000;
      font-size: 20px;
      margin-bottom: 12px;
      width: 100%;
    }
  }
}
</style>
