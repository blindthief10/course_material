import React, { Component } from 'react';
import NavList from '../NavList/NavList';
import BlogForm from '../BlogForm/BlogForm';
import Home from '../Home/Home';
import SinglePost from '../SinglePost/SinglePost';
import { ShowAllPosts } from '../ShowAllPosts/ShowAllPosts';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {authorValue: '', blogTitle: '', blogContent: '', allPosts: [], date: undefined, formSubmitted: false};
    this.createPost = this.createPost.bind(this);
    this.changeField = this.changeField.bind(this);
    this.changeSubmitToFalse = this.changeSubmitToFalse.bind(this);
  }

  changeField(event) {
      switch(event.target.getAttribute('identifier')) {
        case 'author':
          this.setState({authorValue: event.target.value});
          break;
        case 'title':
          this.setState({blogTitle: event.target.value});
          break;
        case 'content':
          this.setState({blogContent: event.target.value});
          break;
      }
  }

changeSubmitToFalse() {
  this.setState({formSubmitted: false});
}

  createPost(event) {
    const currentDate = new Date();
    event.preventDefault();
    const tempPosts = [...this.state.allPosts];
    tempPosts.push({blogAuthor: this.state.authorValue,
                    blogTitle: this.state.blogTitle,
                    blogContent: this.state.blogContent,
                    blogDate: currentDate
                  })
    this.setState({allPosts: tempPosts, authorValue: '', blogTitle: '', blogContent: '', date: currentDate, formSubmitted: true});
  }

  render() {
    return (
      <BrowserRouter>
        <>
        <NavList />
        <div className="container">
          <div className="jumbotron">
          <Route exact path="/" component={Home} />
          <Route path="/create" render={ () => {
            return <BlogForm author={this.state.authorValue}
                             title={this.state.blogTitle}
                             content={this.state.blogContent}
                             createPost={this.createPost}
                             updateField={this.changeField}
                    />
          } } />
          <Switch>
            <Route path="/show" render={ ({match}) => <ShowAllPosts changeSubmit={this.changeSubmitToFalse} allPosts={this.state.allPosts} match={match}/>} />
            <Route path="/singlepost/:postid" render={ ({match}) => {
              const selectedPostData = this.state.allPosts[match.params.postid];
              return <SinglePost postInfo={selectedPostData} match={match}/>
            }} />
            {this.state.formSubmitted && <Redirect to="/show" />}
          </Switch>
          </div>
        </div>
        </>
      </BrowserRouter>
    )
  }
}
