import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@savingsbook.uollk.mongodb.net/savingsbook?retryWrites=true&w=majority`
    //const URL = `mongodb://${username}:${password}@savingsbook-shard-00-00.uollk.mongodb.net:27017,savingsbook-shard-00-01.uollk.mongodb.net:27017,savingsbook-shard-00-02.uollk.mongodb.net:27017/savingsbook?ssl=true&replicaSet=atlas-xqgl4i-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true, useNewUrlParser: true
        })
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}

export default Connection;