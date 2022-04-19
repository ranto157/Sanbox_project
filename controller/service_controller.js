const db = require('../config/db') 
// const mysql = require('mysql');

function CreateUser (req, res) {

    let data = { 
        password:req.body.password,  
        name:req.body.name,
        addres:req.body.addres,
        join_date:req.body.join_date, 
        email :req.body.email,
        code :req.body.code
    };

    let searchQuery = "SELECT * FROM user WHERE name = ?"
    let insertQuery = "INSERT INTO user SET ?";

    db.query(searchQuery, req.body.Username,function (error, results, fields) {
        if (results.length != 0) {
            res.send({ message: 'User already exists'}) 
        }else{    
                db.query(insertQuery, data,function (error, results, fields) {
                if (error) throw error;
                res.send({ message: 'New User has been inserted'})
            });
        } 
    });
}

function DeleteUser(req, res) {
    let deleteQuery = "DELETE FROM user WHERE id="+req.params.id+"";
    db.query(deleteQuery, function (err, deleted) {
        if (err) throw err;
        res.send({ message: 'Data has been deleted' })
    });
}


function AddEvent (req, res) {

    let data = { 
        Event_name:req.body.Event_name,
        lokasi:req.body.lokasi,
        Date:req.body.Date, 
        Deskripsi:req.body.Deskripsi, 
    };

    let insertQuery = "INSERT INTO event SET ?";
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Product has been inserted', data: data })
    }); 
}


function DeleteEvent(req, res) {
    let deleteQuery = "DELETE FROM event WHERE id="+req.params.id+"";
    db.query(deleteQuery, function (err, deleted) {
        if (err) throw err;
        res.send({ message: 'Product has been deleted' })
    });
}

function updateEvent(req, res) {
    let updateQuery = "UPDATE event SET Event_name = '"+req.body.Event_name+"',lokasi='"+req.body.lokasi+"',Date='"+req.body.Date+"',Deskripsi='"+req.body.Deskripsi +"' WHERE id ="+req.params.id;
    
    
    db.query(updateQuery, function (error, result, updated) {
        if (error) throw error;
         res.send({ message: 'Data has been updated', updated })
    });
}


function listEvent(req, res) {
    let selectQuery = `SELECT * FROM event`;

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}



module.exports = {
    CreateUser, 
    DeleteUser,
    AddEvent,
    DeleteEvent,
    updateEvent,
    listEvent,
}

