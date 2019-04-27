import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.setDone = this.setDone.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
    this.state = {inputVal: '', tasks: [], isDuplicate: false, showErrorLength: false};
  }

  updateValue(event) {
    this.setState({inputVal: event.target.value});
  }

  addTask(event) {
    event.preventDefault();
    const temporary = [...this.state.tasks];

    // check if task is not empty string
    if (!this.state.inputVal.length) {
      this.setState({showErrorLength: true, isDuplicate: false});
      return false;
    }

    // check if task already exists
    if (temporary.includes(this.state.inputVal)) {
      this.setState({isDuplicate: true, showErrorLength: false});
      return false;
    }

    temporary.push(this.state.inputVal);
    this.setState({tasks: temporary, inputVal: '', isDuplicate: false});
  }

  setDone(event) {
    event.target.parentElement.classList.toggle('strike');
  }

  deleteTask(event) {
    const parentOfDeleteButton = event.target.parentElement; // the li element of the clicked button
    const parentText = parentOfDeleteButton.getAttribute('text'); // 'ruby'
    const tempTasks = [...this.state.tasks];
    delete tempTasks[tempTasks.indexOf(parentText)];
    this.setState({tasks: tempTasks});
  }

  removeAlert(event) {
    this.setState({isDuplicate: false, showErrorLength: false});
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addTask}>
          <div className="input-group mb-3 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">Define your task</span>
            </div>
            <input type="text" className="form-control" onChange={this.updateValue} value={this.state.inputVal}/>
            <button type="submit" className="btn btn-lg btn-primary">Add a task</button>
          </div>
        </form>

        {this.state.isDuplicate && <div className="alert alert-danger"><strong>Failure!</strong> Task has been already defined!<button type="button" onClick={this.removeAlert} className="close">&times;</button></div>}
        {this.state.showErrorLength && <div className="alert alert-warning"><strong>Attention!</strong> Write something <button type="button" onClick={this.removeAlert} className="close">&times;</button></div>}
        <div className="container">
          <TransitionGroup component="ul" className="list-group">
          {this.state.tasks.map((taskDescription, index) => {
            return (
              <CSSTransition key={index} timeout={500} classNames="bouncer">
                <React.Fragment>
              {taskDescription && <li text={taskDescription} className="list-group-item">{taskDescription}
                <button onClick={this.setDone} className="btn btn-warning float-right">Set to Done</button>
                <button onClick={this.deleteTask} className="btn btn-danger float-right mx-3">Delete task</button>
              </li>}
                </React.Fragment>
              </CSSTransition>
            )
          })
        }
          </TransitionGroup>
        </div>

      </React.Fragment>
    )
  }
}
