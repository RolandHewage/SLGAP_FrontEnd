<template>
   <v-app id="inspire">
     <navbar></navbar>
      <v-content>
      <v-container fluid grid-list-md >
        <v-layout column  >
          <v-card color="primary">
            <v-container fluid >
              <v-layout row wrap>
                <v-flex xs2>
                   <v-dialog v-model="selectgapform" width="500" full-width>
                      <!-- gap form detail -->
                      <v-card color="light-green accent-2" slot="activator">
                            <v-card-media contain src='static/dash_board/gap.png' height="180px"></v-card-media>
                            <v-container>
                                <v-layout fill-height align-center>
                                    <v-flex>
                                        <div class="text-xs-center" >
                                            <span class="headline black--text">Gap Form</span>
                                        </div>
                                    </v-flex>
                      
                                </v-layout>
                            </v-container>
                      </v-card>
                                  <v-flex >
                                       <v-card>
                                           <v-toolbar dark color="primary">
                                                <v-toolbar-title>Select Gap form</v-toolbar-title></v-toolbar>
                                                    <v-card-text>
                                                      <v-select :items="gapforms"  v-model="form.date"></v-select>
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <v-btn color="primary" to="/farmer_tab">New Record Book</v-btn>
                                                       <v-spacer></v-spacer>
                                                        <v-btn color="primary" @click="selectgapform=false">Cancel</v-btn>
                                                        <v-btn color="primary" @click="setGapFormDate(form.date)">Select Gap Form</v-btn>
                                                        
                                                    </v-card-actions>
                                                    </v-card>
                                    </v-flex>
                   </v-dialog>
                </v-flex>
                <v-flex xs2>
                    <v-dialog v-model="selectrecordbook" width="500" full-width>
                      <v-card color="light-green accent-2" slot="activator">
                            <v-card-media contain src='static/dash_board/plant_manage.png' height="180px"></v-card-media>
                            <v-container  >
                                <v-layout fill-height align-center>
                                    <v-flex>
                                        <div class="text-xs-center" >
                                            <span class="headline black--text"> Plant Manage</span>
                                        </div>
                                    </v-flex>
                      
                                </v-layout>
                            </v-container>
                      </v-card>
                      <!--  dialog box plant manage -->
                           <v-flex >
                                       <v-card>
                                           <v-toolbar dark color="primary">
                                                <v-toolbar-title>Select Record Book</v-toolbar-title></v-toolbar>
                                                    <v-card-text>
                                                      <v-select :items="rbdates"  v-model="form.rbdate"></v-select>
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <v-btn color="primary" to="/manage_tab">New Record Book</v-btn>
                                                       <v-spacer></v-spacer>
                                                        <v-btn color="primary" @click="selectrecordbook=false">Cancel</v-btn>
                                                        <v-btn color="primary" @click="setRocordBookDate(form.rbdate)" >Show</v-btn>
                                                        
                                                    </v-card-actions>
                                                    </v-card>
                                                </v-flex>
                    </v-dialog>
                </v-flex>
                <v-flex xs2>
                    <v-card color="light-green accent-2" >
                          <v-card-media contain src='static/dash_board/green.png' height="180px"></v-card-media>
                           <v-container  >
                              <v-layout fill-height align-center>
                                   <v-flex>
                                      <div class="text-xs-center" >
                                          <span class="headline black--text"> Plant History</span>
                                      </div>
                                  </v-flex>
                     
                              </v-layout>
                           </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs2>
                    <v-card color="light-green accent-2" >
                          <v-card-media contain src='static/dash_board/qr.png' height="180px"></v-card-media>
                           <v-container  >
                              <v-layout fill-height align-center>
                                   <v-flex>
                                      <div class="text-xs-center" >
                                          <span class="headline black--text">Genarate QR</span>
                                      </div>
                                  </v-flex>
                     
                              </v-layout>
                           </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs2>
                    <v-card color="light-green accent-2"  to="/recomnedations">
                          <v-card-media contain src='static/dash_board/chemical.png' height="180px"></v-card-media>
                           <v-container  >
                              <v-layout fill-height align-center>
                                   <v-flex>
                                      <div class="text-xs-center" >
                                          <span class="headline black--text">Fertilizer</span>
                                      </div>
                                  </v-flex>
                     
                              </v-layout>
                           </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs2>
                    <v-card color="light-green accent-2" >
                          <v-card-media contain src='static/dash_board/market.png' height="180px"></v-card-media>
                           <v-container  >
                              <v-layout fill-height align-center>
                                   <v-flex>
                                      <div class="text-xs-center" >
                                          <span class="headline black--text">Market</span>
                                      </div>
                                  </v-flex>
                     
                              </v-layout>
                           </v-container>
                    </v-card>
                </v-flex>


              </v-layout>
            </v-container>
            
          </v-card>
         

        </v-layout>
             
      </v-container>

     
        <v-layout column>
          <v-card >
            <v-container fluid >
              <v-layout row wrap>
                <v-flex xs12 sm6 >
                
                  <chartjs-doughnut v-bind:labels="labels"
                              v-bind:datasets="datasets"
                              v-bind:option="option"></chartjs-doughnut>
                </v-flex>
                <v-flex xs12 sm6 >

                    <chartjs-bar  v-bind:labels="labels_chemical"
                                v-bind:datasets="datasets_chemical"
                                v-bind:option="option_chemical"></chartjs-bar>
                            

                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-layout>   
      

       
      
    </v-content> 
     
   </v-app>
