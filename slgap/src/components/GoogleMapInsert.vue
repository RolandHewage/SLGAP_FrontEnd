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
  <div>
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
        :draggable="true"
        @dragend="updateCoordinates"
      ></gmap-marker>
    </gmap-map>
  </div>
</v-flex>
                    </v-card>

 </v-flex>

</template>

<script>

 export default {
    data: () => ({
      dialog: false,
      drawer: null,

     
      // Farmers List start
      items1: [
                { icon: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' },
                { title: 'Mahinda Raja', avatar: '/static/doc-images/lists/5.jpg' },
                { title: 'Barack Obama', avatar: '/static/doc-images/lists/6.jpg' }
              ],
      // Farmers List end

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

        //Google map start
       center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null,
        coordinates:null
        //Google map end
    }),
    
    props: {
      source: String
    },
    mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    // get changed position coordinates
    updateCoordinates(location){
      document.getElementById("current").innerHTML =
        "<p>Marker dropped: Current Lat: " +
        location.latLng.lat() +
        " Current Lng: " +
        location.latLng.lng() +
        "</p>";
      this.coordinates={
        lat: location.latLng.lat(),
        lng: location.latLng.lng()
      };
      // console.log(this.coordinates.lat);
      // console.log(location.latLng.lat());
      // console.log(this.coordinates.lng);
      // console.log(location.latLng.lng());
      console.log(this.coordinates);
    }
  }


  }
</script>

                    