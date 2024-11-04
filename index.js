import express from 'express'
import dotenv from 'dotenv'
import studentRouter from './routes/studentsRoute.js'
import teacherRouter from './routes/teachersRoute.js'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoute from './routes/userRoute.js'



dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// app.get('/', (req, res)=>{

//     res.send('This is our page')
// })

// app.get('/phil', (req, res)=>{
//     res.json({message: "i love my wife", name: "Ms Phil"})
// })

// app.post('/', (req, res)=>{
//     const {name, message} = req.body

//     res.json({name, message})
//     // res.send('Message gotten')
// })

app.use('/api/students', studentRouter)
app.use('/api/teachers', teacherRouter)
app.use('/api/auth', userRoute)

const PORT = process.env.PORT

app.listen(PORT, (err)=>{
    console.log('listening at '+ PORT)
})

mongoose.connect(process.env.atlas)
.then(()=>{
    console.log('connected to database')
})

.catch((err)=> {
    console.log(err)
})