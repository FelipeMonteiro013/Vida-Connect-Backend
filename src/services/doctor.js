import databaseConnection from "../utils/database";
import Doctor from "../models/doctor";

export const listDoctor = async () => {
    await databaseConnection()
    const doctorList = await Doctor.find()
    return doctorList;
}

export const createDoctor = async (doctor) => {
    await databaseConnection()
    const createdDoctor = await Doctor.create(doctor)
    return createdDoctor;
}

export const updateDoctor = async (id, data) => {
    await databaseConnection()
    await Doctor.findByIdAndUpdate(id, data)
}
