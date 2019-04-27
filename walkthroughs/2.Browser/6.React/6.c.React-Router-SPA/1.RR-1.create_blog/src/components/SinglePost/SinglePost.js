import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SinglePost extends Component {
  render() {
    let shownBlog;
    let blogContent = this.props.postInfo.blogContent;

    if (this.props.match.url === '/show') {
      shownBlog = blogContent.length > 50 ? blogContent.substr(0, 50) + '...' : blogContent
    }else {
      shownBlog = blogContent;
    }
    return (
      <div className="card my-2">
        <div className="card-header">
          <h3 className="title text-center">{this.props.postInfo.blogTitle}</h3>
        </div>
        <div className="card-body">
          <p className="lead">{shownBlog} &nbsp;
            {this.props.match.url === '/show' && <NavLink to={"/singlepost/" + this.props.position}>Read the full article</NavLink>}
          </p>
        </div>
        <div className="card-footer">
          <p className="lead"><strong>{this.props.postInfo.blogAuthor} </strong>
           wrote at: {this.props.postInfo.blogDate.getDate()}/{this.props.postInfo.blogDate.getMonth() + 1}/
           {this.props.postInfo.blogDate.getFullYear()} {this.props.postInfo.blogDate.getHours()}:
           {this.props.postInfo.blogDate.getMinutes()}
          </p>
        </div>
      </div>
    )
  }
}
