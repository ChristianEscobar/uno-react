require('es6-promise').polyfill();
require('isomorphic-fetch');

export const actionNames = {
  dealCards: 'DEAL_CARDS',
};

export const dealCards = (dispatch) => {
  const cardsArr = [];

  for(let i = 0; i < 7; i++) {
    cardsArr[i] = 'blue_' + i + '.png';
  }

  console.log(cardsArr);

  dispatch({
    type: actionNames.dealCards,
    payload: cardsArr,
  });
}