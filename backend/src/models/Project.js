import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import URLSlugs from 'mongoose-url-slugs';

let Schema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'ProjectCategory', required: true },
  summary: { type: String, required: true },
  url: { type: String },
  documentation_repo: { type: String },
  download_url: { type: String },
  tags: [{ type: String }]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

Schema.plugin(mongoosePaginate);
Schema.plugin(URLSlugs('name'));

export default mongoose.model('Project', Schema);
