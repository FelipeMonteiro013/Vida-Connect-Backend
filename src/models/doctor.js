import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    crm: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    specialty_id: { type: String, required: true, alias: 'specialtyId' },
    clinic_id: { type: String, required: true, alias: 'clinicId' },
    status: { type: Boolean, required: true, default: true },
}, { collection: 'tbl_doctor' })

export default mongoose.model.Doctor || mongoose.model("Doctor", DoctorSchema)