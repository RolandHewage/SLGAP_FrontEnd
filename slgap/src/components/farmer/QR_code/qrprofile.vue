<template>
  <div>
    <div style="background:white;height:20px"></div>
    <v-layout>
      <v-flex xs12 sm4 offset-md1>
          <v-card>
            <v-card-media src="https://1.bp.blogspot.com/-sVvRGKU-9xU/Uoj55TfgBjI/AAAAAAAACNo/-f_U2I3OkL8/s1600/Tips+Menanam+Cabe+Di+Musim+Hujan.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Your QR Profile</h3>
                  <div>
                   Farmer Name : {{farmer.name}} <br>
                   Email : {{farmer.email}} <br>
                   Address :{{farmer.address}} <br>
                   GAP Certificate No. : 
                    
                  </div>
                </div>
            </v-card-title>
          </v-card>
      </v-flex>

      </v-layout>
      <br>
      <v-flex xs12 >
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title">
              <v-card>
                <v-card-media :src="card.src" height="50px">
                  <v-container fill-height fluid pa-2 >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  gfgsfgsfg
                </v-card-text>

                
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      </v-flex>
      
    
  </div>  
    
</template>

<script>

import axios from "axios";

export default {
    data: () => ({
     
          farmer:{

          },
          cards: [
            { title: 'Crop Details', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
            { title: 'Fertilize', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
            { title: 'Chemicals', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
            { title: 'Location', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 }
          ],
     

          dialog: false,
    
    
    
    })
}
</script>

<style scoped>

    
</style>


