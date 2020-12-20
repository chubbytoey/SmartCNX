<template>
	<div class="map">
		<div
			class="myMap"
			style="width:100%; height:400px;"
			/>
	</div>
</template>
<script>
export default {
	props:['initialPosition','mapClick','onMarker'],
	data() {
		return {
			position: {
				lat: 18.77894747703758 ,
				lng: 98.94096303731203
			},
			map:null,
			marker:null,
		}
	},
	methods: {
		initmap() {
			if(this.initialPosition){
				this.position = this.initialPosition
			}
			if(!this.map){
				const element = document.getElementsByClassName('myMap')
				for (let i = 0; element.length; i++) {
					this.map = new google.maps.Map(element[i], {
						center:{
							lat: this.position.lat,
							lag: this.position.lag
						},
						zoom: 3,
						disableDoubleClickZoom: false,
						streetViewControl: false,
						rotateControl: true
					})
				}
				const defaultBounds = new google.maps.LatLngBounds(
					new google.maps.LatLng(this.position.lat),
					new google.maps.LatLng(this.position.lng)
				)
				const options = {
					bounds : defaultBounds,
					types  : ['establishment']
				}
			}
			if(this.mapClick){
				this.onMapClick()
			}
		},
		addMaker(position){
			if(this.marker){
				this.marker.setMap(null)
			}
			this.marker = new google.maps.Marker({
				position:position,
				map:this.map,
				draggable: true,
				animation: google.maps.Animation.DROP,
				icon:{
					url: require('../assets/images/placeholder.png'),
					scaleSize : new google.maps.Size(20,36)
				}
			})
			this.map.setCenter(position)
		},
		onMapClick(){
			this.map.addListener('click',(event)=>{
				this.addMaker(event.LatLng)
                this.map.setCenter(event.LatLng)
                this.onMarker(event.LatLng)
			})
		}
	},
	mounted() {
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
