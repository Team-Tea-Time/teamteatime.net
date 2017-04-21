import mongoose from 'mongoose';

let Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', Schema);
