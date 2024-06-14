import databaseConnection from "../utils/database"
import Employee from "../models/employee"


export const listEmployees = async () => {
    await databaseConnection()
    const employees = await Employee.find()
    return  employees
}

export const createEmployee = async (employee) => {
    await databaseConnection()
    const createdEmployee = await Employee.create(employee)

    createdEmployee.password = undefined
    return createdEmployee
}

export const deleteEmployee = async(id) => {
    await databaseConnection()
    await Employee.findByIdAndDelete(id)
}

export const updateEmployee = async(id, newEmployee) => {
    await databaseConnection()
    await Employee.findByIdAndUpdate(id, newEmployee)
}

export const findEmployeeById = async (id) => {
    await databaseConnection()
    const employee = await Employee.findById(id)
    return employee
}
export const loginEmployee = async (data) => {

    await databaseConnection()
    
    const { email, password } = data;

    const response = await Employee.findOne({ email }).select("+password")

    if (!response) {
        return {}
    }

    if (response.password != password) {
        return {}
    }

    response.password = undefined

    return response
}