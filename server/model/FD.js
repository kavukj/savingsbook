import mongoose from 'mongoose';

const FDSchema = new mongoose.Schema({
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
        type:String
    }
})

const fdModel = mongoose.model('fd',FDSchema);
export default fdModel;