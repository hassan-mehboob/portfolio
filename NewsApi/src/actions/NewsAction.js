import axios from 'axios'
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
} from '../constants/NewsConstants'

export const fetchNews = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_NEWS_REQUEST })
    const { data } = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4d1329cc3b8e46019024a327c42ee61d'
    )
    dispatch({
      type: FETCH_NEWS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: FETCH_NEWS_FAIL, payload: `Fail to fetch news ${error}` })
  }
}
