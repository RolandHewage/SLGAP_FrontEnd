<template>
    <div>
        <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1" >
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">GAP Maze AI Profile</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
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

      <!-- <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn> -->
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
    data () {
      return {
        dialog: false,
        drawer: null,
        imageUrl:"/static/profile_pic/default.png",
        items: [
          { title: 'Home', icon: 'dashboard', link:'/aifront' },
          { title: 'Requests', icon: 'question_answer', link:'/aihome/requests' },
          { title: 'Audit', icon: 'question_answer', link:'/aihome/audit' },
          { title: 'Farmers', icon: 'question_answer', link:'/aihome/farmers' },
          { title: 'Crops', icon: 'question_answer', link:'/aihome/crops' },
          { title: 'Chemical', icon: 'question_answer', link:'/aihome/chemical' },
          { title: 'Fertilizer', icon: 'question_answer', link:'/aihome/fertilizer' },  
        ],

        //Sela notifications
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
      ]
      }
    }
  }
</script>
