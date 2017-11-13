import Video from '../schemas/VideoSchema';

export const getVideoRating = (url) => {
  var query = Video.find({ url: url });
  return query
}