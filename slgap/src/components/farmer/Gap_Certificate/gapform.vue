<template>
    <v-flex xs12 sm12>
    <v-stepper v-model="e6" vertical >
        <v-stepper-step editable :complete="e6>1" step="1" >
            GAP Certificate
            <small>Enter detail</small>
        </v-stepper-step>
        <!-- Farmer detil-->
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
            
            
            <v-btn color="primary" @click="e6=2,gapformclick()">Contiune</v-btn>
        </v-stepper-content>
        <v-stepper-step editable :complete="e6>2" step="2">
            Location Details
            <small>detail about </small>
        </v-stepper-step>
        <!-- location detail -->
        <v-stepper-content step="2">
             <v-layout>
                <v-flex sm8>
                    <v-card>
                        <v-card-text>
                            <v-form>
                                <v-container grid-list-md>
                                     
                                    <v-layout wrap>
                                        <v-flex sm6>
                                        <input type="hidden" v-model="loc.user_id">
                                        <v-select
                                            :items="provience"
                                            v-model="loc.provience"
                                            label="Province"
                                            solo
                                            ></v-select>
                                        </v-flex>
                                        <v-flex sm6>
                                         <v-select
                                            :items="distric"
                                            v-model="loc.distric"
                                            label="Distric"
                                            solo
                                            ></v-select>
                                        </v-flex>
                                        <v-flex sm6>
                                        <v-select
                                            :items="dsdivision"
                                            v-model="loc.dsDivision"
                                            label="DS Divition"
                                            solo
                                            ></v-select>
                                        </v-flex>
                                        <v-flex sm6>
                                        <v-select
                                            :items="gndivision"
                                            v-model="loc.gnDivision"
                                            label="GN Divition"
                                            solo
                                            ></v-select>
                                        </v-flex>
                                        <v-flex sm6>
                                        <v-select
                                            :items="arpadivision"
                                            v-model="loc.arpaDivision"
                                            label="ARPA Divition"
                                            solo
                                            ></v-select>
                                        </v-flex>
                                        
                                    </v-layout>
                                 </v-container> 
                                    
                                   
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6=3,setlanddetail()">Continue</v-btn>
        </v-stepper-content>
        <v-stepper-step editable :complete="e6>3" step="3">
            Land Details
            <small>Report about land details</small>
        </v-stepper-step>
        <!-- land /soil detail-->
        <v-stepper-content step="3">
            <v-layout>
                <v-flex sm8>
                    <v-card>
                        <v-card-text>
                            <v-form>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex sm12>
                                            <v-text-field v-model="land.soilType" label="Soil Type"></v-text-field>
                                        </v-flex>
                                        <v-flex sm6>
                                            <v-text-field v-model="land.plrNo" label="PLR No."></v-text-field>
                                        </v-flex>
                                        <v-flex sm6>
                                            <v-select v-model="land.land_owner_ship" :items="landownership" label="Land Ownership" solo></v-select>
                                        </v-flex>
                                        <v-flex sm6>
                                            <v-select v-model="land.water_resource" :items="warterresource" label="Water Resource" solo></v-select>
                                        </v-flex>
                                        <v-flex sm6>
                                            <v-select v-model="land.irrigation" :items="typeofirrigation" label="Type of Irrigation" solo></v-select>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-btn color="primary" @click="e6=4,setsoildetail()">Continue</v-btn>
        </v-stepper-content>
        <v-stepper-step editable :complete="e6>4" step="4">
            Crop detail
            <small>details about crop</small>
        </v-stepper-step>
        <!-- gap crop details -->
        <v-stepper-content step="4">
            
           
                <v-data-table
                        :headers="headers"
                        :items="crops"
                        hide-actions
                        class="elevation-1"
                    >
                        <template slot="items" slot-scope="props">
                       
                        
                        <td>{{ props.item.crop_name }}</td>
                        <td >{{ props.item.date }}</td>
                        <td >{{ props.item.variety }}</td>
                        <td >{{ props.item.extent }}</td>
                        <td >{{ props.item.yield }}</td>
                        </template>
                </v-data-table>
                  
                <!--add crop record dialog-->
                <v-dialog   v-model="cropdialog" persistent max-width="500px">
                    <v-btn color="error"  slot="activator" >Add New Record </v-btn>
                       <v-card>
                            <v-card-title>
                                        <span class="headline">Add Crop</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="crop.crop_name" label="Crop"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                            <v-text-field v-model="crop.date" label="Date of planting"></v-text-field>
                                            </v-flex>
                                                                            
                                            <v-flex xs12 sm6>
                                                <v-text-field  v-model="crop.variety" label="Variety" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="crop.extent" label="Extent" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="crop.yield" label="Yield"></v-text-field>
                                            </v-flex>
                                           
                                            </v-layout>
                                        </v-container>
                                        
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn  flat @click.native="close">Close</v-btn>
                                            <v-btn  flat @click.native="setcropdetail">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>     
                                    
                </v-dialog>  
            <v-btn color="primary" @click="e6=5">Continue</v-btn>
        </v-stepper-content>
        <v-stepper-step editable :complete="e6>5" step="5">
            Out Grower Detail
            <small>details about out crop</small>
        </v-stepper-step>
        <!-- gap outer crop details -->
        <v-stepper-content step="5">
           <!--out grower crop add table-->
           
                <v-data-table
                        :headers="outer_grower"
                        :items="outer_crops"
                        hide-actions
                        class="elevation-1"
                    >
                        <template slot="items" slot-scope="props">
                       
                        
                        <td>{{ props.item.crop_outer }}</td>
                        <td >{{ props.item.outer_extent }}</td>
                        <td >{{ props.item.outer_company }}</td>
                        <td >{{ props.item.outer_period }}</td>
                        
                        </template>
                </v-data-table>
                  
                <!--add crop record dialog-->
                <v-dialog   v-model="outer_cropdialog" persistent max-width="500px">
                    <v-btn color="error"  slot="activator" >Add New Record </v-btn>
                       <v-card>
                            <v-card-title>
                                        <span class="headline">Add OuterGrower Crop</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="outer.crop_name" label="Crop" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                            <v-text-field v-model="outer.extent" label="Extent"></v-text-field>
                                            </v-flex>
                                                                            
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="outer.company" label="Company" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="outer.period" label="Period" required></v-text-field>
                                            </v-flex>
                                           
                                           
                                            </v-layout>
                                        </v-container>
                                        
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn  flat @click.native="outer_cropdialog = false">Close</v-btn>
                                            <v-btn  flat @click.native="setoutercropdetail()">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>     
                                    
                </v-dialog>  
            <v-btn color="primary" @click="e6=5">Continue</v-btn>
            
        </v-stepper-content>
        <v-stepper-step editable :complete="e6>6" step="6"> 
            
            Financial
            <small>details about Financial</small>
        </v-stepper-step>
        <!-- financial detail -->
        <v-stepper-content step="6">
            
            <!--out grower crop add table-->
           
                <v-data-table
                        :headers="loan_header"
                        :items="loan_detail"
                        hide-actions
                        class="elevation-1"
                    >
                        <template slot="items" slot-scope="props">
                       
                        
                        <td>{{ props.item.loan }}</td>
                        <td >{{ props.item.amount }}</td>
                        <td >{{ props.item.institute }}</td>
                        <td >{{ props.item.branch_name }}</td>
            
                        
                        </template>
                </v-data-table>
                  
                <!--add crop record dialog-->
                <v-dialog   v-model="financial_table" persistent max-width="500px">
                    <v-btn color="error"  slot="activator" >Add New Record </v-btn>
                       <v-card>
                            <v-card-title>
                                        <span class="headline">Add Financial Inclution</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6>
                                                <v-select v-model="financial.loanType" :items="loan_types" label="Loan Type"></v-select>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                            <v-text-field v-model="financial.amount" label="Amount"></v-text-field>
                                            </v-flex>
                                                                            
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="financial.institute_name" label="Institute" ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6>
                                                <v-text-field v-model="financial.branch_name" label="Branch Name" ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                        
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn  flat @click.native="financial_table = false">Close</v-btn>
                                            <v-btn  flat @click.native="setfinancialdetail()">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>     
                                    
                </v-dialog>  
            <v-btn color="primary" @click="e6=5">Submit To Form</v-btn>
        </v-stepper-content>
    </v-stepper>
    </v-flex>
