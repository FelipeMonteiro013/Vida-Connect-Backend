import databaseConnection from "../utils/database";
import Clinic from "../models/clinic";

export const listClinic = async () => {
    await databaseConnection()
    const clinicList = await Clinic.find()
    return clinicList
}

export const createClinic = async (clinic) => {
    await databaseConnection()
    const createdClinic = await Clinic.create(clinic)
    return createdClinic
}

export const updateClinic = async (id, data) => {
    await databaseConnection()
    await Clinic.findByIdAndUpdate(id, data)
}

