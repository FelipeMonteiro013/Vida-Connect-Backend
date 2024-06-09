import databaseConnection from "../utils/database";
import TypeMedicalExamination from "../models/typeMedicalExamination";

export const listTypeMedicalExamination = async () => {
    await databaseConnection();
    const typeMedicalExamination = TypeMedicalExamination.find();
    return typeMedicalExamination
}

export const createTypeMedicalExamination = async (typeMedicalExamination) => {
    await databaseConnection()
    const createdTypeMedicalExamination = await TypeMedicalExamination.create(typeMedicalExamination)
    return createdTypeMedicalExamination;
}

export const updateTypeMedicalExamination = async (id, newtypeMedicalExamination) => {
    await databaseConnection()
    await TypeMedicalExamination.findByIdAndUpdate(id, newtypeMedicalExamination)
    return
}