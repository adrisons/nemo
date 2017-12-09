// Messages exchange routing
// =========================

var express = require('express');
var router = express.Router();
var parseRouteName = require('../../common/parsers/parse-route-name')();
var parseRouteId = require('../../common/parsers/parse-route-id')();
var controller = require('../controllers/controller');
var userController = require('../controllers/userController');
var socialCtrl = require('../controllers/socialController');
var facebookCtrl = require('../../wrappers/facebook/controller');
var twitterCtrl = require('../../wrappers/twitter/controller');
const api = '/api';

// Routing
// =======

router.route(api + '/')
    .get(controller.init)
    .post(function(request, response) {
        response.json('POST Glu glu!');
    });

// User
// ===================================
const userroute = api + '/user';
// Register
router.route(userroute + '/register')
    .post(userController.register);

// Login
router.route(userroute + '/login')
    .post(userController.login);

// Update
router.route(userroute)
    .put(userController.update);

// Social
// ===================================
const socialroute = api + '/social';
// Add new social account
router.route(socialroute)
    .post(socialCtrl.add);
// Remove social account from user
router.route(socialroute + '/:id')
    .all(parseRouteId)
    .delete(socialCtrl.remove);




// ========
// Facebook
const fbroute = socialroute + '/fb';


// ========
// Twitter
const twroute = socialroute + '/tw';




// router.route(api + '/:name')
//     .all(parseRouteName)
//     .get(function(request, response) {
//         response.json('GET Requested: ' + request.name);
//     })
//     .delete(function(request, response) {
//         response.json('DELETE Requested: ' + request.name);
//     });

module.exports = router;