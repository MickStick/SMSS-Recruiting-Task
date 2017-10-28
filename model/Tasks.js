var mong = require('mongoose');
var db = require('./DBConfig');

//Task DB Schema

var TaskSchema = mong.Schema({
    id: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    due_date: {
        type: Date
    },
    rec_date: {
        type: Date
    },
    notes: {
        type: String
    },
    email_reminder: {
        type: String
    },
    priority: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    sub_tasks: {
        type: String
    }
});

var Task = module.exports = mong.model('Task', TaskSchema);

module.exports.getTaskById = function(id, callback) {
    Task.findOne({ id: id }, callback);
}

module.exports.getTaskByObjectId = function(id, callback) {
    Task.findById({ _id: id }, callback);
}

module.exports.addTask = function(Task, callback) {
    Task.save(callback);
}