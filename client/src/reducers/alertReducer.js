import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// A function that takes in a piece of state involving alerts and an action. The action will get dispatched from the actions file

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  // Dispatch SET_ALERT
  // Return array with the new alert in payload
  // Remove all alerts except for the one that matches the payload
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
