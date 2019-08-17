<template>
    <div>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      stateless
      app>
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
      
      <v-toolbar-title style="width:350px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">GAP Maze Farmer Profile</span>
      </v-toolbar-title>
     
      <v-spacer></v-spacer>
      <v-menu offset-y origin="center center" class="elelvation-1" :nudge-bottom="14" transition="scale-transition">
        <v-btn icon flat slot="activator">
        <v-badge color="red" overlap>
          <span slot="badge">3</span>
          <v-icon medium>notifications</v-icon>
        </v-badge>
        </v-btn>
        <notification-list></notification-list>
      </v-menu>
      <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
        <v-btn icon large flat slot="activator">
          <v-avatar size="30px">
            <!-- <img src="/static/profile_pic/default.png" alt="Michael Wang"/> -->
            <img :src=imageUrl alt="Sl Gap"  />
          </v-avatar>
        </v-btn>
        <v-list class="pa-0">
          <v-list-tile v-for="(item,index) in items_toolbarmenu" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
        
    </div>
</template>

<script>
import NotificationList from "@/components/farmer/NotificationList";
import Util from "@/util";

export default {
  components: {
    NotificationList
  },

  data() {
    return {
      dialog: false,
      drawer: null,
      imageUrl:"/static/profile_pic/default.png",
      items_toolbarmenu: [
        {
          icon: "account_circle",
          href: "#",
          title: "Profile",
          click: e => {
            this.$router.push("/profile");
          }
        },
        {
          icon: "settings",
          href: "#",
          title: "Settings",
          click: e => {
            console.log(e);
          }
        },
        {
          icon: "fullscreen_exit",
          href: "#",
          title: "Logout",
          click: e => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("email");
            localStorage.removeItem("first_name");
            localStorage.removeItem("gender");
            localStorage.removeItem("last_name");
            localStorage.removeItem("user_id");
            localStorage.removeItem("username");
            localStorage.removeItem("dob");
            localStorage.removeItem("address");
            localStorage.removeItem("nic");
            localStorage.removeItem("phone_no");
            this.$router.push("/");
          }
        }
      ],
      items: [
        { icon: "contacts", text: "Home", link: "/farmer" },
        { icon: "history", text: "GAP Certificate", link: "/manage_tab" },
        { icon: "content_copy", text: "Plant Manage", link: "/history" },
        { icon: "settings", text: "Plant History", link: "/manage_tab" },
        { icon: "chat_bubble", text: "Genarate QR", link: "/qrcode" },
        { icon: "help", text: "Reconmendation", link: "/recomnedations" },
        { icon: "phonelink", text: "Market", link: "/market" }
      ]
    };
  },
  created: function() {
     var self = this;
     self.imageUrl = "http://localhost:8090/getphoto?username="+localStorage.getItem("username");
    //  if(self.imageUrl==null){
    //    self.imageUrl = "/static/profile_pic/default.png";
    //  }
     console.log(self.imageUrl);
  }
};
</script>
