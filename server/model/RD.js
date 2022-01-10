import mongoose from 'mongoose';

const RDSchema = new mongoose.Schema({
    number:{
        type:String,
        required:true
    },
    createdOn:{
        type:String,
        required:true
    },
    maturityOn:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    cashedOn:{
        type:Date
    }
})

const rdModel = mongoose.model('rd',RDSchema);
export default rdModel;