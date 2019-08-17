<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Email Verification</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <span style="font-size:18px">Check your Email and Enter the Verification Code</span>
                  <v-text-field id="username" prepend-icon="person" v-model="user.email"  label="Username"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="user.verification_code"  label="verification code" :rules="verifyRules"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="checkverificationcode()">Verify</v-btn>
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
      emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      verifyRules: [
          v => /^[\+]?[(]?[0-9]{6}$/im.test(v) || 'Verification Code must be valid'
      ]
    }),
    props: {
      source: String
    },
    methods:{
          
        checkverificationcode(){
             
            let uri = 'http://localhost:8090/main/email-verification';
            axios.post(uri,this.user)
            .then(response =>{
              console.log(this.user);
              alert("Your Email verification is complete")
              this.$router.push('/login');  
            })
            .catch(error=>{
              console.log(error.response)
            });
           
        }
    }
  }
</script>