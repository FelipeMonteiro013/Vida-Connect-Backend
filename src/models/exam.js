import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
    patient_id: {type: String, required: true, alias: "patientId"},
    type_examination_id: {type: String, required: true, alias: "typeExaminationId"},
    clinic_id: {type: String, required: true, alias: "clinicId"},
    date: {type: Date, required: true, default: Date.now},
    status: { type: String, required: true, default: "PENDING" },
}, {collection: 'tbl_exam'})

export default mongoose.model.Exam || mongoose.model("Exam", ExamSchema)
