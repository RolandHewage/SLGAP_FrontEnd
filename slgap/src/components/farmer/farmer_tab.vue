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
          <gapform></gapform>
        </v-tab-item>
        <v-tab-item>
            <test1></test1>
            
        </v-tab-item>
        <v-tab-item>
          
        </v-tab-item>
      </v-tabs-items>
    </div>
    </v-content>
   </v-app>


</template>

<script>
  

import test from '../Signup.vue';
import test1 from '../login.vue';
import navi from '../farmer_nav.vue';
import gapform from './Gap_Certificate/gapform.vue'

  export default {
      
        data () {
            return {
            tab: null,
            items: [
                'GAP Form', 'GAP Form Status'
            ],
            }
         },
         components:{
             //'singup' : sign,
             'gapform' : gapform,
             'test1' : test1,
             'navi' : navi

         }
  }
</script>