// Social Controller
// =================
'use strict';

var service = require('../../common/services/socialService');

// Save credentials of a social network for one user
exports.add = function(req, res) {
    // Guardar token y tipo de red social para el usuario
    const user_rs = {
        access_token: req.body.access_token,
        user_id: req.body.user_id,
        type_id: req.body.type_id,
        id_token: req.body.id_token,
        login: req.body.login
    };
    res.send({
        "code": 200,
        "message": "Social network saved successfully",
        "data": {
            "id": Math.floor((Math.random() * 1000) + 1)
        }
    });
    // service.add(req, res);
};
// Delete social network credentials for one user
exports.remove = function(req, res) {
    // Guardar token y tipo de red social para el usuario
    res.send({
        "code": 200,
        "message": "Social network deleted successfully",
        "token": req.body.access_token,
        // "data": user_rs
    });
    // service.remove(req, res);
};