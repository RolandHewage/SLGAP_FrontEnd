<template>
<v-flex xs12 sm12 >
    <h1>{{ msg }}</h1>

    <v-card
        img="/static/doc-images/toolbar/topo_50_000_F.jpg"
        flat
        height="300px"
        class="pa-3"
      >
        <v-toolbar
          floating
          dense
        >
          <v-text-field prepend-icon="search" hide-details single-line></v-text-field>
          <v-btn icon>
            <v-icon>my_location</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>

 </v-flex >
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Farmers Map'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
