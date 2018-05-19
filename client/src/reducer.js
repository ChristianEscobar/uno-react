import { actionNames } from './actions';


export const initialState = {
  hand: [],
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    // Add action types here
    case actionNames.dealCards:
      return Object.assign({}, state, {hand: action.payload});
    default:
      return state;
  }
}

export default reducer;