const express = require('express')
const { controllerAdapter, auth, schemaErrorHandler } = require('../../middlewares')
const { checkSchema } = require("express-validator")
const paymentReasonControllerInstance = require('./paymentReasonController')
const validations = require('../validations')

const router = new express.Router()


//#region [swagger: /paymentReason - POST]
/**
 * @swagger
 * path:
 *  /paymentReason:
 *    post:
 *     tags:
 *       - paymentReason
 *     summary: "Add a new paymentReason"
 *     description: 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
 *         in: header
 *         type: string
 *         required: true
 *       - name: receipt 
 *         in: body
 *         description: Create a new paymentReason
 *         required: true
 *         example: {   
 *                  "name": string,
 *                  }
 *         
 *     responses:
 *       201:
 *         description: Successfull response
 *         schema:
 *            type: object
 *            example: {
 *                       "id": ObjectId,
 *                       "code": "201",
 *                       "message": "Created",
 *                       "timestamp": date
 *                      }
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again." 
 *       400: 
 *          description: BAD_REQUEST
 *          schema:
 *            type: string
 *            example: "Something went wrong! Check required inputs!"
 *       500:
 *         description: Error
 *         schema: 
 *           type: string
 *           example: "Could not add paymentReason"            
             
 */
//#endregion
router.post("/", auth, checkSchema(validations.create), schemaErrorHandler(), controllerAdapter(paymentReasonControllerInstance, 'create'))

//#region [swagger: /paymentReason - GET]
/**
 * @swagger
 * /paymentReason:
 *   get:
 *     tags:
 *       - paymentReason
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
 *         description: An array of all paymentReasones
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again."    
 *            
 */
//#endregion
router.get('/', auth, checkSchema(validations.list), schemaErrorHandler(), controllerAdapter(paymentReasonControllerInstance, 'list'))

//#region [swagger: /receipts/{id} - PATCH]
/**
 * @swagger
 * /paymentReason/{id}:
 *   patch:
 *     tags:
 *       - paymentReason
 *     summary: Update a paymentReason
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
 *         in: header
 *         type: string
 *         required: true
 *       - id: id
 *         description: Enter valid ID
 *         name: id
 *         type: string
 *         format: hexadecimal
 *         in: path
 *         required: true
 *      
 *       - name: update body
 *         description: Only paymentReason name can change
 *         in: body
 *         type: object
 *         required: true
 *         example: {                    
 *                	"name": string
 *                  }
 *     responses:
 *       200:
 *         description: Succesfull response
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again." 
 *         
 *       404:
 *         description: paymentReason Not Found
 *         
 *       400:
 *         description: Bad Request
 *         
 */
//#endregion
router.patch("/:id", auth, checkSchema(validations.update), schemaErrorHandler(), controllerAdapter(paymentReasonControllerInstance, 'update'))

//#region [swagger: /customers/{id} - DELETE]
/**
 * @swagger
 * /paymentReason/{id}:
 *   delete:
 *     tags:
 *       - paymentReason
 *     summary: Delete a paymentReason
 *     description: Soft delete a paymentReason. Only sets current date to deletedAt.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Bearer Authentication Token (It will be written as "Bearer + space + idToken" )
 *         in: header
 *         type: string
 *         required: true
 *       - id: id
 *         description: Enter valid ID
 *         name: id
 *         type: string
 *         format: string
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Succesfull response
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again." 
 *       404:
 *         description: paymentReason not found.
 *         
 *       400:
 *         description: Bad Request
 *         
 *
 */
//#endregion
router.delete("/:id", auth, controllerAdapter(paymentReasonControllerInstance, 'delete'))





module.exports = router;
