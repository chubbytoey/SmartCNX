<template>
		<div class="GoogleMap">
			<google-map
          :mapClick="true"
          :height="1000"
      />
		</div>
</template>

<script>
import GoogleMap from '../components/GoogleMap'
import axios from 'axios'
import LogoVue from '../components/Logo.vue'

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
  },
  layout: 'lineliff'
}
</script>
