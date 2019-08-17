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
          <add_product></add_product>
        </v-tab-item>
        <v-tab-item>
            <view_product></view_product>
            
        </v-tab-item>
        <v-tab-item>
          
        </v-tab-item>
      </v-tabs-items>
    </div>
    </v-content>
   </v-app>


</template>

<script>
  


import navi from '../farmer_nav.vue';
import add_product from './market/add_product.vue'
import view_product from './market/view_product.vue'

  export default {
      
        data () {
            return {
            tab: null,
            items: [
                'Add Products', 'View Add Products','Purchase'
            ],
            }
         },
         components:{
             //'singup' : sign,
             'add_product' : add_product,
             'view_product' : view_product,
             'navi' : navi

         }
  }
</script>