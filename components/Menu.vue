<template>
<div class="container">
  <NuxtLink class="submenu" to="/">
    ภาพรวม
  </NuxtLink>
  <NuxtLink class="submenu" to="/report">
    <label>การแจ้งปัญหา</label>
  </NuxtLink>
  <NuxtLink class="submenu" to="/news">
    ข่าวสาร
  </NuxtLink>
</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.container {
  width: 240px;
  min-height: 100vh;
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
  & > .nuxt-link-exact-active {
    background-color: rgb(255, 255, 255,0.1);
    color:#fff;
  }
  & > :last-child {
    margin-bottom: 0;
  }
  & > :first-child {
    margin-top: 32px;
  }
}
</style>
