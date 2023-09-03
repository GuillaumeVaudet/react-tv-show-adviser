import { API_KEY_PARAM, BACKDROP_BASE_URL, BASE_URL } from '../config'
import axios from 'axios'
export class TVShowAPI{
  static async fetchPopulars(){
    const response = await axios.get(`${BASE_URL}tv/popular?api_key=${API_KEY_PARAM}`)
    return response.data.results
  }
  static async fetchRecommendations(tvShowId){
    const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations?api_key=${API_KEY_PARAM}`)
    return response.data.results
  }
  static async fetchByTitle(title){
    const response = await axios.get(`${BASE_URL}search/tv?api_key=${API_KEY_PARAM}&query=${title}`)
    return response.data.results
  }

}