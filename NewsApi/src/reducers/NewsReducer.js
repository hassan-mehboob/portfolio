import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
} from '../constants/NewsConstants'

export const newsListReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { loading: true, data: [] }
    case FETCH_NEWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      }
    case FETCH_NEWS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
