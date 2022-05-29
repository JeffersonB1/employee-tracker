const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// view all employees
router.get('/employees',(req, res) => {
    const sql = `SELECT employee.*, role.salary AS salary
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


// Create an employee
router.post('/employee', ({ body }, res) => {

    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`;
        const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: body
            });
        });
});

// Update an employee's role
router.put('/employee/:id', (req, res) => {
    
    const sql = `UPDATE employee SET role_id = ?
                WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            // check if a record was found
        } else if (!result.affectedRows) {
            res.json({
                message: 'Role not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });             
});
module.exports = router;