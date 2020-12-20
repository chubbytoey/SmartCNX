export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'SmartCNX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      // {
      //   // src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDoN7LumV4NA8Vsvzw6S6id8pbxXGdqAD0"
      //   src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE&callback=initMap&libraries=&v=weekl'
      // }
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAhkT8xtTvPPMDuUMp-OvgsGGbSEJtqxWs&libraries=places'
    },
    ]
  },
  
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
