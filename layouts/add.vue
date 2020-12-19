<template>
<div>
  <Header />
  <div class="body-container"><Nuxt /></div>
</div>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style scope lang="scss">
.body-container {
  margin-top:56px;
}
</style>
