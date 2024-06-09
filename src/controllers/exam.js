import { Router } from "express";
import {listExams, createExam, updateExams, findExamsById} from "../services/exam"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const examList = await listExams()
        res.status(200).send(examList)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const examList = await createExam(req.body)
        res.status(201).send(examList)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        await updateExams(req.params.id, req.body)
        res.send()
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const exam = await findExamsById(req.params.id)
        res.status(200).send(exam)
    } catch (error) {
        res.status(400).send(error)
    }
})



export default router