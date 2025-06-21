import dotenv from 'dotenv'
import connectDB from './db/index.js'

import express from 'express'


dotenv.config({
    path:'./env'
}) // added function in package.json in dev script

connectDB();