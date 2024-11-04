import Teacher from "../models/teacherSchema.js";
import mongoose from 'mongoose'


export const getTeachers = async (req, res) => {
    try{
        const teacher = await Teacher.find()
        res.status(200).json({ teacher })
    }catch(error){
        res.status(404).json({error: "Invalid input"})
    }
}

export const createTeacher = async (req, res) => {
    const {name, age, staff_number, department} = req.body
    try{
        if(!name || !age || !staff_number || !department){
            return res.status(400).json({error: "All fields required"})
        }
        const teacher = await Teacher.create(req.body)

        res.status(201).json({teacher})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export const getSingleTeacher =  async (req, res) => {
    const {_id} = req.params

    try{
        
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).json({error: "invalid student"})
        }

        const teacher = await Teacher.findById(_id)
        if (!teacher){
            return res.status(404).json({error: "student not found"})
        }
        res.status(200).json({teacher})
    }catch(error){
        res.status(400).json({error:  "error"})
    }
}



export const editTeacher = async (req, res) => {
    const {_id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).json({error: "Invalid students id"})
        }
        const teacher = await Teacher.findByIdAndUpdate(_id, req.body, {new: true})
        if(!teacher){
            return res.status(404).json({error: "student not found"})
        }
        res.status(200).json({teacher})
    }catch(error){
        res.status(400).json({error: error})
    }
}

export const removeTeacher = async (req, res) => {
    const {_id} = req.params
    try{
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).json({error: "Invalid student id"})
        }
        const teacher = await Teacher.findByIdAndDelete(_id)
        if(!teacher){
            return res.status(404).json({error: "student not found"})
        }
        res.status(200).json({successfully: deleted})
    }catch(error){
        res.status(400).json({error: error})
    }
}
