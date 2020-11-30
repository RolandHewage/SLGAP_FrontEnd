<template>
   <v-app id="inspire">
     <div style="height:650px;weight:600px" v-bind:style="{'background-image':'url ('+'https://eecampaign.files.wordpress.com/2016/05/photo_by_kai_horstmann.jpg'+')'}">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      stateless
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="item in items"
          :key="item.text"
          :to="item.link"
        >
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{item.text}}</v-list-tile-title>
        </v-list-tile-content>

          
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 350px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">GAP Maze Farmer Profile</span>
      </v-toolbar-title>
     
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large >
        <v-avatar size="32px" tile>
          <img
            src="/static/vuetify.jpeg"
            alt="Vuetify"
            
          >
          <!--v-list>
            <v-list-tile v-for="(item, i) in log" :key="i" >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
          </v-list-->
        </v-avatar>
      </v-btn>
    </v-toolbar>
      <v-content>
      <v-container fluid>
        <v-layout column >
          <v-card>
                  <v-container
                    fluid
                    grid-list-md
                  >
                    <v-layout row wrap>
                      <v-flex
                        v-for="card in cards"
                        v-bind="{ [`xs${card.flex}`]: true }"
                        :key="card.title"
                      >
                        <v-card :to="card.link">
                          <v-card-media
                            :src="card.src"
                            height="200px"
                          >
                            <v-container
                              fill-height
                              fluid
                              pa-2
                            >
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <span class="headline white--text" v-text="card.title"></span>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>

                        </v-card>
                      </v-flex>
                    </v-layout>
                    
                  </v-container>
                </v-card>

        </v-layout>
             
      </v-container>
        
        <v-layout>
          <v-flex xs12 sm4 >
              
              <chartjs-doughnut v-bind:labels="labels"
                          v-bind:datasets="datasets"
                          v-bind:option="option"></chartjs-doughnut>
          </v-flex>
          <v-flex xs12 sm4 >

              <chartjs-bar v-bind:labels="labels"
                          v-bind:datasets="datasets"
                          v-bind:option="option"></chartjs-bar>
                          

          </v-flex>
           <v-flex xs12 sm4 >
              
              <GChart
    type="ColumnChart"
    :data="chartData"
    :options="chartOptions"
  />
          </v-flex>

          
        </v-layout>
        <!-- #dedede -->
        <vue-particles
        color="#00ff00"    
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#00ff00"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>

        <!-- <v-layout>
          <v-flex xs12 sm10 offset-md1> -->
              <div class="container">
                <div>
                  <h2 >Search and add a pin</h2>
                  <div class="input-group mb-3">
                    <!-- <gmap-autocomplete class="form-control" placeholder="Search"
                      @place_changed="setPlace" >
                    </gmap-autocomplete> -->

                    <div class="input-group-append">
                      <!-- <button @click="addMarker" class="btn btn-success">Add</button> -->
                      <!-- <v-btn @click="addMarker" color="success">Add</v-btn> -->
                    </div>
                  </div>
                  <!-- <label>
                    <gmap-autocomplete
                      @place_changed="setPlace" class="form-control">
                    </gmap-autocomplete>
                    <button @click="addMarker" class="btn btn-success">Add</button>
                  </label> -->
                  <br/>

                </div>
                <br>
                <!-- <gmap-map
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
                </gmap-map> -->
              </div>

              <!-- <div>
                <gmap-map
                  :center="center"
                  :zoom="12"
                  style="width:100%;  height: 400px;"
                >
                  
                
                </gmap-map>
              </div>
         -->
          <!-- </v-flex>
        </v-layout> -->



        <!-- Temperature start -->
        <div class="container">
        <div class="my-5">
          <form v-on:submit.prevent="getData">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <h5>Enter A City:</h5>
                <div class="input-group">
                  <input type="text" class="form-control" v-model="city" placeholder="Search">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="my-5">
          <div class="alert alert-info" v-show="loading">
            Loading...
          </div>
          <div v-show="chart != null">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
      <!-- Temperature end -->

    
      <div>
        <google-map name="example"></google-map>
      </div>

      <div id="current">Nothing yet...</div>



      
    </v-content> 
     </div>
   </v-app>
</template>

<script>

import axios from "axios";
import GoogleMap from "@/components/GoogleMap.vue"
import navbar from "@/components/farmer/farmer_nav";

