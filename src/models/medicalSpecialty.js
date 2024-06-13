import mongoose from "mongoose";

const MedicalSpecialtySchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { collection: "tbl_medical_specialty" })

export default mongoose.model.MedicalSpecialty || mongoose.model("MedicalSpecialty", MedicalSpecialtySchema)