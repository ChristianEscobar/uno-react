import { actionNames } from './actions';


export const initialState = {
  hand: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // Add action types here
    default:
      return state;
  }
}

export default reducer;