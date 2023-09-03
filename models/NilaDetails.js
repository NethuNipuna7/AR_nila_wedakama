const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NiladetailSchema = new Schema({
    
    Disease : {
        type : String,
        required: true
    },
 
    Nilapoints : {
        type : String,
        required:true

    },
    Description : {
        type : String,
        required: true
    }
   
   
})
const NilaDetails = mongoose.model("NilaDetails",NiladetailSchema);
module.exports=NilaDetails;