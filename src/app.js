import express from 'express';
import routerEmployees from './routes/employees.routes.js';
import routerIndex from './routes/index.routes.js';


 const app =express();

app.use(express.json());

app.use(routerIndex);

app.use('/api', routerEmployees);

app.use((req, res, next)=>{
      res.status(404).json({
         message : "endpoint not found"
      })
})

export default app;