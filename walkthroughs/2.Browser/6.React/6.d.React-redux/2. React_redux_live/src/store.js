import { createStore } from 'redux';
const initialState = { balance: 0 };

const reducer = (state = initialState, action) => {

  const updatedState = {...state};

  switch(action.type) {
    case 'DEPOSIT':
      updatedState.balance = state.balance + action.amount;
      return updatedState;
    case 'WITHDRAW':
      if (updatedState.balance < action.amount) {
        console.log('The operation is not possible because there are not so much money in the balance');
        return state;
      }
      updatedState.balance = state.balance - action.amount;
      return updatedState;
    default:
      return state;
  }
}
export const store = createStore(reducer);

export const depositAction = money => { return { type: 'DEPOSIT', amount: money } }
export const withdrawAction = money => { return {type: 'WITHDRAW', amount: money} }
