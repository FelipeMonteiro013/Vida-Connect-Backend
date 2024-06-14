import { Router } from "express";
import {
  listEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
  findEmployeeById,
  loginEmployee
} from "../services/employee";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const employeesList = await listEmployees();
    res.status(200).send(employeesList);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const employee = await createEmployee(req.body);
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:employeeId", async (req, res) => {
  try {
    await deleteEmployee(req.params.employeeId);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:employeeId", async (req, res) => {
  try {
    await updateEmployee(req.params.employeeId, req.body);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:employeeId", async (req, res) => {
  try {
    const employee = await findEmployeeById(req.params.employeeId);
    res.status(200).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => { 

  try {
    const employee = await loginEmployee(req.body)

    res.send(employee)
    
  } catch (error) {
    res.status(400).send(error);
  }
})

export default router;
