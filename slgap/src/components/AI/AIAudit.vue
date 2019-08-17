<template>



<v-flex xs12 sm12 >
                    <v-card>
                      <v-toolbar color="green" dark>
                        <v-toolbar-title>Farmers to Audit</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>search</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <v-list>
                        <!-- <v-list-tile v-for="item in items1" :key="item.title" avatar @click="dialog = !dialog"> -->
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







<!-- Audit Report start  -->

                    <v-dialog v-model="dialog" width="800px">
                          
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">
          Farmer Audit Record
        </v-card-title>
        <v-container grid-list-sm class="pa-4">

<v-stepper v-model="e13" vertical>
    <v-stepper-step step="1" >
      Farmer Details
    </v-stepper-step>
    <v-stepper-content step="1">
      

    <v-layout>
                <v-flex sm8>
                    <v-card>
                        <v-card-text>
                            <v-form>
                                <v-container grid-list-md>
                                     
                                    <v-layout wrap>
                                        <v-flex sm6>
                                        <v-text-field v-model="user.username"  label="Farmer Name"></v-text-field>
                                        </v-flex>
                                        <v-flex sm6>
                                            <v-text-field v-model="user.gender" label="Gender"></v-text-field>
                                        </v-flex>
                                        <v-flex sm6>
                                            <v-text-field v-model="user.dob" label="Date Of Birth"></v-text-field>
                                        </v-flex>
                                        <v-flex sm6>
                                             <v-text-field v-model="user.phoneNo" label="Contact Number"></v-text-field>
                                        </v-flex>
                                        <v-flex sm6>
                                             <v-text-field v-model="user.email" label="Email"></v-text-field>
                                        </v-flex>
                                        <v-flex sm6>
                                            <v-text-field v-model="user.nic" label="NIC No."></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field v-model="user.address" label="Adress"></v-text-field>
                                           
                                        </v-flex>
                                    </v-layout>
                                 </v-container> 
                             
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
        </v-layout>



    
      <v-btn color="primary" @click.native="e13 = 2">Continue</v-btn>
      <v-btn flat @click.native="dialog = false">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="2" >GAP Land History</v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" >

    <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

              <!-- <v-list>
                        <v-list-tile v-for="item in items1" :key="item.title" avatar >
      
                          <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                          </v-list-tile-content>
                          <v-list-tile-avatar >
                            <v-list-tile-action>
                              <v-checkbox
                                :label="`${item.checke.toString()}`"
                                v-model="item.checke"
                              ></v-checkbox>
                            </v-list-tile-action>
                          </v-list-tile-avatar>
                        </v-list-tile>
                      </v-list> -->
            <v-chip color="green" text-color="white">A1_1</v-chip>
            <v-switch :label="` ${checks.a1_1.toString()}`" v-model="checks.a1_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A1_2</v-chip>
            <v-switch :label="` ${checks.a1_2.toString()}`" v-model="checks.a1_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A1_3</v-chip>
            <v-switch :label="` ${checks.a1_3.toString()}`" v-model="checks.a1_3" color="green"></v-switch>
            <v-chip color="green" text-color="white">A1_4</v-chip>
            <v-switch :label="` ${checks.a1_4.toString()}`" v-model="checks.a1_4" color="green"></v-switch>
            <v-chip color="green" text-color="white">A1_5</v-chip>
            <v-switch :label="` ${checks.a1_5.toString()}`" v-model="checks.a1_5" color="green"></v-switch>
            <v-chip color="green" text-color="white">A1_6</v-chip>
            <v-switch :label="` ${checks.a1_6.toString()}`" v-model="checks.a1_6" color="green"></v-switch>

            </v-flex>          
    </v-layout>

      </v-card>
      <v-btn color="primary" @click.native="e13 = 3, testing()">Continue</v-btn>
      <v-btn flat @click.native="e13 = 1">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="3" >Land Management</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" >


    <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A2_1</v-chip>
            <v-switch :label="` ${checks.a2_1.toString()}`" v-model="checks.a2_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A2_2</v-chip>
            <v-switch :label="` ${checks.a2_2.toString()}`" v-model="checks.a2_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A2_3</v-chip>
            <v-switch :label="` ${checks.a2_3.toString()}`" v-model="checks.a2_3" color="green"></v-switch>
            <v-chip color="green" text-color="white">A2_4</v-chip>
            <v-switch :label="` ${checks.a2_4.toString()}`" v-model="checks.a2_4" color="green"></v-switch>
            <v-chip color="green" text-color="white">A2_5</v-chip>
            <v-switch :label="` ${checks.a2_5.toString()}`" v-model="checks.a2_5" color="green"></v-switch>
            <v-chip color="green" text-color="white">A2_6</v-chip>
            <v-switch :label="` ${checks.a2_6.toString()}`" v-model="checks.a2_6" color="green"></v-switch>
            <v-chip color="green" text-color="white">A2_7</v-chip>
            <v-switch :label="` ${checks.a2_7.toString()}`" v-model="checks.a2_7" color="green"></v-switch>

            </v-flex>          
    </v-layout>


      </v-card>
      <v-btn color="primary" @click.native="e13 = 4">Continue</v-btn>
      <v-btn flat @click.native="e13 = 2">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="4" >Seeds</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" >

    <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A3_1</v-chip>
            <v-switch :label="` ${checks.a3_1.toString()}`" v-model="checks.a3_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A3_2</v-chip>
            <v-switch :label="` ${checks.a3_2.toString()}`" v-model="checks.a3_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A3_3</v-chip>
            <v-switch :label="` ${checks.a3_3.toString()}`" v-model="checks.a3_3" color="green"></v-switch>
            

            </v-flex>          
    </v-layout>


      </v-card>
      <v-btn color="primary" @click.native="e13 = 5">Continue</v-btn>
      <v-btn flat @click.native="e13 = 3">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="5" >Soil</v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="grey lighten-1" class="mb-5" >

    <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A4_1</v-chip>
            <v-switch :label="` ${checks.a4_1.toString()}`" v-model="checks.a4_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_2</v-chip>
            <v-switch :label="` ${checks.a4_2.toString()}`" v-model="checks.a4_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_2_1</v-chip>
            <v-switch :label="` ${checks.a4_2_1.toString()}`" v-model="checks.a4_2_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_3</v-chip>
            <v-switch :label="` ${checks.a4_3.toString()}`" v-model="checks.a4_3" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_3_1</v-chip>
            <v-switch :label="` ${checks.a4_3_1.toString()}`" v-model="checks.a4_3_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_4</v-chip>
            <v-switch :label="` ${checks.a4_4.toString()}`" v-model="checks.a4_4" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_5</v-chip>
            <v-switch :label="` ${checks.a4_5.toString()}`" v-model="checks.a4_5" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_6</v-chip>
            <v-switch :label="` ${checks.a4_6.toString()}`" v-model="checks.a4_6" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_7</v-chip>
            <v-switch :label="` ${checks.a4_7.toString()}`" v-model="checks.a4_7" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_8</v-chip>
            <v-switch :label="` ${checks.a4_8.toString()}`" v-model="checks.a4_8" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_9</v-chip>
            <v-switch :label="` ${checks.a4_9.toString()}`" v-model="checks.a4_9" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_10</v-chip>
            <v-switch :label="` ${checks.a4_10.toString()}`" v-model="checks.a4_10" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_11</v-chip>
            <v-switch :label="` ${checks.a4_11.toString()}`" v-model="checks.a4_11" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_12</v-chip>
            <v-switch :label="` ${checks.a4_12.toString()}`" v-model="checks.a4_12" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_13</v-chip>
            <v-switch :label="` ${checks.a4_13.toString()}`" v-model="checks.a4_13" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_14</v-chip>
            <v-switch :label="` ${checks.a4_14.toString()}`" v-model="checks.a4_14" color="green"></v-switch>
            <v-chip color="green" text-color="white">A4_15</v-chip>
            <v-switch :label="` ${checks.a4_15.toString()}`" v-model="checks.a4_15" color="green"></v-switch>
          
            </v-flex>          
    </v-layout>

      </v-card>
      <v-btn color="primary" @click.native="e13 = 6">Continue</v-btn>
      <v-btn flat @click.native="e13 = 4">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="6" >Water</v-stepper-step>
    <v-stepper-content step="6">
      <v-card color="grey lighten-1" class="mb-5" >

    <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A5_1</v-chip>
            <v-switch :label="` ${checks.a5_1.toString()}`" v-model="checks.a5_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A5_2</v-chip>
            <v-switch :label="` ${checks.a5_2.toString()}`" v-model="checks.a5_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A5_3</v-chip>
            <v-switch :label="` ${checks.a5_3.toString()}`" v-model="checks.a5_3" color="green"></v-switch>
            <v-chip color="green" text-color="white">A5_4</v-chip>
            <v-switch :label="` ${checks.a5_4.toString()}`" v-model="checks.a5_4" color="green"></v-switch>
            <v-chip color="green" text-color="white">A5_5</v-chip>
            <v-switch :label="` ${checks.a5_5.toString()}`" v-model="checks.a5_5" color="green"></v-switch>
            <v-chip color="green" text-color="white">A5_6</v-chip>
            <v-switch :label="` ${checks.a5_6.toString()}`" v-model="checks.a5_6" color="green"></v-switch>
            <v-chip color="green" text-color="white">A5_7</v-chip>
            <v-switch :label="` ${checks.a5_7.toString()}`" v-model="checks.a5_7" color="green"></v-switch>

            </v-flex>          
    </v-layout>


      </v-card>
      <v-btn color="primary" @click.native="e13 = 7">Continue</v-btn>
      <v-btn flat @click.native="e13 = 5">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="7" >Diseases & Insecticide Control</v-stepper-step>
    <v-stepper-content step="7">
      <v-card color="grey lighten-1" class="mb-5">

    <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A6_1</v-chip>
            <v-switch :label="` ${checks.a6_1.toString()}`" v-model="checks.a6_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_2</v-chip>
            <v-switch :label="` ${checks.a6_2.toString()}`" v-model="checks.a6_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_3</v-chip>
            <v-switch :label="` ${checks.a6_3.toString()}`" v-model="checks.a6_3" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_4</v-chip>
            <v-switch :label="` ${checks.a6_4.toString()}`" v-model="checks.a6_4" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_5</v-chip>
            <v-switch :label="` ${checks.a6_5.toString()}`" v-model="checks.a6_5" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_6</v-chip>
            <v-switch :label="` ${checks.a6_6.toString()}`" v-model="checks.a6_6" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_7</v-chip>
            <v-switch :label="` ${checks.a6_7.toString()}`" v-model="checks.a6_7" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_8</v-chip>
            <v-switch :label="` ${checks.a6_8.toString()}`" v-model="checks.a6_8" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_9</v-chip>
            <v-switch :label="` ${checks.a6_9.toString()}`" v-model="checks.a6_9" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_10</v-chip>
            <v-switch :label="` ${checks.a6_10.toString()}`" v-model="checks.a6_10" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_11</v-chip>
            <v-switch :label="` ${checks.a6_11.toString()}`" v-model="checks.a6_11" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_12</v-chip>
            <v-switch :label="` ${checks.a6_12.toString()}`" v-model="checks.a6_12" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_13</v-chip>
            <v-switch :label="` ${checks.a6_13.toString()}`" v-model="checks.a6_13" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_14</v-chip>
            <v-switch :label="` ${checks.a6_14.toString()}`" v-model="checks.a6_14" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_15</v-chip>
            <v-switch :label="` ${checks.a6_15.toString()}`" v-model="checks.a6_15" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_16</v-chip>
            <v-switch :label="` ${checks.a6_16.toString()}`" v-model="checks.a6_16" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_17</v-chip>
            <v-switch :label="` ${checks.a6_17.toString()}`" v-model="checks.a6_17" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_18</v-chip>
            <v-switch :label="` ${checks.a6_18.toString()}`" v-model="checks.a6_18" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_19</v-chip>
            <v-switch :label="` ${checks.a6_19.toString()}`" v-model="checks.a6_19" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_20</v-chip>
            <v-switch :label="` ${checks.a6_20.toString()}`" v-model="checks.a6_20" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_21</v-chip>
            <v-switch :label="` ${checks.a6_21.toString()}`" v-model="checks.a6_21" color="green"></v-switch>
            <v-chip color="green" text-color="white">A6_22</v-chip>
            <v-switch :label="` ${checks.a6_22.toString()}`" v-model="checks.a6_22" color="green"></v-switch>
          
            </v-flex>          
    </v-layout>
        
      </v-card>
      <v-btn color="primary" @click.native="e13 = 8">Continue</v-btn>
      <v-btn flat @click.native="e13 = 6">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="8" >Harvests</v-stepper-step>
    <v-stepper-content step="8">
      <v-card color="grey lighten-1" class="mb-5" >
        
    <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A7_1</v-chip>
            <v-switch :label="` ${checks.a7_1.toString()}`" v-model="checks.a7_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A7_2</v-chip>
            <v-switch :label="` ${checks.a7_2.toString()}`" v-model="checks.a7_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A7_3</v-chip>
            <v-switch :label="` ${checks.a7_3.toString()}`" v-model="checks.a7_3" color="green"></v-switch>
            <v-chip color="green" text-color="white">A7_4</v-chip>
            <v-switch :label="` ${checks.a7_4.toString()}`" v-model="checks.a7_4" color="green"></v-switch>
            <v-chip color="green" text-color="white">A7_5</v-chip>
            <v-switch :label="` ${checks.a7_5.toString()}`" v-model="checks.a7_5" color="green"></v-switch>

            </v-flex>          
    </v-layout>

      </v-card>
      <v-btn color="primary" @click.native="e13 = 9">Continue</v-btn>
      <v-btn flat @click.native="e13 = 7">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="9" >Packing & Storage</v-stepper-step>
    <v-stepper-content step="9">
      <v-card color="grey lighten-1" class="mb-5" >

    <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A8_1</v-chip>
            <v-switch :label="` ${checks.a8_1.toString()}`" v-model="checks.a8_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A8_2</v-chip>
            <v-switch :label="` ${checks.a8_2.toString()}`" v-model="checks.a8_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A8_3</v-chip>
            <v-switch :label="` ${checks.a8_3.toString()}`" v-model="checks.a8_3" color="green"></v-switch>
            <v-chip color="green" text-color="white">A8_4</v-chip>
            <v-switch :label="` ${checks.a8_4.toString()}`" v-model="checks.a8_4" color="green"></v-switch>

            </v-flex>          
    </v-layout>

      </v-card>
      <v-btn color="primary" @click.native="e13 = 10">Continue</v-btn>
      <v-btn flat @click.native="e13 = 8">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="10" >Labour</v-stepper-step>
    <v-stepper-content step="10">
      <v-card color="grey lighten-1" class="mb-5" >

   <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A9_1</v-chip>
            <v-switch :label="` ${checks.a9_1.toString()}`" v-model="checks.a9_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A9_2</v-chip>
            <v-switch :label="` ${checks.a9_2.toString()}`" v-model="checks.a9_2" color="green"></v-switch>
            <v-chip color="green" text-color="white">A9_3</v-chip>
            <v-switch :label="` ${checks.a9_3.toString()}`" v-model="checks.a9_3" color="green"></v-switch>
            <v-chip color="green" text-color="white">A9_4</v-chip>
            <v-switch :label="` ${checks.a9_4.toString()}`" v-model="checks.a9_4" color="green"></v-switch>

            </v-flex>          
    </v-layout>


      </v-card>
      <v-btn color="primary" @click.native="e13 = 11">Continue</v-btn>
      <v-btn flat @click.native="e13 = 9">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="11" >Environment Safety</v-stepper-step>
    <v-stepper-content step="11">
      <v-card color="grey lighten-1" class="mb-5" >

   <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A10_1</v-chip>
            <v-switch :label="` ${checks.a10_1.toString()}`" v-model="checks.a10_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A10_2</v-chip>
            <v-switch :label="` ${checks.a10_2.toString()}`" v-model="checks.a10_2" color="green"></v-switch>

            </v-flex>          
    </v-layout>


      </v-card>
      <v-btn color="primary" @click.native="e13 = 12">Continue</v-btn>
      <v-btn flat @click.native="e13 = 10">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="12" >Internal Audit Records</v-stepper-step>
    <v-stepper-content step="12">
      <v-card color="grey lighten-1" class="mb-5" >

   <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>

            <v-chip color="green" text-color="white">A11_1</v-chip>
            <v-switch :label="` ${checks.a11_1.toString()}`" v-model="checks.a11_1" color="green"></v-switch>
            <v-chip color="green" text-color="white">A11_2</v-chip>
            <v-switch :label="` ${checks.a11_2.toString()}`" v-model="checks.a11_2" color="green"></v-switch>

            </v-flex>          
    </v-layout>

      </v-card>
      <v-btn color="primary" @click.native="e13 = 13,saveAudit()">Continue</v-btn>
      <v-btn flat @click.native="e13 = 11">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="13" >Final Results</v-stepper-step>
    <v-stepper-content step="13">
      <v-card color="grey lighten-1" class="mb-5" height="200px">

          <v-chip color="green" text-color="white">Marks {{markdata}}</v-chip>

      </v-card>
      <v-btn color="primary" @click.native="e13 = 1">Continue</v-btn>
      <v-btn flat @click.native="e13 = 12">Cancel</v-btn>
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

  <!-- Audit Report end -->



                  </v-flex>









