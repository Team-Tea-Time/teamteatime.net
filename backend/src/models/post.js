import mongoose from 'mongoose';

let Schema = new mongoose.Schema({
  title: { type: String, required: true },
  user_id: { type: String, required: true },
  body: { type: String, required: true },
  tags: [{ type: String }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

Schema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now;
  }

  next();
});

export default mongoose.model('Post', Schema);
