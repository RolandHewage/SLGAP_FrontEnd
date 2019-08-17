<template>
  
<v-app id="inspire">
    

    <navi></navi>

    <v-content>
      
      <v-container fluid fill-height>
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
      <input id="pac-input" />

      <div>
        <google-map name="example"></google-map>
      </div>

      <div id="current">Nothing yet...</div>

    </v-content>  
            
  </v-app>

   
</template>


<script>

import navi from './AINavi.vue';
import GoogleMapInsert from "@/components/GoogleMapInsert.vue";

export default {

    data: () => ({


        cards: [
                    { title: 'Requests', src: '/static/doc-images/front/17.jpg', flex: 4, link: "/aihome/requests" },
                    { title: 'Audit', src: '/static/doc-images/front/8.jpg', flex: 4, link: "/aihome/audit" },
                    { title: 'Farmers', src: '/static/doc-images/front/9.jpg', flex: 4, link: "/aihome/farmers" },
                    { title: 'Crops', src: '/static/doc-images/front/10.jpg', flex: 4, link: "/aihome/crops" },
                    { title: 'Chemical Recomendations', src: '/static/doc-images/front/15.jpg', flex: 4, link: "/aihome/chemical" },
                    { title: 'Fertilizer Recommendations', src: '/static/doc-images/front/16.jpg', flex: 4, link: "/aihome/fertilizer" }
        ],





       e1: 'recent',

      //<!-- Bottom Navigation ..... start -->
      e2: 3
      //<!-- Bottom Navigation ..... end -->
    }),
    props: {
      source: String
    },

    //<!-- Bottom Navigation ..... start -->
    computed: {
      color () {
        switch (this.e2) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    },
    //<!-- Bottom Navigation ..... end -->

    components:{
      'navi' : navi,
      'google-map':GoogleMapInsert
    }


  }    
</script>


<style>

</style>
