import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      mounted: false,
      name: '',
      description: ''
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    })
    this.fetchData();
   };



   fetchData = () => {
    axios.get("http://localhost:5000/api/projects")
    .then(response => {
      this.setState({
        projects: response.data
      })
      console.log(this.state.projects)
    })
    .catch(err => {
      console.log("There was an error fetching posts")
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  addProject = event => {
    event.preventDefault();
    const newProject = {
      name: this.state.name,
      description: this.state.description,
      completed: false
    }

    axios.post(("http://localhost:5000/api/projects"), newProject)
      .then(postSend => {
        this.fetchData();
      })
      .catch(err => {
        console.log("Error sending post")
      })

      this.setState({
        ...this.state,
        name: '',
        description: ''
      })
  }


  render() {
    return (
      <div>
      {this.state.mounted === false ? (
        <div>Fetching....</div>
      ) : (
        <div>
          <div className="banner">
            Projects!
          </div>
          <ul>
            {this.state.projects.map(project => {
              return(
                <li key={project.id} className="card">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      <div className="form">
        <form onSubmit={this.addProject}>
              <input value={this.state.name} onChange={this.handleInputChange} name="name" placeholder="Name" type="text"/>
              <input value={this.state.description} onChange={this.handleInputChange} name="description" placeholder="Description" type="text"/>
              <button type="submit">Submit</button>
          </form>
      </div>
      </div>
    );
  }
}

export default App;
