require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")
app.use(express.json())
app.use(cors())


app.get("/characters", async (req, res) =>{
    try {
        const response = await axios.get(` https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`)
        // console.log(response.data.results);

        res.status(200).json(response.data);
        
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
})

app.get("/comics",async (req,res) =>{
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`)
        // console.log(response.data);
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
})


app.all("*", (req,res)=>{
    res.status(404).json("this route does not exist")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running")
})