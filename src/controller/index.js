const branchRouter= require('./branch/routes')
const paymentReasonRouter = require('./paymentReason/routes')
const paymentTypeRouter = require('./paymentType/routes')
const phoneTypeRouter = require('./phoneType/routes')

module.exports = {
  branchRouter,
  paymentReasonRouter,
  paymentTypeRouter,
  phoneTypeRouter
}