import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

export default class Logout extends Component {

  constructor(props) {
    super(props);
    this.state = {isRedirectSet: false};
  }

  componentDidMount() {
    setTimeout(() => this.setState({isRedirectSet: true}), 5000);
  }

  componentWillUnmount() {
    this.props.resetFields();
  }

  render() {
    return (
      <>
      <div className="container my-4">
        <div className="jumbotron">
          <h2 className="title">You just logged out! In 5 secs you will be redirected to home page!</h2>
          <p className="lead">If not click <NavLink to="/">here</NavLink></p>
        </div>
      </div>
      {this.state.isRedirectSet && <Redirect to="/" />}
      </>
    )
  }
}
