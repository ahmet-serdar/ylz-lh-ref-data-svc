const mongoose = require('mongoose')

const paymentReasonSchema = new mongoose.Schema ({
    name: {
      type: String
    }
  
})

paymentReasonSchema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 
const PaymentReason = mongoose.model('PaymentReason', paymentReasonSchema)

module.exports = PaymentReason 