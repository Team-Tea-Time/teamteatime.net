import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import URLSlugs from 'mongoose-url-slugs';

let Schema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, ref: 'User', required: true },
  body: { type: String, required: true },
  tags: [{ type: String }]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

Schema.plugin(mongoosePaginate);
Schema.plugin(URLSlugs('title'));

export default mongoose.model('Post', Schema);
