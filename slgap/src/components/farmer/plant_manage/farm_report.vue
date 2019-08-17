<template>
  <div>
      <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                        <v-card-media src="@/assets/logo.png" height="200px">
                          </v-card-media>
                                  <v-card-title>
                                    <span class="headline">Report Of Farm</span>
                                  </v-card-title>
                                  <v-card-text>
                                    <v-container grid-list-md>
                                      <v-layout wrap>
                                    
                                          <v-flex xs12>
                                            <v-text-field label="Name" required></v-text-field>
                                          </v-flex>
                                          <v-flex xs12>
                                            <v-text-field label="Address" required></v-text-field>
                                          </v-flex>                                    
                                          <v-flex xs12 sm6>
                                            <v-text-field label="Email" required></v-text-field>
                                          </v-flex>
                                          <v-flex xs12 sm6>
                                            <v-text-field label="Phone" required></v-text-field>
                                          </v-flex>
                                          <v-flex xs12 sm6>
                                            <v-text-field label="Works(Non puhunu)" required></v-text-field>
                                          </v-flex>
                                          <v-flex xs12 sm6>
                                            <v-text-field label="Works(Puhuna)" required></v-text-field>
                                          </v-flex>
                                          <v-flex xs12 sm6>
                                            <v-text-field label="Qty of Site" required></v-text-field>
                                          </v-flex>

                                          <v-flex xs12 sm6>
                                            <v-text-field label="Target Market" required></v-text-field>
                                          </v-flex>
                                        
                                          
                                          
                                      </v-layout>
                                 
                                    </v-container>
                                    <small>*indicates required field</small>
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click.native="dialog = false">Update</v-btn>
                                  </v-card-actions>
                                </v-card>

              </v-flex>
          </v-layout>
  </div>

  </template>

  <script>
  export default {
    dialog:false,
    
    data: () => ({
      e6: 1,
      
      dialog: false,
      headers: [
        {
          text: 'Crop Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Farmer Reg No.', value: 'carbs' },
        { text: 'Crop Reg No.', value: '' },
        { text: 'Site Qty.', value: 'fat' },
        
        { text: 'Gap Creficate', value: 'protein' },
        
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0
          }
          
        ]
      },

      
    }
  }
  </script>
  