</template>

<script>
import axios from "axios";
// import GoogleMapsLoader from "google-maps";
// import maptap from "@/components/farmer/map.vue";
import navbar from "@/components/farmer/farmer_nav";
import land_reportVue from "./plant_manage/land_report.vue";

export default {
  components: {
    // maptap,
    navbar
  },

  data() {
    return {
      signup: false,
      selectgapform: false,
      selectrecordbook: false,
      gapforms: [],
      form: {},
      dialog: false,
      drawer: null,
      items: [
        { icon: "contacts", text: "Home", link: "/farmer" },
        { icon: "history", text: "GAP Certificate", link: "/manage_tab" },
        { icon: "content_copy", text: "Plant Manage", link: "/history" },
        { icon: "settings", text: "Plant History", link: "/manage_tab" },
        { icon: "chat_bubble", text: "Genarate QR", link: "/qrcode" },
        { icon: "help", text: "Reconmendation", link: "/recomnedations" },
        { icon: "phonelink", text: "Market", link: "/market" }
      ],
      dates: [],
      rbdates: [],
      // cards: [
      //   { title: 'GAP Certificate', src: 'static/gap.jpeg', flex: 4 , link:"/farmer_tab" },
      //   { title: 'Plant Manage', src: 'static/plant.jpg', flex: 4 ,link:"/manage_tab"},
      //   { title: 'Plant History', src: 'static/history.jpg', flex: 4,link:"/history" },
      //   { title: 'Ganarate QR', src: 'static/plantqr.jpg', flex: 4,link:"/qrcode"  },
      //   { title: 'Chemical & Fertilize Recomandation', src: 'static/chemical.jpg', flex: 4,link:"/recomnedations" },
      //   { title: 'Market', src: 'static/market.jpg', flex: 4,link:"/market"  }
      // ],

      cards: [
        {
          title: "Gap Form",
          src: "static/dash_board/gap.png",
          flex: 2,
          link: "/farmer_tab"
        },
        {
          title: "Plant Manage",
          src: "static/dash_board/plant_manage.png",
          flex: 2,
          link: "/manage_tab"
        },
        {
          title: "Plant History",
          src: "static/dash_board/green.png",
          flex: 2,
          link: "/history"
        },

        {
          title: "Genarate QR",
          src: "static/dash_board/qr.png",
          flex: 2,
          link: "/qrcode"
        },
        {
          title: "Fertilizer",
          src: "static/dash_board/chemical.png",
          flex: 2,
          link: "/recomnedations"
        },
        {
          title: "Market",
          src: "static/dash_board/market.png",
          flex: 2,
          link: "/market"
        }
      ],
      //graph data=====================
      labels: [],

      datasets: [
        {
          data: [],
          backgroundColor: ["Red", "Yellow", "Purple", "Green"]
        }
      ],
      option: {
        title: {
          display: true,
          position: "bottom",
          text: "Crops In Division"
        }
      },

      //chemical chart
      labels_chemical: ["Central", "Western", "Eastern"],
      datasets_chemical: [
        {
          data: ["25.5", "24.6", "19.9"],
          backgroundColor: ["Red", "Green", "Purple", "Green"]
        }
      ],
      option_chemical: {
        title: {
          display: true,
          position: "top",
          text: "Zonal Crop Distribution"
        }
      }
    };
  },
  watch: function() {},

  mounted: function() {},

  created: function() {
    var self = this;
    let charts_setting = {
      crossDomain: true,
      url: "http://localhost:8090/cab-officer/cropanalysis",
      method: "get"
      // "headers":{
      //     "content-type":"application/json",
      //     "Authorization":"Bearer " + token
      //     }
    };
    axios(charts_setting)
      .then(function(response) {
        self.datasets[0].data = response.data;
        console.log(self.datasets[0].data);
      })
      .catch(function(error) {
        console.log(error);
      });

    let charts_name = {
      crossDomain: true,
      url: "http://localhost:8090/cab-officer/cropanames",
      method: "get"
      // "headers":{
      //     "content-type":"application/json",
      //     "Authorization":"Bearer " + token
      //     }
    };
    axios(charts_name)
      .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          self.labels[i] = response.data[i];
        }
        //  console.log(response)
      })
      .catch(function(error) {
        console.log(error);
      });

    //chemical charts
    //   let charts_chemical = {
    //   crossDomain: true,
    //   url: "http://localhost:8090/cab-officer/getChemicalAnalysis",
    //   method: "get"
    //   // "headers":{
    //   //     "content-type":"application/json",
    //   //     "Authorization":"Bearer " + token
    //   //     }
    // };
    // axios(charts_chemical)
    //   .then(function(response) {
    //    //
    //     //console.log(self.datasets[0].data);
    //      console.log(response.data);
    //       self.datasets_chemical[0].data = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    if (localStorage.getItem("access_token") == null) {
      this.$router.push("/");
    }

    localStorage.removeItem("Form_Date");
    localStorage.removeItem("RecordBookDate");
    localStorage.removeItem("form_id");
    localStorage.removeItem("gap_form_id");

    var self = this;

    let settings = {
      crossDomain: true,
      url: "http://localhost:8090/farmer/getFormDates",
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    };
    axios(settings)
      .then(function(response) {
        self.gapforms = response.data;
        console.log(self.gapforms);
      })
      .catch(function(error) {
        console.log(error);
      });

    let settingsrb = {
      crossDomain: true,
      url: "http://localhost:8090/farmer/getRerordBookDates",
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    };
    axios(settingsrb)
      .then(function(response) {
        self.rbdates = response.data;
        console.log(self.rbdates);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    setGapFormDate(formdate) {
      console.log(this.formdate);
      if (formdate == null) {
        alert("Please Select Date First");
      } else {
        localStorage.setItem("Form_Date", formdate);
        this.$router.push("/farmer_tab");
      }
    },

    setRocordBookDate(rbdate) {
      if (rbdate == null) {
        alert("Please Select Date First");
      } else {
        localStorage.setItem("RecordBookDate", rbdate);
        this.$router.push("/manage_tab");
      }
    }
  }
};
</script>

<style scoped>
</style>


