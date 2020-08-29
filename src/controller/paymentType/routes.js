const express = require('express')
const { controllerAdapter, auth, schemaErrorHandler } = require('../../middlewares')
const { checkSchema } = require("express-validator")
const paymentTypeControllerInstance = require('./paymentTypeController')
const validations = require('../validations')

const router = new express.Router()


//#region [swagger: /paymentType - POST]
/**
 * @swagger
 * path:
 *  /paymentType:
 *    post:
 *     tags:
 *       - paymentType
 *     summary: "Add a new paymentType"
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
 *         description: Create a new paymentType
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
 *           example: "Could not add paymentType"            
             
 */
//#endregion
router.post("/", auth, checkSchema(validations.create), schemaErrorHandler(), controllerAdapter(paymentTypeControllerInstance, 'create'))

//#region [swagger: /paymentType - GET]
/**
 * @swagger
 * /paymentType:
 *   get:
 *     tags:
 *       - paymentType
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
 *         description: An array of all paymentTypees
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again."    
 *            
 */
//#endregion
router.get('/', auth, checkSchema(validations.list), schemaErrorHandler(), controllerAdapter(paymentTypeControllerInstance, 'list'))

//#region [swagger: /receipts/{id} - PATCH]
/**
 * @swagger
 * /paymentType/{id}:
 *   patch:
 *     tags:
 *       - paymentType
 *     summary: Update a paymentType
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
 *         description: Only paymentType name can change
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
 *         description: paymentType Not Found
 *         
 *       400:
 *         description: Bad Request
 *         
 */
//#endregion
router.patch("/:id", auth, checkSchema(validations.update), schemaErrorHandler(), controllerAdapter(paymentTypeControllerInstance, 'update'))

//#region [swagger: /customers/{id} - DELETE]
/**
 * @swagger
 * /paymentType/{id}:
 *   delete:
 *     tags:
 *       - paymentType
 *     summary: Delete a paymentType
 *     description: Soft delete a paymentType. Only sets current date to deletedAt.
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
 *         description: paymentType not found.
 *         
 *       400:
 *         description: Bad Request
 *         
 *
 */
//#endregion
router.delete("/:id", auth, controllerAdapter(paymentTypeControllerInstance, 'delete'))





module.exports = router;
