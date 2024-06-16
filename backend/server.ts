import express from "express"

const app = express()

app.use(express.static("../frontend/browser"))

app.listen(3000, ()=>{
    console.log('server created')
})