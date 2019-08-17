


<template>
<v-flex xs12 sm12>

  <v-container
        fluid
        grid-list-lg
      >
  <v-layout row wrap>
    
       
  

    <v-flex xs12 sm8 offset-sm2>
            <v-card color="white" class="black">
              <v-layout>
                <v-flex xs5>
                  <v-card-media
                    src="static/carrot.jpg"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Farmer 1

                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>

                      </div>
                      <div>Carrot</div>
                      <div>1Kg -> Rs.120.00</div>
                      <div>Labuduwa Farm</div>
                      <div>
                        <router-link to="/buy"><v-btn>Buy</v-btn></router-link></div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn flat>Rate customer</v-btn>
                <v-spacer></v-spacer>
                <v-btn><More></More></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
  

    <v-flex xs12 sm8 offset-sm2>
            <v-card color="white" class="black">
              <v-layout>
                <v-flex xs5>
                  <v-card-media
                    src="static/beet.jpg"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Farmer 2

                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>

                      </div>
                      <div>Red Beet Root</div>
                      <div>1Kg -> Rs.60.00</div>
                      <div>Thangalla Farm</div>
                      <router-link to="/buy"><v-btn>Buy</v-btn></router-link></div>
                    
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn flat>Rate customer</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat>more details</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>


   <v-flex xs12 sm8 offset-sm2>
            <v-card color="white" class="black">
              <v-layout>
                <v-flex xs5>
                  <v-card-media
                    src="static/broccoli.jpg"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Farmer 1

                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>

                      </div>
                      <div>Broccoli</div>
                      <div>1Kg -> Rs.120.00</div>
                      <div>Labuduwa Farm</div>
                      <router-link to="/buy"><v-btn>Buy</v-btn></router-link></div>
                    
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn flat>Rate customer</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat>more details</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          


  </v-layout>

  </v-container>
</v-flex>
  
</template>

<script>

import More from './More.vue'
  export default {
    data: () => ({
      show: false
    }),
    components:{
      'More':More
    }
  }
</script>