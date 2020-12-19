<template>
<div class="list-container">
  <img src="../assets/images/mockup-img.png">
  <div class="info">
    <div class="info-main">{{data.categories}}</div>
    <div class="info-sub">{{data.address}}</div>
    <!-- <div class="info-landmark-title">คำอธิบายสถานที่:</div>
    <div class="info-landmark">ข้างวัดโมงตรงแถวๆทางโค้ง</div> -->
  </div>
  <div class="status">
    <select @change="changeStatus($event)">
      <option value="รอตรวจสอบ">รอตรวจสอบ</option>
      <option value="ดำเนินการแก้ไข">ดำเนินการแก้ไข</option>
      <option value="เสร็จสิ้น">เสร็จสิ้น</option>
    </select>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    data: {
      type:Object,
      default:null
    }
  },data(){
    return{
      img: null
    }
  },
   methods: {
    // fetchIMG(imgID) {
    //   const headers = {
    //     'Authorization':'Bearer {3XeWaAxm2oDah1k2mV7M6hWSEHR3mY2xlzaLJahbNuIvvydxnUdpKo7l/+jnm19uX9wZyuti9NuIrjrZEA2aJGw3rCe+Dq2D2c0IvsHqF1Km1PTh0fpdX8ce+crBVv0cD9umntsQBmfAGoURy+QbkAdB04t89/1O/w1cDnyilFU=}',
    //   }
    //   axios.get(`https://api-data.line.me/v2/bot/message/${imgID}/content`,{
    //     headers
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    // },
    changeStatus(event) {
      const body = {
        status: event.target.value
      }
      console.log(body);
      axios.post(`https://safe-ridge-79537.herokuapp.com/updateReport/13231421250892`,body)
    }
  }
}
</script>
<style scoped lang="scss">
.list-container {
  border:1px solid rgb(0,0,0,0.1);
  width: 95%;
  height: 154px;
  border-radius: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  & > img {
    width: 120px;
    height: 120px;
  }
  & > .info {
    flex:1;
    height: fit-content;
    margin-left: 16px;
    font-weight: 400;
    & > .info-main {
      font-size: 20px;
      color:#000;
    }
    & > .info-sub {
      font-size: 14px;
      color:rgb(0,0,0,0.45);
    }
    & > .info-landmark-title {
      font-size: 12px;
      color:rgb(0,0,0,0.45);
      margin-top:18px;
    }
    & > .info-landmark {
      font-size: 14px;
      color:rgb(0,0,0,0.85)
    }
  }
  & > .status {
    color:rgb(0,0,0,0.85);
    height: 100%;
    & > select {
      width: 152px;
      border-radius: 4px;
      margin-top: 14px;
      padding: 10px 28px;
      border:solid 1px rgb(0,0,0,0.1);
    }
  }
}
</style>
