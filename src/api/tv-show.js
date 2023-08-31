import { API_KEY_PARAM, BACKDROP_BASE_URL, BASE_URL } from '../config'
import axios from 'axios'
export class TVShowAPI{
  static async fetchPopulars(){
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
    return response.data.results
  }
}