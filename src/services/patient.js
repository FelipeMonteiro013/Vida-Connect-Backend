import databaseConnection from "../utils/database"
import Patient from "../models/patient"

export const listPatients = async () => {
    await databaseConnection()
    const patients = await Patient.find()

    return  patients
}

export const createPatient = async (patient) => {
    await databaseConnection()
    const createdPatient = await Patient.create(patient)
    return createdPatient
}

export const deletePatient = async(id) => {
    await databaseConnection()
    await Patient.findByIdAndDelete(id)
}

export const updatePatient = async(id, newData) => {
    await databaseConnection()
    await Patient.findByIdAndUpdate(id, newData)
}

export const findPatientById = async (id) => {
    await databaseConnection()
    const patient = await Patient.findById(id)
    return patient
}

export const loginPatient = async (data) => {

    await databaseConnection()
    
    const { email, password } = data;

    const response = await Patient.findOne({ email }).select("+password")

    if (!response) {
        return "User not found!"
    }

    if (response.password != password) {
        return "Invalid password!"
    }

    response.password = undefined

    return response
}