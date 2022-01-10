import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
    number:{
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

const accountModel = mongoose.model('account',AccountSchema);
export default accountModel;