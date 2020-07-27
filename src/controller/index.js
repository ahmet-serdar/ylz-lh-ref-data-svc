const branchControllerInstance = require('./branch/branchController')
const paymentReasonControllerInstance = require('./paymentReason/paymentReasonController')
const paymentTypeControllerInstance = require('./paymentType/paymentTypeController')
const phoneTypeControllerInstance = require('./phoneType/phoneTypeController')

module.exports = {
  branchControllerInstance,
  paymentReasonControllerInstance,
  paymentTypeControllerInstance,
  phoneTypeControllerInstance
}