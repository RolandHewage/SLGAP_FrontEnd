<template>
  <div>
    <navi></navi>
<v-container
        fluid
        grid-list-lg
      >
  <v-tabs
    centered
    color="light-green lighten-2"
    dark
    icons-and-text
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab>
      Payment 
      <v-icon>money</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      Favorites
      <v-icon>favorite</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Comment
      <v-icon>account_box</v-icon>
    </v-tab>

    <v-tabs-items v-model="tabs">
        <v-tab-item><Payment></Payment></v-tab-item>

        <v-tab-item><Comment></Comment></v-tab-item>
     
    </v-tabs-items>
  </v-tabs>
</v-container>
  </div>
</template>

<script>

import Payment from './Payment.vue'
import Comment from './Comment.vue'
import navi from '@/components/farmer_nav'
  export default {
    data () {
      return {
        //text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },

    components:{
               'Payment':Payment,
               'Comment':Comment
    }
  }
</script>
