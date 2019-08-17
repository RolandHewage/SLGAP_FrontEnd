<template>
   <v-app id="inspire">
       <navi></navi>
      
        
           
      
        
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
          <farm_report></farm_report>
        </v-tab-item>
        <v-tab-item>
          
            
        </v-tab-item>
        <v-tab-item>
           <land_report></land_report>
        </v-tab-item>
        <v-tab-item>
          <yedaum></yedaum>
           
        </v-tab-item>
        <v-tab-item>
          <fertilizer></fertilizer>
         
        </v-tab-item>
        <v-tab-item>
           <chemical></chemical>
        </v-tab-item>
      </v-tabs-items>
    </div>
    </v-content>
   </v-app>


</template>

<script>
  



import navi from '../farmer_nav.vue';
import farm_report from './plant_manage/farm_report.vue'
import land_report from './plant_manage/land_report.vue'
import fertilizer from './plant_manage/fertilize.vue'
import yedaum from './plant_manage/yedaum.vue'
import chemical from './plant_manage/wedecide.vue'

  export default {
      
        data () {
            return {
            tab: null,
            items: [
                'Farm Report', 'Site Map','Land Report','Yedaum','Fertilizer','Chemicals','Water Supply','Harvest','Work Training'
            ],
            }
         },
         components:{
             'farm_report' : farm_report,
             'land_report':land_report,
             'yedaum': yedaum,
             'fertilizer': fertilizer,
             'chemical': chemical,
             'navi' : navi

         }
  }
</script>