import axios from 'axios'
const BASE_URL = "https://api.themoviedb.org/3/"
export const API_KEY_PARAM = process.env.REACT_APP_API_KEY
export class TVShowAPI{
  static async fetchPopulars(){
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
    console.log(response.data.results)
    return response.data.results
  }
}