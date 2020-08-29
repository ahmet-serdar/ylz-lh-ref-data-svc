const express = require('express')
const { controllerAdapter, auth, schemaErrorHandler } = require('../../middlewares')
const { checkSchema } = require("express-validator")
const branchControllerInstance = require('./branchController')
const validations = require('../validations')

const router = new express.Router()


//#region [swagger: /branch - POST]
/**
 * @swagger
 * path:
 *  /branch:
 *    post:
 *     tags:
 *       - branch
 *     summary: "Add a new branch"
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
 *         description: Create a new branch
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
 *           example: "Could not add branch"            
             
 */
//#endregion
router.post("/", auth, checkSchema(validations.create), schemaErrorHandler(), controllerAdapter(branchControllerInstance, 'create'))

//#region [swagger: /branch - GET]
/**
 * @swagger
 * /branch:
 *   get:
 *     tags:
 *       - branch
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
router.get('/', auth, checkSchema(validations.list), schemaErrorHandler(), controllerAdapter(branchControllerInstance, 'list'))

//#region [swagger: /receipts/{id} - PATCH]
/**
 * @swagger
 * /branch/{id}:
 *   patch:
 *     tags:
 *       - branch
 *     summary: Update a branch
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
 *         description: Only branch name can change
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
 *         description: Branch Not Found
 *         
 *       400:
 *         description: Bad Request
 *         
 */
//#endregion
router.patch("/:id", auth, checkSchema(validations.update), schemaErrorHandler(), controllerAdapter(branchControllerInstance, 'update'))

//#region [swagger: /customers/{id} - DELETE]
/**
 * @swagger
 * /branch/{id}:
 *   delete:
 *     tags:
 *       - branch
 *     summary: Delete a branch
 *     description: Soft delete a branch. Only sets current date to deletedAt.
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
 *         description: Branch not found.
 *         
 *       400:
 *         description: Bad Request
 *         
 *
 */
//#endregion
router.delete("/:id", auth, controllerAdapter(branchControllerInstance, 'delete'))





module.exports = router;
