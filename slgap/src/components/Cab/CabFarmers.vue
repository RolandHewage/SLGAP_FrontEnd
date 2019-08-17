<template>

<v-flex xs12 sm12 >
                    <v-card>
                      <v-toolbar color="green" dark>
                        <v-toolbar-title>GAP Registered Farmers</v-toolbar-title>
                        <v-menu :nudge-width="100">
                            <v-toolbar-title slot="activator">
                                <span>District</span>
                                <v-icon dark>arrow_drop_down</v-icon>
                            </v-toolbar-title>

                            <v-list>
                            <v-list-tile
                                v-for="item in items2"
                                :key="item"
                                
                            >
                            <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                        </v-menu>
                        <v-menu :nudge-width="150">
                            <v-toolbar-title slot="activator">
                                <span>Gowijana Sewa Division</span>
                                <v-icon dark>arrow_drop_down</v-icon>
                            </v-toolbar-title>

                            <v-list>
                            <v-list-tile
                                v-for="item in items3"
                                :key="item"
                                
                            >
                            <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                        </v-menu>
                        <v-menu :nudge-width="100">
                            <v-toolbar-title slot="activator">
                                <span>AI Division</span>
                                <v-icon dark>arrow_drop_down</v-icon>
                            </v-toolbar-title>

                            <v-list>
                            <v-list-tile
                                v-for="item in items4"
                                :key="item"
                                
                            >
                            <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                            </v-list>
                        </v-menu>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>search</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <v-list>
                        <v-list-tile v-for="item in items1" :key="item.title" avatar >
                          <v-list-tile-action>
                            <v-icon v-if="item.icon" color="green">star</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                          </v-list-tile-content>
                          <v-list-tile-avatar>
                            <img :src="item.avatar">
                          </v-list-tile-avatar>
                        </v-list-tile>
                      </v-list>
                    </v-card>

 </v-flex>

</template>

<script>

 export default {
    data: () => ({
      dialog: false,
      drawer: null,


      // Farmers List start
      items1: [
                { icon: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' },
                { title: 'Mahinda Raja', avatar: '/static/doc-images/lists/5.jpg' },
                { title: 'Barack Obama', avatar: '/static/doc-images/lists/6.jpg' }
              ],
      // Farmers List end

      // Zone start
      items2: [
        'Eastern', 'Western', 'North Eastern'
      ],
      // Zone end

      // Gowijanasewa start
      items3: [
        '1', '2', '3'
      ],
      // Gowijanasewa end

      // AI division start
      items4: [
        '1', '2', '3'
      ],
      // AI division end

       e1: 'recent',
       e13: 1
    }),
    props: {
      source: String
    }


  }
</script>

                    