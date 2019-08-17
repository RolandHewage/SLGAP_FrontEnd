<template>
    <div id="app">
         <v-app light>
            <v-toolbar class="white">
            <v-toolbar-title v-text="title">GAP MAZE</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <section>
                    <v-parallax src="static/doc-images/frontpage/green.jpg" height="600">
                    <!-- <vue-particles
        color="#dedede"
        :particleOpacity="0.3"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.0"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles> -->
                    <v-layout   column  align-center justify-center  class="white--text">
                        <img src="static/doc-images/frontpage/vuejs.jpg" alt="Vuetify.js" height="200">
                        <h1 class="white--text mb-2 display-1 text-xs-center">SRILANKA GAP MAZE</h1>
                        <div class="subheading mb-3 text-xs-center">Powered by UOR</div>
                         <!--v-dialog v-model="getstart"-->
                            <v-btn class="blue lighten-2 mt-5" dark large >
                                Get Started 
                            </v-btn>
                            <!--v-card class="elevation-4 transparent" slot="activator">
                                <v-text-field>Name</v-text-field>
                            </v-card-->
                           
                         <!--/v-dialog-->
                    </v-layout>
                    </v-parallax>
                </section>

                <section>
                    <v-layout
                    column
                    wrap
                    class="my-5"
                    
                    >
                    <v-flex xs12 sm4 class="my-3">
                        <div class="text-xs-center">
                        <h2 class="headline">SL GAP Network</h2>
                        <span class="subheading">
                            Covering Galle District
                        </span>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md3>
                                <v-dialog v-model="signup" width="500">
                                    <!-- farmer card -->
                                    
                                        <v-card class="elevation-4 transparent"   slot="activator" >
                                            <v-card-media
                                                src="static/doc-images/frontpage/farmer.jpg"
                                                height="200px"
                                                
                                            ></v-card-media>

                                            <v-card-title primary-title>
                                            <div>
                                                <h3 class="headline mb-0 " >Farmer</h3>
                                                <div></div>
                                            </div>
                                            </v-card-title>

                                            <v-card-actions>
                                                <v-btn flat color="orange"></v-btn>
                                                <v-btn flat color="orange"></v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    
                                    <!-- farmer card  end--> 
                                            <!-- farmer sign dialog -->
                                            
                                            <!-- <v-layout align-center justify-center> -->
                                                <v-flex >
                                                    <v-card >
                                                    <v-toolbar dark color="primary">
                                                        <v-toolbar-title>Login form</v-toolbar-title>
                                                        
                                                        
                                                    </v-toolbar>
                                                    <v-card-text>
                                                        <v-form>

                                                        <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="farmer.username"></v-text-field>
                                                        <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="farmer.password"></v-text-field>
                                                        </v-form>
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <!-- <a href='/#/signUp' style="font-size: 16px">Not Registered?</a> -->
                                                        <router-link to="/signup"  style="font-size: 16px"><span v-on:click="where1">Not Registered?</span></router-link>
                                                        <!-- <p>Do you want to register</p><v-btn to="/signup">Register</v-btn> -->
                                                        <v-spacer></v-spacer>
                                                        <v-btn color="primary" @click="signup=false">Cancel</v-btn>
                                                        <v-btn color="primary" @click="loginuser">Login</v-btn>
                                                    </v-card-actions>
                                                    </v-card>
                                                </v-flex>
                                                <!-- </v-layout> -->
                                                
                                            
                                                    <!-- farmer sign dialog end --> 
                                </v-dialog>
                            </v-flex>
                            <v-flex xs12 md3>
                               
                                <v-dialog v-model="AISign" width="500"> 
                                    <v-card class="elevation-4 transparent" slot="activator">
                                        <v-card-media
                                            src="static/doc-images/frontpage/AI.jpg"
                                            height="200px"
                                        ></v-card-media>

                                        <v-card-title primary-title>
                                        <div>
                                            <h3 class="headline mb-0 " >Agri Instructor</h3>
                                            <div></div>
                                        </div>
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-btn flat color="orange"></v-btn>
                                            <v-btn flat color="orange"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                        <!-- AI card  end--> 
                                                <!-- AI sign dialog -->
                                                
                                                <!-- <v-layout align-center justify-center> -->
                                                    <v-flex >
                                                        <v-card class="elevation-0">
                                                        <v-toolbar dark color="primary">
                                                            <v-toolbar-title>Login form</v-toolbar-title>
                                                            
                                                            
                                                        </v-toolbar>
                                                        <v-card-text>
                                                            <v-form>

                                                            <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="AI.username"></v-text-field>
                                                            <v-text-field id="AIpassword" prepend-icon="lock" name="AIpassword" label="Password" type="password" v-model="AI.password"></v-text-field>
                                                            </v-form>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <!-- <p>Do you want to register</p><v-btn to="/signup">Register</v-btn> -->
                                                            <router-link to="/signup" style="font-size: 16px"><span v-on:click="where2">Not Registered?</span></router-link>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="primary" @click="AISign=false">Cancel</v-btn>
                                                            <v-btn color="primary" @click="loginAI">Login</v-btn>
                                                        </v-card-actions>
                                                        </v-card>
                                                    </v-flex>
                                                    <!-- </v-layout> -->
                                                    
                                                
                                                <!-- AI sign dialog end --> 
                                </v-dialog>
                           
                            </v-flex>
                            
                            <v-flex xs12 md3>
                                 <v-dialog v-model="CABSign" width="500"> 
                                    <v-card class="elevation-4 transparent" slot="activator" >
                                        <v-card-media
                                            src="static/doc-images/frontpage/cab.jpg"
                                            height="200px"
                                        ></v-card-media>

                                        <v-card-title primary-title>
                                        <div>
                                            <h3 class="headline mb-0 " >CAB</h3>
                                            <div></div>
                                        </div>
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-btn flat color="orange"></v-btn>
                                            <v-btn flat color="orange"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    <!-- CAB card  end--> 
                                                    <!-- CAB sign dialog -->
                                                    
                                                    <!-- <v-layout align-center justify-center> -->
                                                        <v-flex >
                                                            <v-card class="elevation-0">
                                                            <v-toolbar dark color="primary">
                                                                <v-toolbar-title>Login form</v-toolbar-title>
                                                                
                                                                
                                                            </v-toolbar>
                                                            <v-card-text>
                                                                <v-form>

                                                                <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="CAB.username"></v-text-field>
                                                                <v-text-field id="CAB.password" prepend-icon="lock" name="CABpassword" label="Password" type="password" v-model="CAB.password"></v-text-field>
                                                                </v-form>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <!-- <p>Do you want to register</p><v-btn to="/signup">Register</v-btn> -->
                                                                <router-link to="/signup" style="font-size: 16px"><span v-on:click="where3">Not Registered?</span></router-link>
                                                                <v-spacer></v-spacer>
                                                                <v-btn color="primary" @click="CABSign=false">Cancel</v-btn>
                                                                <v-btn color="primary" @click="logincab">Login</v-btn>
                                                            </v-card-actions>
                                                            </v-card>
                                                        </v-flex>
                                                        <!-- </v-layout> -->
                                                        
                                                    
                                                    <!-- CAB sign dialog end --> 
                                </v-dialog>
                            </v-flex>
                            <v-flex xs12 md3>
                                 <v-dialog v-model="CustomerSign" width="500"> 
                                    <v-card class="elevation-4 transparent" slot="activator" >
                                        <v-card-media
                                            src="static/doc-images/frontpage/customer.jpg"
                                            height="200px"
                                        ></v-card-media>

                                        <v-card-title primary-title>
                                        <div>
                                            <h3 class="headline mb-0 " >Customer</h3>
                                            <div></div>
                                        </div>
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-btn flat color="orange"></v-btn>
                                            <v-btn flat color="orange"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                        <!-- Customer dialog-->
                                    <!-- <v-layout align-center justify-center> -->
                                                    <v-flex >
                                                        <v-card class="elevation-0">
                                                        <v-toolbar dark color="primary">
                                                            <v-toolbar-title>Login form</v-toolbar-title>
                                                            
                                                            
                                                        </v-toolbar>
                                                        <v-card-text>
                                                            <v-form>

                                                            <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="Customer.username"></v-text-field>
                                                            <v-text-field id="Cus.password" prepend-icon="lock" name="Cuspassword" label="Password" type="password" v-model="Customer.password"></v-text-field>
                                                            </v-form>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <!-- <p>Do you want to register</p><v-btn to="/signup">Register</v-btn> -->
                                                            <router-link to="/signup" style="font-size: 16px"><span v-on:click="where4">Not Registered?</span></router-link>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="primary" @click="CustomerSign=false">Cancel</v-btn>
                                                            <v-btn color="primary" @click="loginCustomer">Login</v-btn>
                                                        </v-card-actions>
                                                        </v-card>
                                                    </v-flex>
                                                    <!-- </v-layout> -->
                                                    
                                                
                                               
                                </v-dialog>
                            </v-flex>
                        </v-layout>
                        </v-container>
                    </v-flex>
                    </v-layout>
                </section>

                <section>
                    <v-parallax src="static/doc-images/frontpage/seed.jpg" height="380">
                    <v-layout column align-center justify-center>
                        <div class="headline white--text mb-3 text-xs-center">Information About GAP MAZE</div>
                        <em>Everything you wanted to know</em>
                        <v-btn
                        class="blue lighten-2 mt-5"
                        dark
                        large
                        href="/pre-made-themes"
                        >
                        View
                        </v-btn>
                    </v-layout>
                    </v-parallax>
                </section>

                <section>
                    <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12 sm4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                            <div class="headline">Company info</div>
                            </v-card-title>
                            <v-card-text>
                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                            </v-card-text>
                        </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                            <div class="headline">Contact us</div>
                            </v-card-title>
                            <v-card-text>
                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                            </v-card-text>
                            <v-list class="transparent">
                            <v-list-tile>
                                <v-list-tile-action>
                                <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                <v-list-tile-title>777-867-5309</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                <v-icon class="blue--text text--lighten-2">place</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                <v-list-tile-title>Labuduwa - Galle</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                <v-icon class="blue--text text--lighten-2">email</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                <v-list-tile-title>slgap@gap.net</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            </v-list>
                        </v-card>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </section>

                <v-footer class="blue darken-2">
                    <v-layout row wrap align-center>
                    <v-flex xs12>
                        <div class="white--text ml-3">
                        Made with
                        <v-icon class="red--text">favorite</v-icon>
                        by <a class="white--text">SL-GAP</a>
                        and <a class="white--text">UOR</a>
                        </div>
                    </v-flex>
                    </v-layout>
                </v-footer>
            </v-content>
        </v-app>
    </div>
