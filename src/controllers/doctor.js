import { Router } from "express";
import { listDoctor, createDoctor, updateDoctor } from "../services/doctor"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const doctorList = await listDoctor();
        res.status(200).send(doctorList)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const doctor = await createDoctor(req.body)
        res.status(200).send(doctor)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        await updateDoctor(req.params.id, req.body)
        res.send()
    } catch (error) {
        res.status(400).send(error);
    }
})

export default router