<template>
    <div>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      stateless
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="item in items"
          :key="item.text"
          :to="item.link"
        >
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{item.text}}</v-list-tile-title>
        </v-list-tile-content>

          
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
      app
      fixed>
      
      <v-toolbar-title style="width: 350px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">GAP Maze Farmer Profile</span>
      </v-toolbar-title>
     
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large >
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
            
          >
          <!--v-list>
            <v-list-tile v-for="(item, i) in log" :key="i" >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
          </v-list-->
        </v-avatar>
      </v-btn>
    </v-toolbar>
        
    </div>
</template>

<script>
export default {
      data(){
        return{
          dialog: false,
      drawer: null,
      items: [
        { icon: 'contacts', text: 'Home' ,link:'/farmer' },
        { icon: 'history', text: 'GAP Certificate' ,link:'/manage_tab' },
        { icon: 'content_copy', text: 'Plant Manage',link:'/manage_tab' },
        { icon: 'settings', text: 'Plant History',link:'/history' },
        { icon: 'chat_bubble', text: 'Genarate QR',link:'/qrcode' },
        { icon: 'help', text: 'Reconmendation' ,link:'/recomnedations'},
        { icon: 'phonelink', text: 'Market',link:'/market' },
        
      ],
     

        }
      }
}
</script>
