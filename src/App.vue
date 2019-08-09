<template lang="pug">
#app
  img(src='../assets/logo.png')
  h1 Jump Music
  select(v-model="selectedCountry")
    option(v-for="country in countries" :value="country.value") {{ country.name }}
  Spinner(v-show="loading")
  ul
    artist(v-for="artist in artists" :artist="artist" :key="artist.mbid")
</template>

<script>
import Artist from './components/Artist.vue'
import getArtists from './api'
import Spinner from './components/Spinner.vue'
export default {
  name: 'app',
  data () {
    return {
        artists:[],
        countries:[
          {name:"Argentina", value:"argentina"},
          {name:"Colombia", value:"colombia"},
          {name:"España", value:"spain"},
          {name:"Costa Rica", value:"costa rica"},
          {name:"Venezuela", value:"venezuela"}
        ],
        selectedCountry:'argentina',
        loading: true
        }
  },
  methods:{
      refreshArtists(){
        const self = this
        this.loading = true
        this.artists = []
        getArtists(this.selectedCountry)
        .then(function (artists){
          self.loading = false
          self.artists = artists
        })
      }
  },
  components:{
    Artist,
    Spinner
  },
  mounted: function(){
    this.refreshArtists()
  },
  watch:{
    selectedCountry: function(){
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
#app
	font-family 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	margin-top 60px
h1, h2
	font-weight normal
ul
	list-style-type none
	padding 0
li
	display inline-block
	margin 0 10px
a
	color #42b983

</style>
