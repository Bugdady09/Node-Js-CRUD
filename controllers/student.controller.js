const express = require('express');
// const { getAllEmployees } = require('../services/employee.service');
const service = require('../services/employee.service')
 router = express.Router()




 router.get('/', async (req, res) => {
    const employees = await service.getAllEmployees();
    res.send(employees);

 })

 router.get('/:id', async (req, res) => {
    const employee = await service.getEmployee(req.params.id);
    if(employee == undefined)
        res.status(404).send('No data found')

    res.send(employee)

 })

 router.delete('/:id', async (req, res) => {
    const resultSetHeader = await service.deleteEmployee(req.params.id);


    if(resultSetHeader.affectedRows == 0) {
        res.send('No data found to delete')
    }

    res.send("deleted...")

 })

 router.post('/', async (req, res) => {
    const result = await service.addEmployee(req.body);

    res.send(result)

 })

 router.put('/', async (req, res) => {
    const result = await service.updateEmployee(req.body);

    res.send(result)

 })




 module.exports = router


