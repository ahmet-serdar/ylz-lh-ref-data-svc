const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema ({
    name: {
      type: String
    }
  
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