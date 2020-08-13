// const express = require('express')
// const { controllerAdapter, auth } = require('../middlewares')
// const {
//   branchControllerInstance,
//   paymentReasonControllerInstance,
//   paymentTypeControllerInstance,
//   phoneTypeControllerInstance
// } = require('./index')


// const router = new express.Router()


// //#region [swagger: /branch - POST]
// /**
//  * @swagger
//  * path:
//  *  /branch:
//  *    post:
//  *     tags:
//  *       - branch
//  *     summary: "Add a new branch"
//  *     description: 
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: authorization
//  *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
//  *         in: header
//  *         type: string
//  *         required: true
//  *       - name: receipt 
//  *         in: body
//  *         description: Create a new branch
//  *         required: true
//  *         example: {   
//  *                  "name": string,
//  *                  }
//  *         
//  *     responses:
//  *       201:
//  *         description: Successfull response
//  *         schema:
//  *            type: object
//  *            example: {
//  *                       "id": ObjectId,
//  *                       "code": "201",
//  *                       "message": "Created",
//  *                       "timestamp": date
//  *                      }
//  *       401:
//  *         description: Unauthorized Error
//  *         schema: 
//  *           type: string
//  *           example: "Authentication failed! Try again." 
//  *       400: 
//  *          description: BAD_REQUEST
//  *          schema:
//  *            type: string
//  *            example: "Something went wrong! Check required inputs!"
//  *       500:
//  *         description: Error
//  *         schema: 
//  *           type: string
//  *           example: "Could not add branch"            
             
//  */
// //#endregion
// router.post("/branch", auth, controllerAdapter(branchControllerInstance, 'create'))


// router.post("/paymentReason", auth, controllerAdapter(paymentReasonControllerInstance, 'create'))
// router.post("/paymentType", auth, controllerAdapter(paymentTypeControllerInstance, 'create'))
// router.post("/phoneType", auth, controllerAdapter(phoneTypeControllerInstance, 'create'))

// router.post("/branch", auth, controllerAdapter(branchControllerInstance, 'update'))
// router.post("/paymentReason", auth, controllerAdapter(paymentReasonControllerInstance, 'update'))
// router.post("/paymentType", auth, controllerAdapter(paymentTypeControllerInstance, 'update'))
// router.post("/phoneType", auth, controllerAdapter(phoneTypeControllerInstance, 'update'))

// router.post("/branch", auth, controllerAdapter(branchControllerInstance, 'delete'))
// router.post("/paymentReason", auth, controllerAdapter(paymentReasonControllerInstance, 'delete'))
// router.post("/paymentType", auth, controllerAdapter(paymentTypeControllerInstance, 'delete'))
// router.post("/phoneType", auth, controllerAdapter(phoneTypeControllerInstance, 'delete'))




// //#region [swagger: /branch - GET]
// /**
//  * @swagger
//  * /branch:
//  *   get:
//  *     tags:
//  *       - references
//  *     summary: Get all branchs
//  *     description: Returns all branchs
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: authorization
//  *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
//  *         in: header
//  *         type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: An array of all branches
//  *       401:
//  *         description: Unauthorized Error
//  *         schema: 
//  *           type: string
//  *           example: "Authentication failed! Try again."    
//  *            
//  */
// //#endregion
// router.get('/branch', auth, controllerAdapter(branchControllerInstance, 'list'))

// //#region [swagger: /paymentReason - GET]
// /**
//  * @swagger
//  * /paymentReason:
//  *   get:
//  *     tags:
//  *       - references
//  *     summary: Get all paymentReasons
//  *     description: Returns all paymentReasons
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: authorization
//  *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
//  *         in: header
//  *         type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: An array of all paymentReasons
//  *       401:
//  *         description: Unauthorized Error
//  *         schema: 
//  *           type: string
//  *           example: "Authentication failed! Try again."    
//  *            
//  */
// //#endregion
// router.get('/paymentReason', auth, controllerAdapter(paymentReasonControllerInstance, 'list'))

// //#region [swagger: /paymentType - GET]
// /**
//  * @swagger
//  * /paymentType:
//  *   get:
//  *     tags:
//  *       - references
//  *     summary: Get all paymentTypes
//  *     description: Returns all paymentTypes
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: authorization
//  *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
//  *         in: header
//  *         type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: An array of all paymentTypes
//  *       401:
//  *         description: Unauthorized Error
//  *         schema: 
//  *           type: string
//  *           example: "Authentication failed! Try again."    
//  *            
//  */
// //#endregion
// router.get('/paymentType', controllerAdapter(paymentTypeControllerInstance, 'list'))

// //#region [swagger: /phoneType - GET]
// /**
//  * @swagger
//  * /phoneType:
//  *   get:
//  *     tags:
//  *       - references
//  *     summary: Get all phoneTypes
//  *     description: Returns all phoneTypes
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: authorization
//  *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
//  *         in: header
//  *         type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: An array of all phoneTypes
//  *       401:
//  *         description: Unauthorized Error
//  *         schema: 
//  *           type: string
//  *           example: "Authentication failed! Try again."    
//  *            
//  */
// //#endregion
// router.get('/phoneType', auth, controllerAdapter(phoneTypeControllerInstance, 'list'))

// module.exports = router;
