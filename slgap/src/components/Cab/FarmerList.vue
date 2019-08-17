<template>



<v-flex xs12 sm12 >
                    <v-card>
                      <v-toolbar color="green" dark>
                        <v-toolbar-title>Farmers</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>search</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <v-list>
                        <v-list-tile v-for="item in items1" :key="item.title" avatar @click="dialog = !dialog">
                          <v-list-tile-action>
                            <v-icon v-if="item.icon" color="pink">star</v-icon>
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








                    <v-dialog v-model="dialog" width="800px">
                          <v-card>
                            <v-card-title
                              class="grey lighten-4 py-4 title"
                            >
                              Farmer GAP Applicatiom Form
                            </v-card-title>
                            <v-container grid-list-sm class="pa-4">
                              <v-layout row wrap>
                                <v-flex xs12 align-center justify-space-between>
                                  <v-layout align-center>
                                    <v-avatar size="40px" class="mr-3">
                                      <img
                                        src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                                        alt=""
                                      >
                                    </v-avatar>
                                    <v-text-field
                                      placeholder="Name"
                                    ></v-text-field>
                                  </v-layout>
                                </v-flex>
                                <v-flex xs6>
                                  <v-text-field
                                    prepend-icon="business"
                                    placeholder="Province"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                  <v-text-field
                                    placeholder="District"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field
                                    prepend-icon="mail"
                                    placeholder="Email"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field
                                    type="tel"
                                    prepend-icon="phone"
                                    placeholder="(000) 000 - 0000"
                                    mask="phone"
                                  ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field
                                    prepend-icon="notes"
                                    placeholder="Notes"
                                  ></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-container>





                            <v-card-actions>
                              <v-btn flat color="primary">More</v-btn>
                              <v-spacer></v-spacer>
                              <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
                              <v-btn flat @click="dialog = false">Save</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>



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
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' }
              ],
      // Farmers List end

       e1: 'recent'
    }),
    props: {
      source: String
    }


  }
</script>
