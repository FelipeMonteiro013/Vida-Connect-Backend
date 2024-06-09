import databaseConnection from "../utils/database";
import MedicalAppointment from "../models/medicalAppointment"

export const listMedicalAppointment = async () => {
    await databaseConnection()
    const medicalAppointmentList = await MedicalAppointment.find()
    return medicalAppointmentList
}

export const createMedicalAppointment = async (medicalAppointment) => {
    await databaseConnection()
    const createdMedicalAppointment = await MedicalAppointment.create(medicalAppointment)
    return createdMedicalAppointment
}

export const updateMedicalAppointment = async (id, newMedicalAppointment) => {
    await databaseConnection()
    await MedicalAppointment.findByIdAndUpdate(id, newMedicalAppointment)
}

export const findMedicalAppointmentById = async (id) => {
    await databaseConnection()
    const medicalAppointment = await MedicalAppointment.findById(id)
    return medicalAppointment
}