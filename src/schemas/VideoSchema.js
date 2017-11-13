
import mongoose from '../model/connectiondb';

const videoSchema = new mongoose.Schema({
  url: String,
  rating: Number,
  isIndependent: Number,
});

const Video = mongoose.model('Video', videoSchema);

export default Video;