<template>
    <div id="app">
   <v-app light>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title">GAP MAZE</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax src="static/doc-images/frontpage/green.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="static/doc-images/frontpage/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">SRILANKA GAP MAZE</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Ruh</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
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
                <v-flex xs12 md4>



                <v-card class="elevation-4 transparent" to="/signup">
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



                </v-flex>
                <v-flex xs12 md4>
                    <v-card class="elevation-4 transparent" to="/profile">
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
                </v-flex>
                <v-flex xs12 md4>
                    <v-card class="elevation-4 transparent" to="/cabfront">
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
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
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
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
 </div>
</template>

<script>
export default {
    data: () => ({
        title: 'GAP MAZE',
        el: '#app'
    })
}
</script>
