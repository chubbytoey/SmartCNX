<template>
<div class="container">
  <div class="submenu">
    ภาพรวม
  </div>
  <div class="submenu stay">
    <label>การแจ้งปัญหา</label>
  </div>
    <div class="submenu">
    ข่าวสาร
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.container {
  width: 240px;
  height: 100vh;
  background-color: #0D253F;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .submenu {
    color:#979797;
    font-family: 'Noto Sans Thai';
    border-radius: 4px;
    width: 208px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    margin-bottom: 16px;
  }
  & > :last-child {
    margin-bottom: 0;
  }
  & > :first-child {
    margin-top: 32px;
  }
  & > .stay {
    background-color: rgb(255, 255, 255,0.1);
    color:#fff;
  }
}
</style>
