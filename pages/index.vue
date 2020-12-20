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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.954802819734!2d98.96827161500374!3d18.800167465469634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a60e3c61283%3A0x87e2c77af328d013!2sSiam%20Spa%20Health%20%26%20Beauty%20Co.%2C%20.Ltd.!5e0!3m2!1sth!2sth!4v1604586934934!5m2!1sth!2sth" width="1040" height="360" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
</div>
</template>

<script>
import Title from '../components/Title'
import List from '../components/OverviewList'
export default {
  components: {
    Title, List
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
  }
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
