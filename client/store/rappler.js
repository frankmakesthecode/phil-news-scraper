import axios from 'axios';

// Action Constants
const SET_RAPPLER = 'SET_RAPPLER';

// Action Creators
const setRappler = (rappler) => {
  return {
    type: SET_RAPPLER,
    rappler,
  };
};

// Thunk Creators
export const fetchRappler = () => async (dispatch) => {
  const { data } = await axios.get('/api/rappler');
  return dispatch(setRappler(data));
};

// Reducer & Initial State
const initialState = [];

export default function (rappler = initialState, action) {
  switch (action.type) {
    case SET_RAPPLER:
      return [...action.rappler];
    default:
      return rappler;
  }
}