</template>


<script>

import axios from "axios";
import land_reportVue from '../plant_manage/land_report.vue';



 export default {
     cropdialog:false,

    data () {
        return {
            
        //location data  
            arpadivision:["ARPA1","ARPA2","ARPA3"],
            gndivision:["GN1","GN2","GN3"],
            distric:["Galle","Matara","Gampaha"],
            provience:["Sorthern","Western"],
            dsdivision:["DS1","DS2","DS3"],
            //land data
            landownership:["Lease","Deed","Other"],
            typeofirrigation:["Major","Minor","Agro Well"],
            warterresource:["Irrigated","Water"],
            //crop detail table
            cropdialog:false,
            editedIndex: -1,
            headers: [
                { text: 'Crop', align: 'left',value: 'crop_name'},
                { text: 'Date of planting', value: 'date' },
                { text: 'Variety', value: 'variety' },
                { text: 'Extent', value: 'extent' },
                { text: 'Yield', value: 'yield' },
        
            ],
                
            crops: [
            /*{
                value:false,  
                crop: 'Mangus',
                date: '2015/06/23',
                variety: 'test',
                extent: 26,
                yield: 20,
                
            },*/
            ],

            editcrop: {
                crop_name: '',
                date: '',
                variety: 0,
                extent: 0,
                yield: 0
            },

            defaultcrop: {
                crop_name: '',
                date: '',
                variety: 0,
                extent: 0,
                yield: 0
            },

            

            //outer grower detail
            outer_cropdialog:false,
            outer_grower:[
                { text: 'Crop', align: 'left',value: 'crop_outer'},
                { text: 'Extent', value: 'outer_extent' },
                { text: 'Company', value: 'outer_company' },
                { text: 'Period', value: 'outer_period' },
            
            ],
            outer_crops: [
            {
                value:false,  
                crop_outer: 'Mangus',
                outer_extent: '2015/06/23',
                outer_company: 'test',
                outer_period: 26,
            
                
            },
            ],

            //financial detail table
            loan_types:["Cultivation","Micro Finance","Industial"],
            financial_table:false,
            loan_header:[
                { text: 'Loan type', align: 'left',value: 'loan'},
                { text: 'Extent', value: 'amount' },
                { text: 'Company', value: 'institute' },
                { text: 'Period', value: 'branch_name' },
            
            ],
            loan_detail: [
            {
                value:false,  
                loan: 'Cultivation',
                amount: 250000,
                institute: 'PB',
                branch_name: 'Matara',
            
                
            },
            ],
        
            //stepper detail
            e6: 1,
            //gap form object
            farmer:{},
            land:{},
            loc:{},
            crop:{},
            outer:{},
            financial:{},
            user:{},
        
      }

    },
    
    created() {
        
       // var name = localStorage.getItem('farmer_username');
        //console.log(name);
        axios.get('http://localhost:5556/app/user?name=pramodyathushan@gmail.com')
          .then(response => {
            this.user = response.data;
            console.log(this.user);
        })
        .catch(e => {
             // console.log(error.response)
        })
    },
   
    methods:{
            initialize () {
            },

            /*additem(item){
                this.editedIndex = this.
            }*/

            save:function(){
                console.log("Hello")
                
            },
        
            gapformclick(){
                console.log(this.user.id);
            },

            setlanddetail(){
                this.loc.user_id = this.user.id
                
                axios.post('http://localhost:5556/app/loc',this.loc)
                .then(response=>{
                    console.log(response);
                    console.log(this.loc);
                })
                .catch(e =>{
                    console.log(error.response)
                })
            },

            setsoildetail(){
                this.land.user_id = this.user.id;
                console.log(this.land);
                axios.post('http://localhost:5556/app/land',this.land)
                .then(response=>{
                    console.log(response);
                    console.log(this.land);
                })
                .catch(e =>{
                    console.log(error.response)
                })
            },

            close(){
                this.cropdialog = false
                  
            },

            setcropdetail(){
                if(this.editedIndex>-1){
                   Object.assign(this.crops[this.editedIndex],this.editcrop)
                }
                else{
                    this.crops.push(this.crop)
                }
                this.close()
                
                
                /*this.crop.user_id = this.user.id;
                    axios.post('http://localhost:5556/app/crop',this.crop)
                    .then(response=>{
                        console.log(response);
                        this.cropdialog = false;
                        console.log(this.crop)
                    })
                    .catch(e=>{
                        console.log(error.response)
                    })

                 */   
            },

            setoutercropdetail(){
                this.outer.user_id = this.user.id;
                    axios.post('http://localhost:5556/app/outercrop',this.outer)
                    .then(response=>{
                        console.log(response);
                        this.outer_cropdialog = false
                        console.log(this.outer)
                    })
                    .catch(e=>{
                        console.log(error.response)
                    })
            },

            setfinancialdetail(){
                this.financial.user_id = this.user.id;
                
                axios.post('http://localhost:5556/app/financial',this.financial)
                .then(response=>{
                    console.log(response);
                    
                    this.financial_table = false;
                })
                .catch(e=>{
                    console.log(error.response)
                })
            }

        }
  }
</script>


<style scoped>

</style>


