const express = require('express')
const { controllerAdapter, auth } = require('../middlewares')
const {
  branchControllerInstance,
  paymentReasonControllerInstance,
  paymentTypeControllerInstance,
  phoneTypeControllerInstance
} = require('./index')


const router = new express.Router()
router.post("/branch", controllerAdapter(branchControllerInstance, 'create'))
router.post("/paymentReason", controllerAdapter(paymentReasonControllerInstance, 'create'))
router.post("/paymentType", controllerAdapter(paymentTypeControllerInstance, 'create'))
router.post("/phoneType", controllerAdapter(phoneTypeControllerInstance, 'create'))

router.post("/branch", controllerAdapter(branchControllerInstance, 'update'))
router.post("/paymentReason", controllerAdapter(paymentReasonControllerInstance, 'update'))
router.post("/paymentType", controllerAdapter(paymentTypeControllerInstance, 'update'))
router.post("/phoneType", controllerAdapter(phoneTypeControllerInstance, 'update'))

router.post("/branch", controllerAdapter(branchControllerInstance, 'delete'))
router.post("/paymentReason", controllerAdapter(paymentReasonControllerInstance, 'delete'))
router.post("/paymentType", controllerAdapter(paymentTypeControllerInstance, 'delete'))
router.post("/phoneType", controllerAdapter(phoneTypeControllerInstance, 'delete'))




//#region [swagger: /branch - GET]
/**
 * @swagger
 * /branch:
 *   get:
 *     tags:
 *       - references
 *     summary: Get all branchs
 *     description: Returns all branchs
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
 *         in: header
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: An array of all branches
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again."    
 *            
 */
//#endregion
router.get('/branch', auth, controllerAdapter(branchControllerInstance, 'list'))

//#region [swagger: /paymentReason - GET]
/**
 * @swagger
 * /paymentReason:
 *   get:
 *     tags:
 *       - references
 *     summary: Get all paymentReasons
 *     description: Returns all paymentReasons
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
 *         in: header
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: An array of all paymentReasons
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again."    
 *            
 */
//#endregion
router.get('/paymentReason', auth, controllerAdapter(paymentReasonControllerInstance, 'list'))

//#region [swagger: /paymentType - GET]
/**
 * @swagger
 * /paymentType:
 *   get:
 *     tags:
 *       - references
 *     summary: Get all paymentTypes
 *     description: Returns all paymentTypes
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
 *         in: header
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: An array of all paymentTypes
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again."    
 *            
 */
//#endregion
router.get('/paymentType', controllerAdapter(paymentTypeControllerInstance, 'list'))

//#region [swagger: /phoneType - GET]
/**
 * @swagger
 * /phoneType:
 *   get:
 *     tags:
 *       - references
 *     summary: Get all phoneTypes
 *     description: Returns all phoneTypes
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
 *         in: header
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: An array of all phoneTypes
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again."    
 *            
 */
//#endregion
router.get('/phoneType', auth, controllerAdapter(phoneTypeControllerInstance, 'list'))

module.exports = router;
