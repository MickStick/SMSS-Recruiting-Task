var express = require('express');
var router = express.Router();
var pp = require('passport');
var jwt = require('jsonwebtoken');
var hex = require('sha256');

var Task = require('../model/Tasks');



router.get('/', (req, res, next) => {
    Task.getAllTasks((err, results) => {
        if(err){
            throw err;
            console.log(err);
            res.json({
                success : false,
                msg : "Cannot get tasks"
            });
        }else{
            res.json({
                success : true, 
                msg : "All Tasks were found",
                tasks : results
            });
        }
    });

});

//Saving posts
router.post('/add', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {
    let newTask = new Task({
        uid: req.body.uid,
        title: req.body.title,
        description: req.body.desc,
        category: req.body.cat,
        due_date: req.body.ddate,
        rec_date: req.body.rdate,
        notes: req.body.notes,
        email_reminder: req.body.reminder,
        priority: req.body.priority,
        sub_tasks: req.body.subs
    });

    Task.addTask(newTask, (err, task) => {
        if (err) {
            throw err;
            res.json({ success: false, msg: "Task Failed To Save!" })
        } else {
            res.json({ success: true, msg: "Task \"" + req.body.title + "\" has been saved!" });
        }
    });
});

//Updating posts
router.put('/update', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {
    let updated = new Task({
        _id: req.body._id,
        uid: req.body.uid,
        title: req.body.title,
        description: req.body.desc,
        category: req.body.cat,
        due_date: req.body.ddate,
        rec_date: req.body.rdate,
        notes: req.body.notes,
        email_reminder: req.body.reminder,
        priority: req.body.priority,
        sub_tasks: req.body.subs
    });

    Task.updateTask(updated, (err, result) => {
        if (err) {
            throw err;
            res.json({ success: false, msg: "Task update failed!!" });
        } else {
            if(!result.nModified){
                console.log("Task update failed!! DB error");
                res.json({ success: false, msg: "Task update failed!! DB error" });
            }else{
                res.json({
                    success: true,
                    msg: "Task \"" + req.body.title + "\" has been saved!",
                    update: result
                });
            }
            
        }
    });
});
//Deleting posts
router.post('/delete', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {
    Task.deleteTask(req.body.id, (err, result) => {
        if(err){
            throw err;
            console.log(err);
            res.json({success : false, msg : "Task Failed To Delete"});
        }else{
            res.json({success : true, msg : "Task Deleted!!"});
        }
    });
});

//Getting a single task

router.post('/task', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {
    Task.getTaskByObjectId(req.body.id, (err, result) => {
        if (err) {
            throw err;
            res.json({
                success: false,
                msg: "FAILED!"
            });
        } else {
            res.json({
                success: true,
                msg: "Found",
                task: result
            });
        }
    });
});

router.post('/tasks', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {
    Task.find({uid:req.body.id}, (err, tasks) => {
        if(err){
            throw err;
            console.log(err);
            res.json({success: false, msg:"ERROR!"});
        }else{
            if(tasks == ""){
                console.log("No Tasks");
                res.json({success: false, msg:"No Tasks"});   
            }else{
                res.json({success: true, msg:"Tasks Found!",tasks:tasks});
            }
            console.log("Tasks: "+tasks);
        }
    });
});

//Saving post comments
router.post('/comment', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {

});
//Updating post comments
router.post('/comment/:id', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {

});
//Deleting post comments
router.delete('/comment/:id', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {

});



module.exports = router;