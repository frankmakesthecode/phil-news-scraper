import axios from 'axios';

// Action Constants
const SET_FILTERED_NEWS = 'SET_FILTERED_NEWS';

// Action Creators
const setFilteredNews = (filteredNews) => {
  return {
    type: SET_FILTERED_NEWS,
    filteredNews,
  };
};

// Thunk Creators
export const fetchFilteredNews = (search) => async (dispatch) => {
  const { data } = await axios.get(`/api/news/filtered?search=${search}`);
  return dispatch(setFilteredNews(data));
};

// Reducer & Initial State
const initialState = [];

export default function (filteredNews = initialState, action) {
  switch (action.type) {
    case SET_FILTERED_NEWS:
      return [...action.filteredNews];
    default:
      return filteredNews;
  }
}
