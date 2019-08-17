<template>
    <v-flex xs12 sm10 offset-md1>
        <div style="background:white;height:20px"></div>
        <v-layout wrap>
            
            <v-flex xs12 sm6 md3>
                <v-chip color="green" text-color="white">Crop</v-chip>
                 <v-select
                :items="crop"
                label="Crop"
                outline
                ></v-select>
            </v-flex>
            <v-flex xs12 sm6 md4>
                 <v-chip color="green" text-color="white">Fertilize</v-chip>
                  <v-select
                :items="fertilize"
                label="Fertilize"
                outline
                ></v-select>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-chip color="green" text-color="white">Period</v-chip>
                <v-select
                :items="period"
                label="Period"
                outline
                ></v-select>
            </v-flex>
           
           <v-flex xs12 sm6 md4>
                <v-chip color="green" text-color="white">Description</v-chip>
                <v-textarea
                solo
                name="input-7-4"
                label="Solo textarea"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
export default {
    data(){
        return{
            crop :['Mangus','Guawa','Mango','Papaya'],
            fertilize :['fer1','fer2','fer3'],
            period : ['12days','10days','8days']
        }
    }
}
</script>
