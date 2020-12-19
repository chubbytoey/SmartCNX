<template>
<div class="container">
  <div class="title">
    เพิ่มข่าวสาร
  </div>
  <div class="block-content">
    <div class="content">
      <div class="title-content">รายละเอียด</div>
      <div class="sub-content">หัวข้อข่าว:</div>
      <input type="text" placeholder="หัวข้อข่าว">
      <div class="sub-content">เนื้อหา:</div>
      <textarea class="config-height" placeholder="เนื้อหา"></textarea>
    </div>
    <div class="content-menu">
      <Button class="cancel" text="ยกเลิก"/>
      <Button class="confirm" text="ยืนยัน"/>
    </div>
  </div>
</div>
</template>

<script>
import Button from '../components/Button'
export default {
  layout: 'add',
  components:{
    Button
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: #F2F2F2;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > .title {
    color:#000;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 24px;
    margin-top: 53px;
  }
  & > .block-content {
    width: 1080px;
    height: 519px;
    background-color: #fff;
    border-radius: 6px;
    border:1px solid rgba(0, 0, 0, 0.01);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    & > .content {
      margin-top: 68px;
      width: fit-content;
      & > .title-content {
        font-size: 20px;
      }
      & > .sub-content {
        font-size: 12px;
        margin-bottom: 10px;
        margin-top:26px;
      }
      & > .config-height {
        height: 128px;
      }
      & > input, textarea {
        width: 480px;
        border:1px solid rgb(0, 0, 0, 0.1);
        height: 40px;
        outline: none;
        padding: 10px;
        font-size: 14px;
        border-radius: 4px;
      }
    }
    & > .content-menu {
      bottom: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      border-top: 1px solid rgb(0, 0, 0, 0.1);
      height: 73px;
      padding: 0 120px;
      & > :first-child {
        margin-right: 8px;
      }
      & > .cancel {
        color: #595959;
        background-color: #fff;
        border: 1px solid rgb(0, 0, 0, 0.1);
      }
      & > .confirm {
        background-color:  #0094FF;
        color:#fff;
      }
    }
  }
}
</style>
