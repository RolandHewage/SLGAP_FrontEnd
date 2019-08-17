<template>
    <v-app>
        <navi></navi>
        <v-content>
            <v-container fluid grid-list-md text-xs-center justify-center>
                
                <v-layout >
                    <v-flex xs12 sm6 offset-md3>
                      <v-card class="elevation-0" color="secondary">
                           
                        <v-card-text>
                            <v-form ref="form" >
                                <v-layout wrap>
                                    <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                                        <v-avatar :size="230" color="grey lighten-4">
                                            <img :src="imageUrl" height="150" v-if="imageUrl"/> 
                                        </v-avatar>
                                        <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                                            <input
                                                type="file"
                                                style="display: none"
                                                ref="image"
                                                accept="image/*"
                                                @change="onFilePicked"
                                            >
                                    </v-flex>
                               
                                <v-flex xs12>
                                    <v-text-field
                                        prepend-icon="person"
                                        v-model="farmer.username"
                                        
                                        label="User Name"
                                        required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex sm6>
                                    <v-text-field
                                        prepend-icon="person"
                                        v-model="farmer.first_name"
                                        label="First Name"
                                        required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex sm6> 
                                <v-text-field
                                        prepend-icon="person"
                                        v-model="farmer.last_name"
                                        
                                        label="Last Name"
                                        required
                                    ></v-text-field>
                                </v-flex>
                                
                                
                                <v-flex sm6>  
                                    <v-text-field
                                        prepend-icon="email"
                                        v-model="farmer.email"
                                       
                                        label="E-mail"
                                        required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex sm6>
                                    <v-text-field
                                        prepend-icon="email"
                                        v-model="farmer.gender"
                                        label="Gender"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex sm6>
                                    <v-text-field
                                        prepend-icon="phone"
                                        v-model="farmer.phone_no"
                                        label="Phone No"
                                        type="tel"
                                        required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex sm6>
                                    <v-text-field
                                        prepend-icon="phone"
                                        v-model="farmer.nic"
                                        label="NIC No."
                                        required
                                    ></v-text-field>
                                </v-flex>
                                
                                                    
                                <v-flex xs12>  
                                    <v-text-field
                                        v-model="farmer.address"
                                        name="address"
                                        label="Address"
                                        required
                                    ></v-text-field>
                                </v-flex>  
                                </v-layout>
                                
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="uploadImage()">Update Detail</v-btn>
                            
                        </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
             </v-container>
        </v-content>
    </v-app>
</template>


<script>
import navi from "@/components/farmer/farmer_nav";
import axios from "axios";

export default {
  data() {
    return {
      farmer: {},
      title: "Image Upload",
      dialog: false,
      imageName: "",
      imageUrl: "https://www.freewebmentor.com/default-avatar.png",
      imageFile: ""
    };
  },
  components: {
    navi
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0];
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },

    uploadImage() {
      var formData = new FormData();

      formData.append("file", this.imageFile);
      formData.append("username", this.farmer.username);

      console.log(formData);
      let url = "http://localhost:8090/upload";

      axios
        .post(url, formData, {
          headers: { "Content-Type": "multipart/form-data"}
        })
        .then(function(response) {
          console.log(response.data);
          alert("Image Upload SuccessFull....");
        })
        .catch(function(error) {
          alert("Image Upload Error....");
        });
    }
  },
  created() {
    if (localStorage.getItem("access_token") == null) {
      this.$router.push("/");
    }
    var token = localStorage.getItem("access_token");

    var self = this;

    let settings_user = {
      crossDomain: true,
      url: "http://localhost:8090/farmer/userinfo",
      method: "post",
      headers: {
        "content-type": "application/json",
         Authorization: "Bearer " + token
      }
    };
    axios(settings_user)
      .then(function(response) {
        console.log(response.data.obj);
        self.farmer = response.data.obj;
        
      })
      .catch(function(error) {
        console.log(error);
      });
    
    self.imageUrl = "http://localhost:8090/getphoto?username="+localStorage.getItem("username");
    console.log(self.imageUrl);
  }
};
</script>
