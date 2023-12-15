const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sunto:ZSSwx34UoM5vMueG@cluster0.dtgxdfg.mongodb.net/circle?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection;

// Confirm that the database has connected 
// and print a message in the console.
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});
/*.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})*/

const newSchema=new mongoose.Schema({
    loginInput: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection