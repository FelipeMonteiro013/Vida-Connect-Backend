import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    document: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dt_nasc: { type: Date, required: true, default: Date.now, alias: 'dtNasc' }, 
    password: { type: String, required: true, select: false },
}, { collection: 'tbl_patient' })

export default mongoose.model.Patient || mongoose.model("Patient", PatientSchema)