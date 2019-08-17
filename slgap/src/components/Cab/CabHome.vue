<template>
  <v-app id="inspire">
    
    <navi></navi>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>

            <router-view/>

        </v-layout>



      </v-container>
    </v-content>  


    <v-card height="200px">
          <!--  <div class="headline text-xs-center pa-5">

            Active: {{ e2 }}

             <component v-bind:is="currentTab" > </component>

            </div>   -->
          <v-bottom-nav
            :value="true"
            :active.sync="e2"
            :color="color"
            
            shift
            :fixed="true"
          >
          <!-- <v-btn dark v-on:click="currentTab = tab-home">   -->

          <!--  <v-btn dark @click.stop="dialog = !dialog">    -->
          <v-btn dark to="/cabhome/requests">
            <span>Requests</span>
            <v-icon>ondemand_video</v-icon>
          </v-btn>

          <v-btn dark to="/cabhome/audit" >
            <span>Audit</span>
            <v-icon>music_note</v-icon>
          </v-btn>

          <v-btn dark to="/cabhome/farmers" >
            <span>Farmers</span>
            <v-icon>book</v-icon>
          </v-btn>

          <v-btn dark to="/cabhome/crops" >
            <span>Crops</span>
            <v-icon>image</v-icon>
          </v-btn>

          <v-btn dark to="/cabhome/chemical" >
            <span>Chemical</span>
            <v-icon>chemical</v-icon>
          </v-btn>

          <v-btn dark to="/cabhome/ais" >
            <span>AIs</span>
            <v-icon>image</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-card>
            
  </v-app>

   
</template>


<script>
import navi from './CabNavi.vue';

export default {
    data: () => ({

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
