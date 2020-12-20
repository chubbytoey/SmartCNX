<template>
	<div class="wrapper">
		<!-- ภาพรวมและการ์ด -->
		<div />
		<!-- map -->
		<div class="GoogleMap">
			<div class="title">
				แผนที่การดำเนินการปัจจุบัน
			</div>
			<google-map
				:initialPosition="location.lat ? {
					lat: location.lat,
					lng: location.lng
				} :null"
				:mapClick="true"
			/>
			<!-- <GmapMap
				:center="{lat:10, lng:10}"
				:zoom="7"
				map-type-id="terrain"
				style="width: 500px; height: 300px"
				>         
			</GmapMap> -->
		</div>
	</div>
</template>

<script>
import GoogleMap from '../components/GoogleMap'

export default {
	data() {
		return {
			location:{
				lat: 18.77894747703758 ,
				lng: 98.94096303731203
			}
		}
	},
	components:{
		GoogleMap
	}
}
</script>
