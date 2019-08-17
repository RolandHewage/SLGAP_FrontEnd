<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          label="Payment Method"
        ></v-select>
      </v-flex>

       <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm3>
            <v-checkbox
              v-model="x"
              label="Left"
              value="left"
            ></v-checkbox>
          </v-flex>

          <v-flex xs6 sm3>
            <v-checkbox
              v-model="x"
              label="Right"
              value="right"
            ></v-checkbox>
          </v-flex>

          <v-flex xs6 sm3>
            <v-checkbox
              v-model="y"
              label="Top"
              value="top"
            ></v-checkbox>
          </v-flex>

          <v-flex xs6 sm3>
            <v-checkbox
              v-model="y"
              label="Bottom"
              value="bottom"
            ></v-checkbox>
          </v-flex>

          <v-flex xs12 sm3>
            <v-checkbox
              v-model="mode"
              label="Multi-line (mobile)"
              value="multi-line"
            ></v-checkbox>
          </v-flex>

          <v-flex xs12 sm3>
            <v-checkbox
              v-model="mode"
              label="Vertical (mobile)"
              value="vertical"
            ></v-checkbox>
          </v-flex>

          <v-flex xs12 sm4 offset-sm4>
            <v-text-field
              v-model="text"
              label="Text"
              type="text"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model.number="timeout"
              label="Timeout"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: ['Debit Card', 'Credit Card', 'eZ cASH']
    })
  }
</script>