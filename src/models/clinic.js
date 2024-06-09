import mongoose from "mongoose";

const ClinicSchema = new mongoose.Schema({
    corporateReason: { type: String, required: true },
    cnpj: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
}, {collection: "tbl_clinic"})

export default mongoose.model.Clinic || mongoose.model("Clinic", ClinicSchema)
