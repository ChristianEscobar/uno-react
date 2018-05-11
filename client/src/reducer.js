import { actionNames } from './actions';


export const initialState = {
  hand: [],
};

const reducer = (state = initialState, action) => {
  console.log("in reducer", action.payload);
  switch(action.type) {
    // Add action types here
    case actionNames.dealCards:
      return Object.assign({}, state, {hand: action.payload});
    default:
      return state;
  }
}

export default reducer;