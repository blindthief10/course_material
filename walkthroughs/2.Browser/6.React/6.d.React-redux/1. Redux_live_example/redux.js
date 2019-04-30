const redux = require('redux');

const withdrawMoney = moneyToDeduct => {
  return { type: 'WITHDRAW', amount: moneyToDeduct };
}

const depositMoney = moneyToDeposit => {
  return { type: 'DEPOSIT', amount: moneyToDeposit };
}

const initialState = {totalBalance: 0}

const reducer = (state = initialState, action) => {

  const currentState = {...state};

  switch(action.type) {
    case 'DEPOSIT':
      currentState.totalBalance = state.totalBalance + action.amount;
      return currentState;
    case 'WITHDRAW':
      if (state.totalBalance < action.amount) {
        console.log('The operation is not possible because there are not so much money in the balance');
        return state;
      }
      currentState.totalBalance = state.totalBalance - action.amount;
      return currentState;
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(depositMoney(100));
store.dispatch(withdrawMoney(50));
store.dispatch(withdrawMoney(100));
