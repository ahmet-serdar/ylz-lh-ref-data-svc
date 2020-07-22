const mongoose = require('mongoose')

const paymentTypeSchema = new mongoose.Schema ({
    name: {
      type: String
    }
  
})

paymentTypeSchema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 
const PaymentType = mongoose.model('PaymentType', paymentTypeSchema)

module.exports = PaymentType 