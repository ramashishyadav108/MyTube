import dotenv from 'dotenv'
import connectDB from './db/index.js'
import {app }   from './app.js'
import express from 'express'


dotenv.config({
    path:'./env'
}) // added function in package.json in dev script

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!",err)
})

