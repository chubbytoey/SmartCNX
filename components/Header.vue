<template>
<div class="container">
  <div class="logo">
    <div class="logo-img">
    </div>
    <div class="logo-text">
      <div class="text-main">
          Smart CNX
      </div>
      <div class="text-sub">
          Management
      </div>
    </div>
  </div>
  <div class="user">
    <label>สวัสดี, Admin</label>
  </div>
</div>
</template>

<script>
export default {

}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  background-color:#fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  top: 0;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  & > .logo {
    height: 34px;
    margin-left: 26px;
    display: flex;
    & > .logo-img {
      background-image: url('../assets/images/SmartCNXLogo.png');
      width: 34px;
      height: 34px;
      background-size: cover;
      flex: 1;
      margin-right: 6px;
    }
    & > .logo-text {
      display: flex;
      flex-direction: column;
      & > .text-main {
        font-family: 'Helvetica';
        font-weight: 700;
        font-size: 16px;
        color:#000;
      }
      & > .text-sub {
        color: rgb(0,0,0,0.45);
        font-weight: bold;
        font-size: 8px;
        margin-top: -3px;
      }
    }
  }
  & > .user {
    margin-right: 40px;
  }
}
</style>
