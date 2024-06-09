import databaseConnection from "../utils/database";
import MedicalSpecialty from "../models/medicalSpecialty";

export const listMedicalSpecialty = async () => {
    await databaseConnection();
    const medicalSpecialty = MedicalSpecialty.find();
    return medicalSpecialty
}

export const createMedicalSpecialty = async (medicalSpecialty) => {
    await databaseConnection()
    const createdMedicalSpecialty = await MedicalSpecialty.create(medicalSpecialty)
    return createdMedicalSpecialty;
}

export const updateMedicalSpecialty = async (id, newData) => {
    await databaseConnection()
    await MedicalSpecialty.findByIdAndUpdate(id, newData)
    return
}