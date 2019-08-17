<template>
  <div id="app">
    <v-app id="inspire">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step editable :complete="e6 > 1" step="1">
          Detail About Weedecide
         
        </v-stepper-step>
            
            <v-stepper-content step="1">
                
                <div>
                
                
                    <v-data-table :headers="headers_fertilize_purchase" :items="desserts" hide-actions class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs">{{ props.item.calories }}</td>
                        <td class="text-xs">{{ props.item.fat }}</td>
                        <td class="text-xs">{{ props.item.carbs }}</td>
                        <td class="text-xs">{{ props.item.protein }}</td>
                        
                    </template>
                    <template slot="no-data">
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                    </v-data-table>
                </div>    
                <v-dialog v-model="purchase" persistent max-width="500px">
                        <v-btn color="error"  slot="activator" >Add New Record </v-btn>
                            
                                    <v-card>
                                        <v-card-title>
                                        <span class="headline">Add Plant</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Purchase Data" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                            <v-select :items="items" label="Fertilize"></v-select>
                                            </v-flex>
                                                                            
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Purchase Qty." required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Purchase Place" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Product Company" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Item Code" required></v-text-field>
                                            </v-flex>
                                                                                    
                                            
                                            </v-layout>
                                        </v-container>
                                        
                                        </v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" flat @click.native="purchase = false">Close</v-btn>
                                        <v-btn color="blue darken-1" flat @click.native="purchase = false">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>

                    
        
                        </v-dialog>  
                <v-btn color="primary" @click="e6 = 2">Go To Next Form</v-btn>
            
            </v-stepper-content>
        
            <v-stepper-step editable :complete="e6 > 2" step="2">Insect Controller</v-stepper-step>
        
            <v-stepper-content step="2">
                <div>
                
                    <v-data-table :headers="headers_organic" :items="desserts" hide-actions class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs">{{ props.item.calories }}</td>
                        <td class="text-xs">{{ props.item.fat }}</td>
                        <td class="text-xs">{{ props.item.carbs }}</td>
                        <td class="text-xs">{{ props.item.protein }}</td>
                        
                    </template>
                    <template slot="no-data">
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                    </v-data-table>
                </div>    
                <v-dialog v-model="dialog" persistent max-width="500px">
                        <v-btn color="error"  slot="activator" >Add New Record </v-btn>
                            
                                    <v-card>
                                        <v-card-title>
                                        <span class="headline">Add Plant</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Data" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                            <v-select :items="items" label="Fertilize"></v-select>
                                            </v-flex>
                                                                            
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Area" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Qty." required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-select items="items" label="Akaraya"></v-select>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Katti No." required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Person Name" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Company Name" required></v-text-field>
                                            </v-flex>
                                                                                    
                                            
                                            </v-layout>
                                        </v-container>
                                        <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>

                    
        
                </v-dialog>  
                <v-btn color="primary" @click="e6 = 3">Go To Next Form</v-btn>
            </v-stepper-content>
        
            <v-stepper-step  editable :complete="e6 > 3" step="3">Deciase Contrall chemical</v-stepper-step>
        
            <v-stepper-content step="3">
                <div>
                
                    <v-data-table :headers="headers_organic" :items="desserts" hide-actions class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs">{{ props.item.calories }}</td>
                        <td class="text-xs">{{ props.item.fat }}</td>
                        <td class="text-xs">{{ props.item.carbs }}</td>
                        <td class="text-xs">{{ props.item.protein }}</td>
                        
                    </template>
                    <template slot="no-data">
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                    </v-data-table>
                </div>    
                <v-dialog v-model="dialog" persistent max-width="500px">
                        <v-btn color="error"  slot="activator" >Add New Record </v-btn>
                            
                                    <v-card>
                                        <v-card-title>
                                        <span class="headline">Add Plant</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Data" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                            <v-select :items="items" label="Fertilize"></v-select>
                                            </v-flex>
                                                                            
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Area" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Qty." required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-select items="items" label="Akaraya"></v-select>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Katti No." required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Person Name" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Company Name" required></v-text-field>
                                            </v-flex>
                                                                                    
                                            
                                            </v-layout>
                                        </v-container>
                                        <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>

                    
        
                </v-dialog>  
                <v-btn color="primary" @click="e6 = 3">Go To Next Form</v-btn>
            </v-stepper-content>

            <v-stepper-step  editable :complete="e6 > 4" step="4">Deciase Contrall </v-stepper-step>

            <v-stepper-content step="4">
                <div>
                
                    <v-data-table :headers="headers_organic" :items="desserts" hide-actions class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs">{{ props.item.calories }}</td>
                        <td class="text-xs">{{ props.item.fat }}</td>
                        <td class="text-xs">{{ props.item.carbs }}</td>
                        <td class="text-xs">{{ props.item.protein }}</td>
                        
                    </template>
                    <template slot="no-data">
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                    </v-data-table>
                </div>    
                <v-dialog v-model="dialog" persistent max-width="500px">
                        <v-btn color="error"  slot="activator" >Add New Record </v-btn>
                            
                                    <v-card>
                                        <v-card-title>
                                        <span class="headline">Add Plant</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Data" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                            <v-select :items="items" label="Fertilize"></v-select>
                                            </v-flex>
                                                                            
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Area" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Qty." required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-select items="items" label="Akaraya"></v-select>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Katti No." required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Person Name" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field label="Company Name" required></v-text-field>
                                            </v-flex>
                                                                                    
                                            
                                            </v-layout>
                                        </v-container>
                                        <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                                        <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>

                    
        
                </v-dialog>  
                <v-btn color="primary" @click="e6 = 1">Go To Next Form</v-btn>
            </v-stepper-content>
    
      
      </v-stepper>
      
    </v-app>
  </div>

  </template>

  <script>
  export default {
    dialog:false,
    purchase:false,

    data: () => ({
      e6: 1,
      
      dialog: false,
      purchase:false,
      headers_fertilize_purchase: [
        {
          text: 'Pharse Data',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Fertilize', value: 'carbs' },
        { text: 'Purchase Qty.', value: '' },
        { text: 'Purchase Place', value: 'fat' },
        { text: 'Product Company', value: 'protein' },
        { text: 'Item Code', value: 'protein' },
        
      ],
      headers_organic:[
       {
          text: 'Data',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Organic Fertilize', value: 'carbs' },
        { text: 'Area', value: '' },
        { text: 'Qty.', value: 'fat' },
        { text: 'Akaraya', value: 'protein' },
        { text: 'Katti No.', value: 'protein' },
        { text: 'Person Name', value: 'protein' },
        { text: 'Product Company', value: 'protein' },
        
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
  
