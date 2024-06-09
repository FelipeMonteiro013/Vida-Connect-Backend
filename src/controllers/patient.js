import { Router } from "express";
import {
  listPatients,
  createPatient,
  deletePatient,
  updatePatient,
  findPatientById,
  loginPatient
} from "../services/patient";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const userList = await listPatients();
    res.status(200).send(userList);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await createPatient(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:userId", async (req, res) => {
  try {
    await deletePatient(req.params.userId);
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

router.get("/:id", async (req, res) => {
  try {
    const user = await findPatientById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const patient = await loginPatient(req.body)

    if (!patient) {
      res.send()
    }

    res.send(patient)

  } catch (error) {
    res.status(400).send(error);
  }
})

export default router;
