import { pool } from "../db.js"

export const getEmployeeds = async (req,res)=>{

    try {
        const [rows] = await pool.query('SELECT*FROM employee');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({message : "Something goes wrong"})
    }
}

export const getEmployeed = async (req,res)=>{
    
    try {
        const {id} = req.params;
        const [rows] = await pool.query('SELECT*FROM employee WHERE id=?' , [id]);
   
        if(rows.length===0){
            res.status(404).send("no existe el employee");
        }else{
         res.json(rows[0]);
        }
        
    } catch (error) {
        return res.status(500).json({message : "Something goes wrong"}) 
    }
   
}

export const postEmployeeds = async (req,res)=>{
    
    try {
        const {name, salary} = req.body;
        const [rows] = await pool.query('INSERT INTO employee (name , salary) VALUES (?, ?)',[name, salary])
        console.log(name);
        return res.send({
            id : rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({message : "Something goes wrong"}) 
    }
}



export const putEmployeeds = async (req,res)=>{
    
    try {
        const {id} = req.params;
        const {name, salary} = req.body;
    
        const [result] = await pool.query('UPDATE employee SET name=?, salary=? WHERE id=?',[name, salary, id])
    
        if(result.affectedRows===0){
            res.status(404).send("no existe el employee");
        }else{
            const [rows] = await pool.query('SELECT*FROM employee WHERE id=?' , [id]);
            res.json(rows[0])
        } 
    } catch (error) {
        return res.status(500).json({message : "Something goes wrong"}) 
    }
}

export const patchEmployeeds = async (req,res)=>{
    
    try {
        const {id} = req.params;
        const {name, salary} = req.body;

        const [result] = await pool.query('UPDATE employee SET name=IFNULL(?,NAME), salary=IFNULL(?,salary) WHERE id=?',[name, salary, id])

        if(result.affectedRows===0){
            res.status(404).send("no existe el employee");
        }else{
            const [rows] = await pool.query('SELECT*FROM employee WHERE id=?' , [id]);
            res.json(rows[0])
    }
        
    } catch (error) {
        return res.status(500).json({message : "Something goes wrong"})
    }

}

export const deleteEmployeeds = async (req,res)=>{    

    try {
        const {id} = req.params;
        const [result] = await pool.query('DELETE FROM employee WHERE id=?' , [id]);
           
        if(result.affectedRows===0){
            res.status(404).send("no existe el employee");
        }else{
            res.send("se elimino el employee");
        } 
    } catch (error) {
        return res.status(500).json({message : "Something goes wrong"})
    }
}