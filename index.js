const express =  require('express')
const app = express()
const port = process.env.port || 3000       
const json_data = require('./data.json')


app.get('/' , (req,res)=>{
    res.json(json_data)
})


app.listen(port , ()=>{
    console.log(`server stared at the port of ${port}`)
})