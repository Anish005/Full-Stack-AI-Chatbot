import {connect,disconnect} from "mongoose";

async function connectToDB() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error);
        throw new Error(" db connection failed")
        
    }
}
async function disconnectFromDB() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error(" db connection failed")  
    }
}

export {connectToDB, disconnectFromDB}