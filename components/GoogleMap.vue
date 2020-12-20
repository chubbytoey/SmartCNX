<template>
    <div class="map-wrap">
        <div class="mapcustom-wrap">
            <div
                class="myMap"
                :style="`width:100%;height:${height}px`"
            />
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    props: [ 'mapClick','height' ],
    data() {
        return {
            position: {
                lat: null,
                lng: null,
            },
            map: null,
			marker: null,
			initialPosition:{
				lat: 18.76494362725018,
				lng: 98.93660836823933
			},
			locationData: [],
        }
	},
	created() {
		this.fetchData()
		console.log(this.locationData[0],'cre')
	},
	watch: {
		locationData(value) {
			if(value) {
				this.initMap()
			}
		}
	},
	methods: {
		fetchData () {
			const vm = this
			axios.get('https://safe-ridge-79537.herokuapp.com/getLocation')
			.then(response => {
				vm.locationData = response.data
				console.log(vm.locationData, 'res')
			})
		},
		initMap() {
			const elems = document.getElementsByClassName('myMap')
			for (let i = 0; i < elems.length; i++) {
				this.map = new google.maps.Map(elems[i], {
					center: {
						lat: Number(this.initialPosition.lat),
						lng: Number(this.initialPosition.lng  ),
					},
					zoom: 16,
					disableDoubleClickZoom: true,
					zoomControlOptions: {
						position: window.google.maps.ControlPosition.RIGHT_CENTER,
					},
					streetViewControlOptions: {
						position: window.google.maps.ControlPosition.RIGHT_TOP,
					},
					clickableIcons: false,
					zoomControl: false,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					rotateControl: false,
				})
			}
			for (let i = 0; i < this.locationData.length; i++) {
				console.log(this.locationData[i])
				const marker = new google.maps.Marker({
				position: new google.maps.LatLng(Number(this.locationData[i].latitude), Number(this.locationData[i].longitude)),
				map: this.map,
			})}
			this.addMarker(this.locationData)
		},
		addMarker(position) {
			if (this.marker) {
				this.marker.setMap(null)
			}
			this.marker = new google.maps.Marker({
				position: position,
				map: this.map,
				draggable: false,
				animation: window.google.maps.Animation.DROP,
				icon: {
					url: require('~/assets/images/placeholder.png'),
					scaledSize: new google.maps.Size(20, 36),
				},
			})
			this.map.setCenter(position)
		}
	},
    // methods: {
	// 	fetchData () {
	// 		const vm = this
	// 		axios.get('https://safe-ridge-79537.herokuapp.com/getLocation')
	// 		.then(response => {
	// 			vm.locationData = response.data
	// 			console.log(vm.locationData, 'res');
	// 		})
	// 	},
    //     onType () {
    //         const currentMaker = new google.maps.LatLng(this.position.lat, this.position.lng)
    //         this.addMarker(currentMaker)
    //     },
    //     initMap() {
	// 		console.log(this.locationData, 'uo');
    //         if (this.initialPosition) {
    //             console.log(this.initialPosition, 'kk')
    //             this.position = this.initialPosition
    //         }
    //         this.position.lat = Number(this.position.lat)
	// 		this.position.lng = Number(this.position.lng)
	// 		console.log(this.position, 'po');

	// 		for (let i = 0; i < this.locationData.length; i++) {
	// 			console.log(this.locationData[i]);
	// 			const marker = new google.maps.Marker({
	// 			position: new google.maps.LatLng(Number(this.locationData[i].latitude), Number(this.locationData[i].longitude)),
	// 			map: this.map,
	// 		});
	// 	}
    //         // this.onMarker(new google.maps.LatLng(this.position.lat), new google.maps.LatLng(this.position.lng))
    //         if (!this.map) {
    //             const elems = document.getElementsByClassName('myMap')
    //             for (let i = 0; i < elems.length; i++) {
    //                 this.map = new google.maps.Map(elems[i], {
    //                     center: {
    //                         lat: this.position.lat,
    //                         lng: this.position.lng,
    //                     },
    //                     zoom: 16,
    //                     disableDoubleClickZoom: true,
    //                     zoomControlOptions: {
    //                         position: window.google.maps.ControlPosition.RIGHT_CENTER,
    //                     },
    //                     streetViewControlOptions: {
    //                         position: window.google.maps.ControlPosition.RIGHT_TOP,
    //                     },
    //                     clickableIcons: false,
    //                     zoomControl: false,
    //                     mapTypeControl: false,
    //                     scaleControl: false,
    //                     streetViewControl: false,
    //                     rotateControl: false,
    //                 })
    //             }
    //             // const defaultBounds = new google.maps.LatLngBounds(
    //             //     new google.maps.LatLng(this.position.lat),
    //             //     new google.maps.LatLng(this.position.lng),
    //             // )
    //             // const input = document.getElementById('searchTextField')
    //             // const inputLatitude = document.getElementById('searchLatitude')
    //             // const inputLongitude = document.getElementById('searchLongitude')
    //             // const options = {
    //             //     bounds: defaultBounds,
    //             //     types: [ 'establishment' ],
    //             // }
    //             // const autocomplete = new google.maps.places.Autocomplete(
    //             //     input, options, inputLatitude, inputLongitude
    //             // )
    //             // const thisPosition = this
    //             // autocomplete.addListener('place_changed', function() {
    //             //     const place = autocomplete.getPlace()
    //             //     this.position = {
    //             //         lat: place.geometry.location.lat(),
    //             //         lng: place.geometry.location.lng(),
    //             //     }
    //             //     // thisPosition.onMarker(place.geometry.location)
    //             //     thisPosition.addMarker(this.position)
    //             //     document.getElementById('searchLatitude').value = place.geometry.location.lat()
    //             //     document.getElementById('searchLongitude').value = place.geometry.location.lng()
    //             // })
    //         }
    //         this.addMarker(this.position)
    //         // if (this.mapClick) {
    //         //     this.onMapClick()
    //         // }
    //     },
    //     addMarker(position) {
    //         if (this.marker) {
    //             this.marker.setMap(null)
    //         }
    //         this.marker = new google.maps.Marker({
    //             position: position,
    //             map: this.map,
    //             draggable: false,
    //             animation: window.google.maps.Animation.DROP,
    //             icon: {
    //                 url: require('~/assets/images/placeholder.png'),
    //                 scaledSize: new google.maps.Size(20, 36),
    //             },
    //         })
    //         // this.onMarker(this.marker.position)
    //         this.map.setCenter(position)
    //     },
    // },
    // mounted() {
	// 	this.fetchData()
    //     if (!this.initialPosition) {
    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(currentPosition => {
    //                 this.position = {
    //                     lat: currentPosition.coords.latitude,
    //                     lng: currentPosition.coords.longitude,
    //                 }
    //                 if (this.map) {
    //                     this.addMarker(this.position)
    //                     this.map.setCenter(this.position)
    //                 }
    //             }, function () {})
	// 		}
    //     }
	// 	this.initMap()
    // },
}
</script>


<style lang="scss">
.pac-container {
    border: 0 !important;
}
</style>
