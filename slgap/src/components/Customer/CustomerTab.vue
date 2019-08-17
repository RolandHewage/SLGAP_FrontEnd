<template>
   <v-app id="inspire">
       <navi></navi>
    
    <v-content>  
      <div>
          
      <v-toolbar color="green" tabs>
     
        <v-tabs
          slot="extension"
          v-model="tab"
          color="#00FF4D"
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
          <VegitableTab></VegitableTab>
        </v-tab-item>
        <v-tab-item>
            <FruitTab></FruitTab>
            
        </v-tab-item>
        <v-tab-item>
          
        </v-tab-item>
      </v-tabs-items>
    </div>
    </v-content>
   </v-app>


</template>

<script>
  



import navi from './farmer_nav.vue';
import VegitableTab from './VegitableTab.vue'
import FruitTab from './FruitTab.vue'


  export default {
      
        data () {
            return {
            tab: null,
            items: [
                'Vegitables', 'Fruits'
            ],
            }
         },
         components:{
             
             'VegitableTab' : VegitableTab,
             'FruitTab' : FruitTab,
             'navi' : navi

         }
  }
</script>


