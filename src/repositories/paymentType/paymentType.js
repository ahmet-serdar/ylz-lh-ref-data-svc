const mongoose = require('mongoose')

const paymentTypeSchema = new mongoose.Schema ({
    name: {
      type: String
    },
    deletedAt: {
      type: Date || null,
      default: null
    },
    deletedBy: {
      type: String,
      default: null
    },
    createdBy: {
      type: String,
      required: true
    }
}, {
  timestamps: true
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