<template>
<div>
  <Header />
  <div class="body-container">
    <Menu />
    <div class="sub-container">
      <Nuxt />
    </div>
  </div>
</div>
</template>

<script>
import Header from '../components/Header'
import Menu from '../components/Menu'
export default {
  components: {
    Header, Menu
  }
}
</script>

<style scope lang="scss">
.body-container {
  display: flex;
  margin-top: 56px;
  & > .sub-container {
    flex:1;
  }
}
</style>
