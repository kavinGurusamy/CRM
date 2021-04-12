const userModel = require("../models/userModel")

exports.addUser = (req, res, next) =>{
    console.log(req.body);
    req.body.active = true
    userModel.create(req.body,(error,data) => {
        if(error){
            console.log(error);
            res.status(503).send(err);
        } else{
            res.send(data)
        }
    })
}