<template>



<v-flex xs12 sm12 >
                    <v-card>
                      <v-toolbar color="green" dark>
                        <v-toolbar-title>Zonal Crop Details</v-toolbar-title>
                        <v-menu :nudge-width="100">
                            <v-toolbar-title slot="activator">
                                <span>District</span>
                                <v-icon dark>arrow_drop_down</v-icon>
                            </v-toolbar-title>

                            <v-list>
                            <v-list-tile
                                v-for="item in items2"
                                :key="item"
                                
                            >
                            <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                        </v-menu>
                        <v-menu :nudge-width="100">
                            <v-toolbar-title slot="activator">
                                <span>Gowijana Sewa Division</span>
                                <v-icon dark>arrow_drop_down</v-icon>
                            </v-toolbar-title>

                            <v-list>
                            <v-list-tile
                                v-for="item in items3"
                                :key="item"
                                
                            >
                            <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                        </v-menu>
                        <v-menu :nudge-width="100">
                            <v-toolbar-title slot="activator">
                                <span>AI Division</span>
                                <v-icon dark>arrow_drop_down</v-icon>
                            </v-toolbar-title>

                            <v-list>
                            <v-list-tile
                                v-for="item in items4"
                                :key="item"
                                
                            >
                            <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                        </v-menu>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>search</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <v-flex xs12 sm12 >
  <!-- <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div> -->

      <!-- Google map start -->
      <div>
        <google-map name="example"></google-map>
      </div>
      <!-- Google map end -->

</v-flex>
                    </v-card>

 </v-flex>

</template>

<script>
import GoogleMapCrop from "@/components/GoogleMapCrop.vue";

 export default {
    components: {
      'google-map':GoogleMapCrop
    },
    data: () => ({
      dialog: false,
      drawer: null,

      // Zone start
      items2: [
        'Eastern', 'Western', 'North Eastern'
      ],
      // Zone end

      // Gowijanasewa start
      items3: [
        '1', '2', '3'
      ],
      // Gowijanasewa end

      // AI division start
      items4: [
        '1', '2', '3'
      ],
      // AI division end

       e1: 'recent',
       e13: 1,

      //   //Google map start
      //  center: { lat: 45.508, lng: -73.587 },
      //   markers: [],
      //   places: [],
      //   currentPlace: null
      //   //Google map end
    }),
    
    props: {
      source: String
    },
    mounted() {
    //this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng()
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    // geolocate: function() {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   });
    // }
  }


  }
</script>