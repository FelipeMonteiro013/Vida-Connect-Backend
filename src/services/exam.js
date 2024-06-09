import databaseConnection from "../utils/database";
import Exam from "../models/exam";

export const listExams = async () => {
    await databaseConnection()
    const examList = await Exam.find()
    return examList
}

export const createExam = async (exam) => {
    await databaseConnection()
    const createdExam = await Exam.create(exam)
    return createdExam
}

export const updateExams = async (id, newData) => {
    await databaseConnection()
    await Exam.findByIdAndUpdate(id, newData)
    
}

export const findExamsById = async (id) => {
    await databaseConnection()
    const exam = await Exam.findById(id)
    return exam
}