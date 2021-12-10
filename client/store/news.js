import axios from 'axios';

// Action Constants
const SET_NEWS = 'SET_ALL_NEWS';

// Action Creators
const setNews = (news) => {
  return {
    type: SET_NEWS,
    news,
  };
};

// Thunk Creators
export const fetchNews = () => async (dispatch) => {
  const { data } = await axios.get('/api/news');
  return dispatch(setNews(data));
};

// Reducer & Initial State
const initialState = [];

export default function (news = initialState, action) {
  switch (action.type) {
    case SET_NEWS:
      return [...action.news];
    default:
      return news;
  }
}
