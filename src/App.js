import './Components/Movie/Movie.js'
import './Components/Header/Header.js'
import './Components/MovieDetails/MovieDetails.js'
import './Components/MovieContainer/MovieContainer.js'
import './App.css';
import React, { Component } from 'react';
import MovieContainer from './Components/MovieContainer/MovieContainer.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: {},
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(data => data.json())
      .then(json => this.setState({ movies: json.movies }))
      .catch(err => this.setState({ error: err.message}))
  }

  render() {
    return (
      <main> 
        {/* <Header /> */}
        <MovieContainer movies={this.state.movies} />
        {/* add conditional rendering here <MovieDetails/ > */}
      </main>
    )
  }

}

export default App;
