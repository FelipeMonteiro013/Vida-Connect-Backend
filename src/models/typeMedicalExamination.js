import mongoose from "mongoose";

const TypeMedicalExaminationSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { collection: "tbl_type_medical_examination" })

export default mongoose.model.TypeMedicalExamination || mongoose.model("TypeMedicalExamination", TypeMedicalExaminationSchema)