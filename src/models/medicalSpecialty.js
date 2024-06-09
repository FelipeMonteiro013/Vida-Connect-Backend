import mongoose from "mongoose";

const medicalSpecialtySchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { collection: "tbl_medical_specialty" })

export default mongoose.model.medicalSpecialty || mongoose.model("medicalSpecialty", medicalSpecialtySchema)