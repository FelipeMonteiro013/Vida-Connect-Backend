import mongoose from "mongoose";

const MedicalAppointmentSchema = new mongoose.Schema({
    symptoms: {type: String, required: false},
    medicalHistory: {type: String, required: false},
    date: {type: Date, required: true, default: Date.now},
    reason : {type: String, required: true},
    patient_id: {type: String, required: true, alias: "patientId"},
    clinic_id: {type: String, required: true, alias: "clinicId"},
    status: { type: String, required: true, default: "PENDING" },
}, {collection: 'tbl_medical_appointment'})

export default mongoose.model.MedicalAppointment || mongoose.model("MedicalAppointment", MedicalAppointmentSchema)
