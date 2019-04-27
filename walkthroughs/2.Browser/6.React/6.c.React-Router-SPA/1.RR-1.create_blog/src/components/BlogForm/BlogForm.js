import React, { Component } from 'react';

export default class BlogForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.createPost}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Username:</span>
          </div>
          <input identifier="author" onChange={this.props.updateField} type="text" className="form-control" value={this.props.author}/>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-append">
            <span className="input-group-text">Title:</span>
          </div>
          <input identifier="title" onChange={this.props.updateField} type="text" className="form-control" value={this.props.title}/>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-append">
            <span className="input-group-text">Content:</span>
          </div>
          <textarea identifier="content" onChange={this.props.updateField} className="form-control" value={this.props.content}></textarea>
        </div>

        <button type="submit" className="btn btn-success">Create a post</button>
      </form>
    )
  }
}
