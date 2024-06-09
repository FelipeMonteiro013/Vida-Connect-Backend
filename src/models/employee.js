import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
}, { collection: "tbl_employee" })

export default mongoose.model.Employee || mongoose.model("Employee", EmployeeSchema)