<template>
<div>
  <Header />
  <div class="body-container">
    <Menu />
    <div class="sub-container">
      <Title />
      <Nuxt />
    </div>
  </div>
</div>
</template>

<script>
import Header from '../components/Header'
import Menu from '../components/Menu'
import Title from '../components/Title'
export default {
  components: {
    Header, Menu, Title
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
