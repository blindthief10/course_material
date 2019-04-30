import React, { Component } from 'react';
import {connect} from 'react-redux';
import { depositAction, withdrawAction } from './store';

class DepositButton extends Component {
  render() {
    return (
      <button onClick={this.props.deposit}>Make a Deposit of 50 Dollars</button>
    )

  }
}

const mapDepositDispatchToProps = dispatch => {
  return {
    deposit: () => dispatch(depositAction(50))
  }
}

const DepositButtonContainer = connect(null, mapDepositDispatchToProps)(DepositButton);

class WithDrawButton extends Component {
  render() {
    return (
      <button onClick={this.props.withdraw}>Take 50 collars out</button>
    );
  }
}

const mapWithDrawDispatchToProps = dispatch => {
  return {
    withdraw: () => dispatch(withdrawAction(50))
  }
}

const WithDrawButtonContainer = connect(null, mapWithDrawDispatchToProps)(WithDrawButton);

class App extends Component {
  render() {
    return (
      <>
        <h1>{this.props.cashier}</h1>
        <DepositButtonContainer />
        <WithDrawButtonContainer />
      </>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    cashier: state.balance
  }
}

export const AppContainer = connect(mapStateToProps)(App);
