<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Signup form</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-layout wrap>
                      <v-flex sm6>
                        <v-text-field
                            prepend-icon="person"
                            v-model="farmer.first_name"
                            :rules="nameRules1"
                            label="First Name"
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex sm6> 
                       <v-text-field
                            prepend-icon="person"
                            v-model="farmer.last_name"
                            :rules="nameRules2"
                            label="Last Name"
                            required
                        ></v-text-field>
                      </v-flex>
                      
                      <v-flex xs12>
                        <v-text-field
                            prepend-icon="person"
                            v-model="farmer.username"
                            :rules="nameRules"
                            label="User Name"
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>  
                        <v-text-field
                            prepend-icon="email"
                            v-model="farmer.email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex sm6>
                        <v-select
                          prepend-icon="person"
                          v-model="farmer.gender"
                          :items="items"
                          label="Gender"
                        ></v-select>
                      </v-flex>
                      <v-flex sm6>
                        <v-text-field
                            prepend-icon="phone"
                            v-model="farmer.phone_no"
                            :rules="phoneRules"
                            label="Phone No"
                            type="tel"
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex sm6>
                        <v-text-field
                            prepend-icon="phone"
                            v-model="farmer.nic"
                            :rules="idRules"
                            label="NIC No."
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex sm6>
                     
                          <v-menu
                            ref="menu1"
                            :close-on-content-click="false"
                            v-model="menu1"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            max-width="290px"
                            min-width="290px"
                          >
                            <v-text-field
                              slot="activator"
                              v-model="farmer.dob"
                              label="Date"
                              hint="MM-DD-YYYY format"
                              persistent-hint
                              prepend-icon="event"
                              @blur="date = parseDate(farmer.birthday)"
                            ></v-text-field>
                            <v-date-picker v-model="farmer.dob" no-title @input="menu1 = false"></v-date-picker>
                          </v-menu>
                          
                        </v-flex>
                      <v-flex sm6>
                        <v-text-field 
                            prepend-icon="lock" 
                            v-model="farmer.password" 
                            :rules="passwordRules"
                            label="Password" 
                            type="password" 
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex sm6>  
                        <v-text-field 
                            prepend-icon="lock" 
                            v-model="farmer.repassword" 
                            :rules="passwordRules"
                            label="Retype Password" 
                            type="password" 
                            required
                        ></v-text-field>
                      </v-flex>
                      <span sm12 v-if="farmer.password != farmer.repassword" style="color:red">*Retype Password</span>
                                          
                      <v-flex xs12>  
                        <v-text-field
                            prepend-icon="email"
                            v-model="farmer.address"
                            name="address"
                            label="Address"
                           
                            required
                        ></v-text-field>
                      </v-flex>  
                      <v-flex sm6>
                        <v-select
                          v-model="farmer.repassword"
                          :items="District"
                          label="District"
                          outline
                        ></v-select>
                      </v-flex>
                      <v-flex sm6>
                        <v-select
                          :items="DsDivision"
                          label="DsDivision"
                          outline
                        ></v-select>
                      </v-flex>
                      <v-flex sm6>
                        <v-select
                          :items="GnDivision"
                          label="GnDivision"
                          outline
                        ></v-select>
                      </v-flex>
                      <v-flex sm6>
                        <v-select
                          :items="ARPADivision"
                          label="ARPADivision"
                          outline
                        ></v-select>
                      </v-flex>

                    </v-layout>
                    
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" to="/">Back to Home</v-btn>
                <v-btn color="primary" @click="registerfarmer">Continue</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  import axios from 'axios'

  export default {
    data() {
       
      return{
        date: null,
        dateFormatted: null,
        menu1: false,
        items: ['Male', 'Female'],
        District:['galle','matara','hambantota'],
        DsDivision:['East','West','Central'],
        GnDivision:['G1','G2','G3','G4','G5','G6'],
        ARPADivision:['A1','A2','A3','A4','A5','A6'],
        farmer:{

        },
        drawer: null,
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'User Name is required'
        ],
        nameRules1: [
          v => !!v || 'First Name is required'
        ],
        nameRules2: [
          v => !!v || 'Last Name is required'
        ],
        gapNo: '',
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        phoneRules: [
          v => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(v) || 'No must be valid eg:- 0777147345'
        ],
        idRules: [
          v => /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}?[v]$/im.test(v) || 'NIC must be valid eg:- 932487426v'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
        ],
        where:null
      }
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      }
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },
    methods:{
        formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
        registerfarmer(){
          if (this.$refs.form.validate()) {
            // this.farmer.role = 'farmer';
            this.where=localStorage.getItem("role");

            if(this.where=="farmer"){
              this.farmer.role = 'farmer';
              console.log(this.farmer.role);
            }else if(this.where=="ai"){
              this.farmer.role = 'ai';
              console.log(this.farmer.role);
            }else if(this.where=="cab"){
              this.farmer.role = 'cab';
              console.log(this.farmer.role);
            }else if(this.where=="customer"){
              this.farmer.role = 'customer';
              console.log(this.farmer.role);
            }
            
            console.log(this.farmer);
            let uri = 'http://localhost:8090/main/sign-up';
            axios.post(uri,this.farmer)
            .then(response =>{
              console.log(response);
              if(response.status==226||response.status==208){
                alert("User already exists");
              }
              if(response.status==201){
                this.$router.push('/verify'); 
              }
                

            })    
            .catch(error=>{
              console.log(error);
              
              alert("User exist");
            
            });

          }else{
            alert("Fill on the fields");
          }
            
        }
        
        
    }
    
  }
</script>