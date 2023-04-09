const express = require("express");
const cors = require("cors");
const userRoute= require("./routes/user.routes");
const analyticsRoutes = require("./routes/anylatics.routes");
const { attachment } = require("./config/db");
require("dotenv").config();
const port_no = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("welcome to our social media app")
})

app.use("/users", userRoute);
app.use("/users/:id", userRoute);
app.use("/analytics/users",analyticsRoutes);
app.use("/analytics/users/top-active",analyticsRoutes)
app.listen(port_no, async()=>{
    try {
        await attachment;
        console.log("DATABASE CONNECTION IS SUCCESSFULLY");
    } catch (err) {
        console.log("error name",err.message);
    }
    console.log("Port",port_no)
})