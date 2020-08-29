const express = require('express')
const { controllerAdapter, auth, schemaErrorHandler } = require('../../middlewares')
const { checkSchema } = require("express-validator")
const phoneTypeControllerInstance = require('./phoneTypeController')
const validations = require('../validations')

const router = new express.Router()


//#region [swagger: /phoneType - POST]
/**
 * @swagger
 * path:
 *  /phoneType:
 *    post:
 *     tags:
 *       - phoneType
 *     summary: "Add a new phoneType"
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
 *         description: Create a new phoneType
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
 *           example: "Could not add phoneType"            
             
 */
//#endregion
router.post("/", auth, checkSchema(validations.create), schemaErrorHandler(), controllerAdapter(phoneTypeControllerInstance, 'create'))

//#region [swagger: /phoneType - GET]
/**
 * @swagger
 * /phoneType:
 *   get:
 *     tags:
 *       - phoneType
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
 *         description: An array of all phoneTypees
 *       401:
 *         description: Unauthorized Error
 *         schema: 
 *           type: string
 *           example: "Authentication failed! Try again."    
 *            
 */
//#endregion
router.get('/', auth, checkSchema(validations.list), schemaErrorHandler(), controllerAdapter(phoneTypeControllerInstance, 'list'))

//#region [swagger: /receipts/{id} - PATCH]
/**
 * @swagger
 * /phoneType/{id}:
 *   patch:
 *     tags:
 *       - phoneType
 *     summary: Update a phoneType
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
 *         description: Only phoneType name can change
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
 *         description: phoneType Not Found
 *         
 *       400:
 *         description: Bad Request
 *         
 */
//#endregion
router.patch("/:id", auth, checkSchema(validations.update), schemaErrorHandler(), controllerAdapter(phoneTypeControllerInstance, 'update'))

//#region [swagger: /customers/{id} - DELETE]
/**
 * @swagger
 * /phoneType/{id}:
 *   delete:
 *     tags:
 *       - phoneType
 *     summary: Delete a phoneType
 *     description: Soft delete a phoneType. Only sets current date to deletedAt.
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
 *         description: phoneType not found.
 *         
 *       400:
 *         description: Bad Request
 *         
 *
 */
//#endregion
router.delete("/:id", auth, controllerAdapter(phoneTypeControllerInstance, 'delete'))





module.exports = router;
