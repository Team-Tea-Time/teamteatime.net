import mongoose from 'mongoose';
import bcrypt from 'mongoose-bcrypt';

let Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, bcrypt: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

Schema.plugin(bcrypt, { rounds: 10 });

Schema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now;
  }

  next();
});

Schema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  }
});

export default mongoose.model('User', Schema);
