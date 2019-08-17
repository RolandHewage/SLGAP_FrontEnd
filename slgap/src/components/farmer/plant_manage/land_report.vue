<template>
    <div>
      <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                        <v-card-media src="@/assets/logo.png" height="200px">
                          </v-card-media>
                                  <v-card-title>
                                    <span class="headline">Report Of Land</span>
                                  </v-card-title>
                                  <v-card-text>
                                    <v-container grid-list-md>
                                      <v-layout wrap>
                                        <v-flex xs12>
                                            <v-select :items="items" v-model="e2" label="Land Own" class="input-group--focused" item-value="text" >
                                            </v-select>
                                          
                                        </v-flex>
                                      
                                       <v-flex xs12 sm6>
                                          
                                            <v-text>Test case 1</v-text>
    <v-switch :label="`Switch 1: ${switch1.toString()}`" v-model="switch1"></v-switch>
     
      <v-text>Test case 3</v-text>
    <v-switch :label="`Switch 3: ${switch3.toString()}`" v-model="switch3"></v-switch>
     
      
  
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                           <v-text>Test case 2</v-text>
    <v-switch :label="`Switch 2: ${switch2.toString()}`" v-model="switch2"></v-switch>
                                          <v-text>Test case 4</v-text>
    <v-switch :label="`Switch 4: ${switch4.toString()}`" v-model="switch4"></v-switch>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-text>Test case 5</v-text>
    <v-switch :label="`Switch 5: ${switch5.toString()}`" v-model="switch5"></v-switch>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                          
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                          <v-text-field label="If growed,Crop" required></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm6>
                                          <v-text-field label="Previous gorw Chemicals" required></v-text-field>
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
  export default{
    data (){
      return{

       items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    switch1: true,
    switch2: true,
    switch3: true,
    switch4: true,
    switch5: true,
      }
    }
  }
    
</script>
