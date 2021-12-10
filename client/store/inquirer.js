import axios from 'axios';

// Action Constants
const SET_INQUIRER = 'SET_INQUIRER';

// Action Creators
const setInquirer = (inquirer) => {
  return {
    type: SET_INQUIRER,
    inquirer,
  };
};

// Thunk Creators
export const fetchInquirer = () => async (dispatch) => {
  const { data } = await axios.get('/api/inquirer');
  return dispatch(setInquirer(data));
};

// Reducer & Initial State
const initialState = [];

export default function (inquirer = initialState, action) {
  switch (action.type) {
    case SET_INQUIRER:
      return [...action.inquirer];
    default:
      return inquirer;
  }
}
