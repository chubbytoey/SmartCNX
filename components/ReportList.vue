<template>
<div class="list-container">
  <img src="../assets/images/mockup-img.png">
  <div class="info">
    <div class="info-main">#00001: ท่อประปามีปัญหา - 12/12/2020, 12:22 PM</div>
    <div class="info-sub">วัดอุโมงค์,  135 หมู่ 10 ถนนสุเทพ อ.เมือง เชียงใหม่ (ดูแผนที่)</div>
    <div class="info-landmark-title">คำอธิบายสถานที่:</div>
    <div class="info-landmark">ข้างวัดโมงตรงแถวๆทางโค้ง</div>
  </div>
</div>
</template>
<script>
export default {

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
}
</style>
