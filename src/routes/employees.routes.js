import { Router } from "express";
import { getEmployeeds,postEmployeeds,putEmployeeds,deleteEmployeeds,getEmployeed, patchEmployeeds } from "../controllers/employees.controllers.js";

const routerEmployees = Router();

routerEmployees.get('/employees' , getEmployeeds )

routerEmployees.get('/employees/:id' , getEmployeed)

routerEmployees.post('/employees' , postEmployeeds )

routerEmployees.put('/employees/:id' , putEmployeeds)

routerEmployees.patch('/employees/:id' , patchEmployeeds)

routerEmployees.delete('/employees/:id' , deleteEmployeeds)

export default routerEmployees;