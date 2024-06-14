import { Router } from "express";
import { listMedicalAppointment, createMedicalAppointment, updateMedicalAppointment, findMedicalAppointmentById, findMedicalAppointmentByPatientId } from "../services/medicalAppointment";

const router = Router()

router.get("/", async (req, res) => {
    try {
        const medicalAppointmentList = await listMedicalAppointment();
        res.status(200).send(medicalAppointmentList)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const medicalAppointment = await createMedicalAppointment(req.body);
        res.status(201).send(medicalAppointment)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:medicalAppointmentId", async (req, res) => {
    try {
        await updateMedicalAppointment(req.params.medicalAppointmentId, req.body);
        res.send()
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/:medicalAppointmentId", async (req, res) => {
    try {
        const medicalAppointment = await findMedicalAppointmentById(req.params.medicalAppointmentId);
        res.status(200).send(medicalAppointment)
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/patient/:patientId/", async (req, res) => {
    try {
        const medicalAppointments = await findMedicalAppointmentByPatientId(req.params.patientId);
        res.status(200).send(medicalAppointments);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;