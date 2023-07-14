import mongoose from "mongoose";


const uri = "mongodb+srv://nguyhonglong2002:Mb5AkIZdMCRUgJYi@cluster0.zokt7pa.mongodb.net/?retryWrites=true&w=majority";


async function connect() {
    try {
       await mongoose.connect(uri) ;
    } catch (error) {
        console.log("false");
    }
}

module.exports = { connect };