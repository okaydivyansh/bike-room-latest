const express = require('express')
const router = express.Router()

router.post('/bikeData',(req,res)=>{
    try {
        
        res.send([global.bikes, global.bike_type])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports=router;