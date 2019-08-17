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
    </v-content>  
            
  </v-app>

   
</template>


<script>

import navi from './CabNavi.vue';

export default {
    data: () => ({
      

        cards: [
                    { title: 'Requests', src: '/static/doc-images/front/1.jpg', flex: 4, link: "/cabhome/requests" },
                    { title: 'Audit', src: '/static/doc-images/front/2.jpg', flex: 4, link: "/cabhome/audit" },
                    { title: 'Farmers', src: '/static/doc-images/front/3.jpg', flex: 4, link: "/cabhome/farmers" },
                    { title: 'Crops', src: '/static/doc-images/front/4.jpg', flex: 4, link: "/cabhome/crops" },
                    { title: 'Chemical & Fertilizer Recomendations', src: '/static/doc-images/front/5.jpg', flex: 4, link: "/cabhome/chemical" },
                    { title: 'AIs', src: '/static/doc-images/front/13.jpg', flex: 4, link: "/cabhome/ais" }
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
          case 4: return 'brown'
          case 5: return 'indigo'
        }
      }
    },
    //<!-- Bottom Navigation ..... end -->

    components:{
      'navi' : navi
    }


  }    
</script>


<style>

</style>
