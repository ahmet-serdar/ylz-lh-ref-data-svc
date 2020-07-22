const branchControllerInstance = require('./branch/branchController')
const paymentReasonControllerInstance = require('./paymentReason/paymentReasonController')
const paymentTypeControllerInstance = require('./paymentType/paymentTypeController')
const phoneTypeControllerInstance = require('./phoneType/phoneTypeController')
const receivedByControllerInstance = require('./receivedBy/receivedByController')

module.exports = {
  branchControllerInstance,
  paymentReasonControllerInstance,
  paymentTypeControllerInstance,
  phoneTypeControllerInstance,
  receivedByControllerInstance
}