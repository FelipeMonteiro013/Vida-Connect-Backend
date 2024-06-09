import express from 'express'
import patientController from './controllers/patient'
import employeeController from './controllers/employee'
import medicalAppointmentController from './controllers/medicalAppointment'
import typeMedicalExaminationController from './controllers/typeMedicalExamination'
import medicalSpecialtyController from './controllers/medicalSpecialty'
import clinicController from './controllers/clinic'
import doctorController from './controllers/doctor'
import examController from './controllers/exam'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use("/patient", patientController)
app.use("/employee", employeeController)
app.use("/medicalAppointment", medicalAppointmentController)
app.use("/typeMedicalExamination", typeMedicalExaminationController)
app.use("/medicalSpecialty", medicalSpecialtyController)
app.use("/clinic", clinicController)
app.use("/doctor", doctorController)
app.use("/exam", examController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
