import { Router } from "express";
import {
  listUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../services/user";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const userList = await listUsers();
    res.status(200).send(userList);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:userId", async (req, res) => {
  try {
    await deleteUser(req.params.userId);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:userId", async (req, res) => {
  try {
    await updateUser(req.params.userId, req.body);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
