import Video from '../schemas/VideoSchema'

export const addRating = (url, rating, isIndependent) => {
  var video = new Video({ url: url, rating: rating, isIndependent: isIndependent });
  video.save(function (err) {
    if (err) {
      return err
    } else {
      return 0
    }
  });
}
