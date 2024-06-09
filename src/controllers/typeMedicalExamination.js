import { Router } from "express";
import { listTypeMedicalExamination, createTypeMedicalExamination, updateTypeMedicalExamination } from "../services/typeMedicalExamination";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const typeMedicalExaminationList = await listTypeMedicalExamination()
        res.status(200).send(typeMedicalExaminationList)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const typeMedicalExamination = await createTypeMedicalExamination(req.body)
        res.status(200).send(typeMedicalExamination)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:typeMedicalExaminationId", async (req, res) => {
    try {
        await updateTypeMedicalExamination(req.params.typeMedicalExaminationId, req.body)
        res.send();
    } catch (error) {
        res.status(400).send(error);
    }
})


export default router