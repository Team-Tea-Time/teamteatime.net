import mongoose from 'mongoose';

let Schema = new mongoose.Schema({
  name: { type: String, required: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

export default mongoose.model('ProjectCategory', Schema);
