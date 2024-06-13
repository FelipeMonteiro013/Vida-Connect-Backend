import { Router } from "express";
import {
  listPatients,
  createPatient,
  deletePatient,
  updatePatient,
  findPatientById,
  findPatientByDocument,
  loginPatient
} from "../services/patient";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const patientList = await listPatients();
    res.status(200).send(patientList);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const patient = await createPatient(req.body);
    res.status(201).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deletePatient(req.params.id);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await updatePatient(req.params.id, req.body);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const patient = await findPatientById(req.params.id);
//     res.status(200).send(patient);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

router.get("/:document", async (req, res) => {
  try {
    const patient = await findPatientByDocument(req.params.document);
    res.status(200).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const patient = await loginPatient(req.body)

    res.send(patient)

  } catch (error) {
    res.status(400).send(error);
  }
})

export default router;
