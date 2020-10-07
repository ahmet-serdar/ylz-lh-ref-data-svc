const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema ({
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

branchSchema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 
const Branch = mongoose.model('Branch', branchSchema)

module.exports = Branch 