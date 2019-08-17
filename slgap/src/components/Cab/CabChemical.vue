<template>
   <v-flex xs12 sm12 >
       
      
        
           
      
        
    <v-content>  
      <div>
          <v-jumbotron
               
                dark
                src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2017/06/maize-plantation.jpg?w=680&ssl=1"
                height="100px"
                margin="20px"
            >
             
            </v-jumbotron>
      <v-toolbar color="#06C621" dark tabs>
     
        
  
        <v-tabs
          slot="extension"
          v-model="tab"
          color="#006902"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
  
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-toolbar>
  
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <chemical></chemical>
        </v-tab-item>
        <v-tab-item>
            <fertilizer></fertilizer>
            
        </v-tab-item>
        <v-tab-item>
          
        </v-tab-item>
      </v-tabs-items>
    </div>
    </v-content>
   </v-flex>


</template>

<script>
  


import navi from './CabNavi.vue';
import chemical from './recomendation/chemical.vue'
import fertilizer from './recomendation/fertilizer.vue'

  export default {
      
        data () {
            return {
            tab: null,
            items: [
                'Chemicals', 'Fertilizer'
            ],
            }
         },
         components:{
             //'singup' : sign,
             'chemical' : chemical,
             'fertilizer' : fertilizer,
             'navi' : navi

         }
  }
</script>