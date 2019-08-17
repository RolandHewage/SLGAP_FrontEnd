<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Signup form</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        prepend-icon="person"
                        v-model="name"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>
                    <v-text-field
                        prepend-icon="perm_identity"
                        v-model="gapNo"
                        :rules="gapNoRules"
                        :counter="13"
                        label="GAP No."
                        type="number"
                        required
                    ></v-text-field>
                    <v-text-field
                        prepend-icon="email"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                    <v-text-field 
                        prepend-icon="lock" 
                        v-model="password" 
                        :rules="passwordRules"
                        label="Password" 
                        type="password" 
                        required
                    ></v-text-field>
                    <v-text-field
                        prepend-icon="phone"
                        v-model="phoneNo"
                        :rules="phoneNoRules"
                        label="0777-147483"
                        type="tel"
                    ></v-text-field>
                    <v-text-field
                        name="address"
                        label="Address"
                        textarea
                    ></v-text-field>
                    
                    
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
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
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      gapNo: '',
      gapNoRules: [
        v => !!v || 'GAP No. is required',
        v => v.length <= 13 || 'GAP No. must be less than 13 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ]
    }),
    props: {
      source: String
    },
    methods: {
      login () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email
          })
        }
      }
    }
  }
</script>