import mongoose from 'mongoose';
import bcrypt from 'mongoose-bcrypt';

let Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, bcrypt: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

Schema.plugin(bcrypt, { rounds: 10 });

Schema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  }
});

export default mongoose.model('User', Schema);
