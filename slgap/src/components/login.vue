<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="user.username" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="user.password" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="gohome()">Login</v-btn>
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
    data: () => ({
      drawer: null,
      user:{
        
      },
      where:null
    }),
    props: {
      source: String
    },
    methods:{
          
        gohome(){
             console.log(this.farmer); 
            let uri = 'http://localhost:8090/main/token';

            axios.post(uri,this.user)
            .then(response =>{

              this.token = response.data.access_token
              if(this.token!=null){
              localStorage.setItem('access_token', response.data.access_token);
              this.where=localStorage.getItem("role");
              this.saveUserInfo();

              if(this.where=="farmer"){
                this.$router.push('/farmer'); 
                console.log(this.where);
              }else if(this.where=="ai"){
                this.$router.push('/aifront');
                console.log(this.where); 
              }else if(this.where=="cab"){
                this.$router.push('/cabfront');
                console.log(this.where); 
              }else if(this.where=="customer"){
                this.$router.push('/customer');
                console.log(this.where);
              }
              
              }
              else{
                alert("server connection error");
              } 

            })
            .catch(error=>{
              alert("Invalid user credentials");
              console.log(error.response)
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
        }
    }
  }
</script>