</template>


<script>

  import axios from "axios";

 export default {
    data: () => ({
      dialog: false,
      drawer: null,
      markdata: 200,


      // Farmers List start
      // items1: [
      //           { title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' , checke: 'false'},
      //           { title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' , checke: 'false'},
      //           { title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' , checke: 'false'},
      //           { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' , checke: 'false'},
      //           { title: 'Mahinda Raja', avatar: '/static/doc-images/lists/5.jpg' , checke: 'false'},
      //           { title: 'Barack Obama', avatar: '/static/doc-images/lists/6.jpg' , checke: 'false'}
      //         ],
      items1: [],
      // Farmers List end

      // Check list start
      checkedValues: {
				notifications: false,
				sound: false,
				video: false,
				invites: false
			},
      // Check list end

      // User list start
      user: {},
      // User list end

      // Check list start
      checks: {
        gapFormId:148,
        a1_1: false,
        a1_2: false,
        a1_3: false,
        a1_4: false,
        a1_5: false,
        a1_6: false,

        a2_1: false,
        a2_2: false,
        a2_3: false,
        a2_4: false,
        a2_5: false,
        a2_6: false,
        a2_7: false,

        a3_1: false,
        a3_2: false,
        a3_3: false,

        a4_1: false,
        a4_2: false,
        a4_2_1: false,
        a4_3: false,
        a4_3_1: false,
        a4_4: false,
        a4_5: false,
        a4_6: false,
        a4_7: false,
        a4_8: false,
        a4_9: false,
        a4_10: false,
        a4_11: false,
        a4_12: false,
        a4_13: false,
        a4_14: false,
        a4_15: false,

        a5_1: false,
        a5_2: false,
        a5_3: false,
        a5_4: false,
        a5_5: false,
        a5_6: false,
        a5_7: false,

        a6_1: false,
        a6_2: false,        
        a6_3: false,        
        a6_4: false,
        a6_5: false,
        a6_6: false,
        a6_7: false,
        a6_8: false,
        a6_9: false,
        a6_10: false,
        a6_11: false,
        a6_12: false,
        a6_13: false,
        a6_14: false,
        a6_15: false,
        a6_16: false,
        a6_17: false,
        a6_18: false,
        a6_19: false,        
        a6_20: false,        
        a6_21: false,
        a6_22: false,

        a7_1: false,
        a7_2: false,
        a7_3: false,
        a7_4: false,
        a7_5: false,

        a8_1: false,
        a8_2: false,
        a8_3: false,
        a8_4: false,

        a9_1: false,
        a9_2: false,
        a9_3: false,
        a9_4: false,

        a10_1: false,
        a10_2: false,

        a11_1: false,
        a11_2: false
        
      },
      // Check list end

       e1: 'recent',
       e13: 1
    }),
    props: {
      source: String
    },

    created() {
        let headers ={ "content-type":"application/json"}     
     
       axios.post("http://localhost:8090/ai-officer/gapFarmersToAudit",headers)
      .then(response => {
        response.data;
        console.log(response.data);
        this.items1 = response.data;
      })
      .catch(error => {
        console.log(error);
      });

      // var self = this;
      // for(var i=0;i<this.items1.length;i++){
      //       self.item1[i].imageUrl = "http://localhost:8090/getphoto?username="+ self.items1[i].username;
      // }
      
  },

    methods: {

    testing(){
      console.log(this.checks);
    },

    // get gap form details for specific farmer in requests
    getMarks(Form_id){
      var self=this;
      let headers ={ "content-type":"application/json"}     
     
       axios.get('http://localhost:8090/ai-officer/marks', { params: { aid: Form_id } })
      .then(response => {
           console.log(response.data);
           //this.user = response.data;
           self.markdata=response.data;
      
      })
      .catch(error => {
        console.log(error);
      });
    },

    //save Audit..... 2018/09/07
    saveAudit(){
      var self=this;
      var token = localStorage.getItem('access_token');

      let settings = { 
        crossDomain: true,
        url:"http://localhost:8090/ai-officer/submitAuditReport",
        method:"post",
        data:this.checks,
        headers:{
          "content-type":"application/json",
          "Authorization":"Bearer " + token
        }
      };     
     
      axios(settings).then(function(response){
          alert("Audit Report Saved");
          console.log("Audit Report saved success");
          console.log(response.data);
          self.getMarks(response.data);
          
          //this.getMarks(response.data);
          //this.dialog = false;
          //location.reload();
      })
      .catch(function(error){
          console.log(error);
          alert("Audit Report Saved Error");
      });
    },

    // get gap form details for specific farmer in requests
    getgapformdetail(Form_id){
      let headers ={ "content-type":"application/json"}     
     
       axios.get('http://localhost:8090/ai-officer/gapformdetail',
                        { params: 
                          { 
                          gapForm_id: Form_id}})
      .then(response => {
           console.log(response.data);
           this.user = response.data;
      
      })
      .catch(error => {
        console.log(error);
      });
    }
	}


  }
</script>
