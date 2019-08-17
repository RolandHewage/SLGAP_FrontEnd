<template>



<v-flex xs12 sm12 >
                    <v-card>
                      <v-toolbar color="green" dark>
                        <v-toolbar-title>Farmer Requests</v-toolbar-title>
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








                    <v-dialog v-model="dialog" width="800px">
                          
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Farmer GAP Applicatiom Form
        </v-card-title>
        <v-container grid-list-sm class="pa-4">

<v-stepper v-model="e13" vertical>
    <v-stepper-step step="1" complete>
      Commercial Farmer Registration Form
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-card  class="mb-5" >

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



      </v-card>
      <v-btn color="primary" @click.native="e13 = 2">Continue</v-btn>
      <v-btn flat @click.native="dialog = false">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="2" complete>Land Details</v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e13 = 3">Continue</v-btn>
      <v-btn flat @click.native="e13 = 1">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="3" complete>Out Grower Details</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e13 = 4">Continue</v-btn>
      <v-btn flat @click.native="e13 = 2">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="4" complete>Recommendation of Agriculture Instructor/Field Assistant</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e13 = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>


        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>

          </v-container>
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
                { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' },
                { title: 'Mahinda Raja', avatar: '/static/doc-images/lists/5.jpg' },
                { title: 'Barack Obama', avatar: '/static/doc-images/lists/6.jpg' }
              ],
      // Farmers List end

       e1: 'recent',
       e13: 1
    }),
    props: {
      source: String
    }


  }
</script>

