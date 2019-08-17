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
                    src="static/watermelon.jpg"
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
                      <div>Watermelon</div>
                      <div>1Kg -> Rs.30.00</div>
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


          


  


  
    
       
  

    <v-flex xs12 sm8 offset-sm2>
            <v-card color="white" class="black">
              <v-layout>
                <v-flex xs5>
                  <v-card-media
                    src="static/banana.jpg"
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
                      <div>Banana</div>
                      <div>1Kg -> Rs.60.00</div>
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


        <v-flex xs12 sm8 offset-sm2>
            <v-card color="white" class="black">
              <v-layout>
                <v-flex xs5>
                  <v-card-media
                    src="static/orange.jpg"
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
                      <div>Orange</div>
                      <div>1Kg -> Rs.60.00</div>
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
  export default {
    data: () => ({
      show: false
    })
  }
</script>