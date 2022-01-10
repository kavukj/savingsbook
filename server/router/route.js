import express from 'express';
import accountModel from '../model/Accounts.js';
import fdModel from '../model/FD.js';
import misModel from '../model/MIS.js';
import rdModel from '../model/RD.js';
import tdModel from '../model/TD.js';

const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.send({ response: "Server is Up and Running" }).status(200)
    } catch (error) {
        console.log(error)
    }
})

//FD Model Routes
router.get("/fd",async(request,response)=>{
    try{
        const fd = await fdModel.find({})
        response.status(200).json(fd)
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to find FD's" + error)
    }
})

router.post('/fd/add',async(request,response)=>{
    console.log(request.body.number)
    try{
        let exist = await fdModel.findOne({number:request.body.number})
        if(exist){
            response.status(200).json("This FD number already exists")
            return
        }
        const newFD = new fdModel(request.body)
        await newFD.save();
        response.status(200).json("FD Saved succesfully")
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to add New FD" + error)
    }
})

//TD Model Routes
router.get("/td",async(request,response)=>{
    try{
        const td = await tdModel.find({})
        response.status(200).json(td)
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to find TDs" + error)
    }
})

router.post('/td/add',async(request,response)=>{
    console.log(request.body.number)
    try{
        let exist = await tdModel.findOne({number:request.body.number})
        if(exist){
            response.status(200).json("This TD number already exists")
            return
        }
        const newTD = new tdModel(request.body)
        await newTD.save();
        response.status(200).json("TD Saved succesfully")
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to add New TD" + error)
    }
})

//RD Model Routes
router.get("/rd",async(request,response)=>{
    try{
        const rd = await rdModel.find({})
        response.status(200).json(rd)
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to find RD's" + error)
    }
})

router.post('/rd/add',async(request,response)=>{
    try{
        let exist = await rdModel.findOne({number:request.body.number})
        if(exist){
            response.status(200).json("This RD number already exists")
            return
        }
        const newRD = new rdModel(request.body)
        await newRD.save();
        response.status(200).json("RD Saved succesfully")
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to add New RD" + error)
    }
})

//Account Model Routes
router.get("/account",async(request,response)=>{
    try{
        const account = await accountModel.find({})
        response.status(200).json(account)
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to find Accounts" + error)
    }
})

router.post('/account/add',async(request,response)=>{
    try{
        let exist = await accountModel.findOne({number:request.body.number})
        if(exist){
            response.status(200).json("This Account number already exists")
            return
        }
        const newAccount = new accountModel(request.body)
        await newAccount.save();
        response.status(200).json("Account Saved succesfully")
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to add New Account" + error)
    }
})

//MIS Model Routes
router.get("/mis",async(request,response)=>{
    try{
        const mis = await misModel.find({})
        response.status(200).json(mis)
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to find MIS" + error)
    }
})

router.post('/mis/add',async(request,response)=>{
    try{
        let exist = await misModel.findOne({number:request.body.number})
        if(exist){
            response.status(200).json("This MIS number already exists")
            return
        }
        const newMIS = new misModel(request.body)
        await newMIS.save();
        response.status(200).json("MIS Saved succesfully")
    }catch(error){
        console.log(error)
        response.status(500).json("Unable to add New MIS" + error)
    }
})
 
export default router;
