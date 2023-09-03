const express = require("express");
const cors = require("cors");
require("dotenv/config");

//DB Connection
require("./config/dbconnection");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

//For Route declareration
const niladetailRouter= require("./routes/NilaDetails");
app.use("/niladetail",niladetailRouter);

//End

//Set route paths

//End

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})