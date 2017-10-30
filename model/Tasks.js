var mong = require('mongoose');
var db = require('./DBConfig');

//Task DB Schema

var TaskSchema = mong.Schema({
    uid: {
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

module.exports.getAllTasks = (callback) => {
    Task.find({}, callback);
}
module.exports.getTaskByUId = (uid, callback) => {
    Task.findOne({ uid: uid }, callback);
}

module.exports.getTaskByObjectId = (id, callback) => {
    Task.findById({ _id: id }, callback);
}

module.exports.addTask = (Task, callback) => {
    Task.save(callback);
}

module.exports.updateTask = (Update, callback) => {
    /*Task.update({ _id: Update._id }, {
            $set: {
                "uid": Update.uid,
                "title": Update.title,
                "description": Update.description,
                "category": Update.category,
                "due_date": Update.due_date,
                "rec_date": Update.rec_date,
                "notes": Update.notes,
                "email_reminder": Update.email_reminder,
                "priority": Update.priority,
                "sub_tasks": Update.sub_tasks
            }
        }, { upsert: false },
        callback
    );*/

    Task.update({ _id: Update._id },
        Update, {
            new: true,
            upsert: false
        },
        callback
    );
}

module.exports.deleteTask = (id, callback) => {
    Task.deleteOne({ _id: id }, callback);
}