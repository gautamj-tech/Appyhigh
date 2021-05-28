const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const users = mongoose.model('users');

router.get('/', (req, res) => {
    res.render("users/addOrEdit", {
        viewTitle: "Welcome"
    });
});

router.post('/', (req, res) => {
     insertRecord(req, res);
        
});


function insertRecord(req, res) {
    var user = new users();
    user.userName = req.body.userName;
    user.imagesrc = req.body.imagesrc;
    
    user.save((err, doc) => {
        if (!err)
            res.redirect('users/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("user/addOrEdit", {
                    viewTitle: "Insert",
                    user: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}
router.get('/list', (req, res) => {
    users.find((err, docs) => {
        if (!err) {
            res.render("users/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving users list :' + err);
        }
    });
});




module.exports = router;