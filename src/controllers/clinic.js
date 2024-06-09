import { Router } from "express";
import { listClinic, createClinic, updateClinic } from "../services/clinic"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const clinic = await listClinic();
        res.status(200).send(clinic)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const clinic = await createClinic(req.body);
        res.status(201).send(clinic)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const clinic = await updateClinic(req.params.id, req.body);
        res.send()
    } catch (error) {
        res.status(400).send(error);
    }
})

export default router