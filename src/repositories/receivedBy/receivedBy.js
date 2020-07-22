const mongoose = require('mongoose')

const receivedBySchema = new mongoose.Schema ({
    name: {
      type: String,
      unique: true
    }
  
})

receivedBySchema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 
const ReceivedBy = mongoose.model('ReceivedBy', receivedBySchema)

module.exports = ReceivedBy 