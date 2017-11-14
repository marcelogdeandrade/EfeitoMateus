import { create } from 'apisauce'

const api = create({
  baseURL: 'https://efeito-mateus.herokuapp.com/',
  headers: { 'Accept': 'application/vnd.github.v3+json' }
})


export const addRating = async (url, rating, isIndependent) => {
  return api
    .post('/addrating', { url: url, rating: rating, isIndependent: isIndependent})
    .then((response) => response)
}

export const getVideoRating = async (url) => {
  return api
    .get('/getrating', { url: url })
    .then((response) => response)
}