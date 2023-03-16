import app from "./app.js";
import {PORT} from './config.js';

app.listen(PORT,()=>{
   ;
})
console.log("se esta ejecutando en el puerto" , PORT )