export default {
  components: {
    'google-map':GoogleMap
  },
      data(){
        return{

      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,

      dialog: false,
      drawer: null,
      items: [
        { icon: 'contacts', text: 'Home' ,link:'/farmer' },
        { icon: 'history', text: 'GAP Certificate' ,link:'/manage_tab' },
        { icon: 'content_copy', text: 'Plant Manage',link:'/history' },
        { icon: 'settings', text: 'Plant History',link:'/manage_tab' },
        { icon: 'chat_bubble', text: 'Genarate QR',link:'/qrcode' },
        { icon: 'help', text: 'Reconmendation' ,link:'/recomnedations'},
        { icon: 'phonelink', text: 'Market',link:'/market' },
        
      ],
      cards: [
        { title: 'GAP Certificate', src: 'static/gap.jpeg', flex: 4 , link:"/farmer_tab" },
        { title: 'Plant Manage', src: 'static/plant.jpg', flex: 4 ,link:"/manage_tab"},
        { title: 'Plant History', src: 'static/history.jpg', flex: 4,link:"/history" },
        { title: 'Ganarate QR', src: 'static/plantqr.jpg', flex: 4,link:"/qrcode"  },
        { title: 'Chemical & Fertilize Recomandation', src: 'static/chemical.jpg', flex: 4,link:"/recomnedations" },
        { title: 'Market', src: 'static/market.jpg', flex: 4,link:"/market"  }
      ],
      // labels:["Apple","Bananas","Graphes"],
      // datasets:[
      //   {
      //     data:[200,130,150],
      //     backgroundColor:["Red","Yellow","Purple"],
      //   }
      // ],
      
      labels:[],
      datasets:[
        {
          data:[],
          backgroundColor:["Green","Yellow","Purple"]
        }
      ],
      option:{
          title:{
            display:true,
            position:"bottom",
            text:"Crop Harvest Analysis"
          }

        },


        // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },


      



      // Temperature start
      chart: null,
      city: "",
      dates: [],
      temps: [],
      loading: false,
      errored: false,
      // Temperature end




      }
      
      },
      mounted() {
    this.geolocate();
  },
  created() {
      var self=this;
      var token = localStorage.getItem('access_token');
      let charts_setting ={ 
          crossDomain: true,
          url:"http://localhost:8090/farmer/harvestAnalysis",
          method:"get",
          headers:{
          "content-type":"application/json",
          "Authorization":"Bearer <token>"

        }
      }     
     
      axios(charts_setting).then(function(response){
          self.datasets[0].data=response.data;
          console.log(self.datasets[0].data);
      })
      .catch(function(error){
          console.log(error);
      });


    
      let charts_name ={ 
          crossDomain: true,
          url:"http://localhost:8090/farmer/harvestAnalysisCrops",
          method:"get",
          headers:{
          "content-type":"application/json",
          "Authorization":"Bearer <token>"
        }
      }     
     
      axios(charts_name).then(function(response){
         
          // console.log(self.labels);
             // self.labels=response.data;
          for(var i=0;i<response.data.length;i++){
            self.labels[i] = response.data[i];
          }
          console.log(self.labels);
      })
      .catch(function(error){
          console.log(error);
      });
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



    // Temperature start
    getData: function() {
        this.loading = true;
  
        if (this.chart != null) {
          this.chart.destroy();
        }
  
        axios
          .get("https://api.openweathermap.org/data/2.5/forecast", {
            params: {
              q: this.city,
              units: "imperial",
              appid: "<appid>"
            }
          })
          .then(response => {
            this.dates = response.data.list.map(list => {
              return list.dt_txt;
            });
  
            this.temps = response.data.list.map(list => {
              return list.main.temp;
            });
  
            var ctx = document.getElementById("myChart");
            this.chart = new Chart(ctx, {
              type: "line",
              data: {
                labels: this.dates,
                datasets: [
                  {
                    label: "Avg. Temp",
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderColor: "rgb(54, 162, 235)",
                    fill: false,
                    data: this.temps
                  }
                ]
              },
              options: {
                title: {
                  display: true,
                  text: "5 Day / 3 Hour Temperature Forecast"
                },
                tooltips: {
                  callbacks: {
                    label: function(tooltipItem, data) {
                      var label =
                        data.datasets[tooltipItem.datasetIndex].label || "";
  
                      if (label) {
                        label += ": ";
                      }
  
                      label += Math.floor(tooltipItem.yLabel);
                      return label + "°F";
                    }
                  }
                },
                scales: {
                  xAxes: [
                    {
                      type: "time",
                      time: {
                        unit: "hour",
                        displayFormats: {
                          hour: "M/DD @ hA"
                        },
                        tooltipFormat: "MMM. DD @ hA"
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Date/Time"
                      }
                    }
                  ],
                  yAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: "Temperature (°F)"
                      },
                      ticks: {
                        callback: function(value, index, values) {
                          return value + "°F";
                        }
                      }
                    }
                  ]
                }
              }
            });
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => (this.loading = false));
      }
      // Temperature end




  }
}
</script>

<style scoped>

</style>


