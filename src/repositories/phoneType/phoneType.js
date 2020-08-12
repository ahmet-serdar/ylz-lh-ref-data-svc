const mongoose = require('mongoose')

const phoneTypeSchema = new mongoose.Schema ({
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
    }
  
})

phoneTypeSchema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 
const PhoneType = mongoose.model('PhoneType', phoneTypeSchema)

module.exports = PhoneType 