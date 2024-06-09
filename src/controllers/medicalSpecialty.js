import { Router } from "express";
import { listMedicalSpecialty, createMedicalSpecialty, updateMedicalSpecialty } from "../services/medicalSpecialty";
const router = Router();

router.get("/", async (req, res) => {
    try {
        const medicalSpecialtyList = await listMedicalSpecialty()
        res.status(200).send(medicalSpecialtyList)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const medicalSpecialty = await createMedicalSpecialty(req.body)
        res.status(200).send(medicalSpecialty)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        await updateMedicalSpecialty(req.params.id, req.body)
        res.send();
    } catch (error) {
        res.status(400).send(error);
    }
})


export default router