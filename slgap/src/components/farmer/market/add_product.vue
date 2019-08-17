<template>
   <v-flex xs12 sm10 offset-md1>
       <div style="background:white;height:20px"></div>
       <v-layout wrap>
            <v-flex xs12 sm6 md4>
                <v-chip color="green" text-color="white">Product</v-chip>
                 <v-select
                :items="product"
                label="Product"
                outline
                ></v-select>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-chip color="green" text-color="white">Qty.</v-chip>
                 <v-select
                :items="qty"
                label="Qty."
                outline
                ></v-select>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-chip color="green" text-color="white">Price</v-chip>
                 <v-select
                :items="price"
                label="Price"
                outline
                ></v-select>
            </v-flex>
             <v-flex xs12 sm6 md4>
                <v-chip color="green" text-color="white">Upload photos</v-chip>
                <input  type="file" @change="onFileselected">
                    
                    <button @click="onUpload">Upload</button>

            </v-flex>
        </v-layout>
   </v-flex>
   
   
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            selectedFile:null,

            product:['Mango','Mangus','Guawa'],
            qty:['5','8','10'],
            price:['Rs.100','Rs.89','Rs.120']
        }
    },
    methods:{
        onFileselected(event){
            this.selectedFile = event.target.files[0]
        },
        onUpload(){
                const fd = new FormData();
                fd.append('image',this.selectedFile,this.selectedFile.name)
               //console.log("uploaded");
               axios.post('http://localhost:5556/app/',fd)
               .then(res=>{
                   console.log(res)
               }) 
        }
    }
}
</script>

