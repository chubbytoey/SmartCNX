<template>
<div id="map">
  <script defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLhhBh865NOHeGRIKei4eLEAqfirF4lmY&callback=initMap">
</script>
</div>
</template>
<script>
export default {
  methods: {
    initmap() {
      const uluru = { lat: -25.363, lng: 131.044 };
      const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
      })
    }
  }, mounted() {
    this.initmap()
  }
}
</script>
<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
