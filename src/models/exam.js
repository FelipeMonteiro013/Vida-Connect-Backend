import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    type_examination_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TypeMedicalExamination' },
    clinic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Clinic' },
    date: {type: Date, required: true, default: Date.now},
    status: { type: String, required: true, default: "PENDING" },
}, {collection: 'tbl_exam'})

export default mongoose.model.Exam || mongoose.model("Exam", ExamSchema)
