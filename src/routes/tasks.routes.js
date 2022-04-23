//file of server routes
const express = require('express');
const router = express.Router(); //object to enter routes

const Task = require('../models/task'); //model to be able to make searches to the DB

/**
 * get method to show all registers in the DB
 */
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

/**get one task only by using its id */
router.get('/:id', async(req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})

/**
 * post method to create tasks with a title and description
 */
router.post('/', async(req, res) =>{
    const {title, description} = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({status: 'Task Saved'});
})

/**
 * put method to update a registers in DB
 */
router.put('/:id', async (req, res) =>{
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    //console.log(req.params.id);  //shows the id entered in the put request
    res.json({status: 'Task Updated'});
})

/**
 * delete method
 */
router.delete('/:id', async(req, res) =>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'Task Deleted'}); 
})

module.exports = router;