</template>

<script>
 import axios from 'axios'

export default {
    data ()  {
        
        return{
          AISign:false,
          CABSign:false,
          CustomerSign:false,
          getstart:false,
          title: 'GAP MAZE',
          el: '#app',
          signup: false,
          farmer:{
          },
          AI:{

          },
          CAB:{

          },
          Customer:{},
          userlog:{
          },
          token:null
        }
    },
    methods:{
        where1(){
            localStorage.setItem('role', "farmer");
        },
        where2(){
            localStorage.setItem('role', "ai");
        },
        where3(){
            localStorage.setItem('role', "cab");
        },
        where4(){
            localStorage.setItem('role', "customer");
        },
        loginuser(){
         console.log(this.farmer);
        //   let uri = "http://localhost:8081/main/login";
        //   axios.post(uri,this.farmer)
        //   .then(response =>{
        //       console.log(response.data)
              
        //       if(response.data.message_code==200){
        //           localStorage.setItem('Access', JSON.stringify(response.data));
        //           localStorage.setItem('farmer_username',this.farmer.username);
        //           //var token = JSON.parse(localStorage.getItem('Access'));
        //           //console.log(token.obj.access_token);
        //           this.$router.push('/farmer');
        //       }
        //       else{
        //         console.log("Invalid user name or password")
        //       }
        //   })
        //   .catch(error=>{
        //       console.log(error.response)
        //   })

        let uri = 'http://localhost:8090/main/token';
            axios.post(uri,this.farmer)
            .then(response =>{
                console.log(response.data);
                this.token = response.data.access_token
                if(this.token!=null){
                  localStorage.setItem('access_token', response.data.access_token);
                  localStorage.setItem('role', "farmer");
                  this.saveUserInfo();
                  this.$router.push('/farmer');
                 }
            //   else if(response.data.error_description=="Invalid user credentials"){
            //     console.log("Invalid user credentioal")
            //     alert("Invalid user credentioal")
            //   }
              else{
                alert("server connection error")
              }
            })
            .catch(function(error){
                    alert("Invalid user credentials");
                    console.log(error);
            });

        },
        saveUserInfo(){

            let uri = 'http://localhost:8090/farmer/userinfo';
            axios.get(uri,{headers:{ "content-Type":"application/json",
                                    "Authorization":"Bearer "+ localStorage.getItem("access_token")}})
            .then(response =>{
                console.log(response.data);
                localStorage.setItem("email",response.data.obj.email);
                localStorage.setItem("first_name",response.data.obj.first_name);
                localStorage.setItem("gender",response.data.obj.gender);
                localStorage.setItem("last_name",response.data.obj.last_name);
                localStorage.setItem("user_id",response.data.obj.user_id);
                localStorage.setItem("username",response.data.obj.username);
                localStorage.setItem("dob",response.data.obj.dob);
                localStorage.setItem("address",response.data.obj.address);
                localStorage.setItem("nic",response.data.obj.nic);
                localStorage.setItem("phone_no",response.data.obj.phone_no);
          
            })
            .catch(function(error){
                    console.log(error)
            });
        },  
        loginAI(){
         
        //   this.$router.push('/AIFront');
            let uri = 'http://localhost:8090/main/token';
            axios.post(uri,this.AI)
            .then(response =>{
                console.log(response.data);
                this.token = response.data.access_token
                if(this.token!=null){
                  localStorage.setItem('access_token', response.data.access_token);
                  localStorage.setItem('role', "ai");
                  this.saveUserInfo2();
                  this.$router.push('/aifront');
                 }
            //   else if(response.data.error_description=="Invalid user credentials"){
            //     console.log("Invalid user credentioal")
            //     alert("Invalid user credentioal")
            //   }
              else{
                alert("server connection error")
              }
            })
            .catch(function(error){
                    alert("Invalid user credentials");
                    console.log(error);
            });
        },
        saveUserInfo2(){

            let uri = 'http://localhost:8090/ai-officer/userinfo';
            axios.get(uri,{headers:{ "content-Type":"application/json",
                                    "Authorization":"Bearer "+ localStorage.getItem("access_token")}})
            .then(response =>{
                console.log(response.data);
                localStorage.setItem("email",response.data.obj.email);
                localStorage.setItem("first_name",response.data.obj.first_name);
                localStorage.setItem("gender",response.data.obj.gender);
                localStorage.setItem("last_name",response.data.obj.last_name);
                localStorage.setItem("user_id",response.data.obj.user_id);
                localStorage.setItem("username",response.data.obj.username);
                localStorage.setItem("dob",response.data.obj.dob);
                localStorage.setItem("address",response.data.obj.address);
                localStorage.setItem("nic",response.data.obj.nic);
                localStorage.setItem("phone_no",response.data.obj.phone_no);
          
            })
            .catch(function(error){
                    console.log(error)
            });
        },
        logincab(){
         
        //   this.$router.push('/cabfront');
            let uri = 'http://localhost:8090/main/token';
            axios.post(uri,this.CAB)
            .then(response =>{
                console.log(response.data);
                this.token = response.data.access_token
                if(this.token!=null){
                  localStorage.setItem('access_token', response.data.access_token);
                  localStorage.setItem('role', "cab");
                  this.saveUserInfo3();
                  this.$router.push('/cabfront');
                 }
            //   else if(response.data.error_description=="Invalid user credentials"){
            //     console.log("Invalid user credentioal")
            //     alert("Invalid user credentioal")
            //   }
              else{
                alert("server connection error")
              }
            })
            .catch(function(error){
                    alert("Invalid user credentials");
                    console.log(error);
            });
        },
        saveUserInfo3(){

            let uri = 'http://localhost:8090/cab-officer/userinfo';
            axios.get(uri,{headers:{ "content-Type":"application/json",
                                    "Authorization":"Bearer "+ localStorage.getItem("access_token")}})
            .then(response =>{
                console.log(response.data);
                localStorage.setItem("email",response.data.obj.email);
                localStorage.setItem("first_name",response.data.obj.first_name);
                localStorage.setItem("gender",response.data.obj.gender);
                localStorage.setItem("last_name",response.data.obj.last_name);
                localStorage.setItem("user_id",response.data.obj.user_id);
                localStorage.setItem("username",response.data.obj.username);
                localStorage.setItem("dob",response.data.obj.dob);
                localStorage.setItem("address",response.data.obj.address);
                localStorage.setItem("nic",response.data.obj.nic);
                localStorage.setItem("phone_no",response.data.obj.phone_no);
          
            })
            .catch(function(error){
                    console.log(error)
            });
        },
        loginCustomer(){

        //     console.log(this.Customer);
        //   let uri = "http://localhost:8090/main/token";
        //   axios.post(uri,this.Customer)
        //   .then(response =>{
        //       console.log(response.data)
              
        //       if(response.data.message_code==200){
        //           localStorage.setItem('Access', JSON.stringify(response.data));
        //           localStorage.setItem('farmer_username',this.Customer.username);
        //           //var token = JSON.parse(localStorage.getItem('Access'));
        //           //console.log(token.obj.access_token);
        //           this.$router.push('/customer');
        //       }
        //       else{
        //         console.log("Invalid user name or password")
        //       }
        //   })
        //   .catch(error=>{
        //       console.log(error.response)
        //   })

            let uri = 'http://localhost:8090/main/token';
            axios.post(uri,this.Customer)
            .then(response =>{
                console.log(response.data);
                this.token = response.data.access_token
                if(this.token!=null){
                  localStorage.setItem('access_token', response.data.access_token);
                  localStorage.setItem('role', "customer");
                  this.saveUserInfo();
                  this.$router.push('/customer');
                 }
            //   else if(response.data.error_description=="Invalid user credentials"){
            //     console.log("Invalid user credentioal")
            //     alert("Invalid user credentioal")
            //   }
              else{
                alert("server connection error")
              }
            })
            .catch(function(error){
                    alert("Invalid user credentials");
                    console.log(error);
            });
        
        },
        saveUserInfo1(){

            let uri = 'http://localhost:8090/customer/userinfo';
            axios.get(uri,{headers:{ "content-Type":"application/json",
                                    "Authorization":"Bearer "+ localStorage.getItem("access_token")}})
            .then(response =>{
                console.log(response.data);
                localStorage.setItem("email",response.data.obj.email);
                localStorage.setItem("first_name",response.data.obj.first_name);
                localStorage.setItem("gender",response.data.obj.gender);
                localStorage.setItem("last_name",response.data.obj.last_name);
                localStorage.setItem("user_id",response.data.obj.user_id);
                localStorage.setItem("username",response.data.obj.username);
                localStorage.setItem("dob",response.data.obj.dob);
                localStorage.setItem("address",response.data.obj.address);
                localStorage.setItem("nic",response.data.obj.nic);
                localStorage.setItem("phone_no",response.data.obj.phone_no);
          
            })
            .catch(function(error){
                    console.log(error)
            });
        } 
    },
    created:function(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_id");
    }
}
</script>

