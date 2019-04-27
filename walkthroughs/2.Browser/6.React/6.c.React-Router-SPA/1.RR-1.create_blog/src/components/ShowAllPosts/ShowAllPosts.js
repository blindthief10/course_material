import React, { Component } from 'react';
import SinglePost from '../SinglePost/SinglePost';

export class ShowAllPosts extends Component {

  componentDidMount() {
    this.props.changeSubmit();
  }

  render() {
    return (
      <>
      {this.props.allPosts.map((post, index) => <SinglePost postInfo={post} position={index} key={index} match={this.props.match}/>)}
      </>
    )
  }
}
