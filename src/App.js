import './Components/Movie/Movie.js'
import Header from './Components/Header/Header.js'
import MovieDetails from './Components/MovieDetails/MovieDetails.js'
import './Components/MovieContainer/MovieContainer.js'
import './App.css';
import React, { Component } from 'react';
import MovieContainer from './Components/MovieContainer/MovieContainer.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: '',
      error: ''
    }
  }

  componentDidUpdate = () => {
    console.log(this.state.currentMovie)
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(data => data.json())
      .then(json => this.setState({ movies: json.movies }))
      .catch(err => this.setState({ error: err.message}))
  }

  fetchCurrentMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(data => data.json())
      .then(json => {
        this.setState( { currentMovie: json.movie })
      })
      .catch(err => console.log( err.message ))
  }

  backToHomePage = () => {
    this.setState({ currentMovie: {} })
  }

  render() {
    return (
      <main> 
        <Header currentMovie={this.state.currentMovie} backToHomePage = { this.backToHomePage } />
      { !this.state.currentMovie && <MovieContainer movies={this.state.movies} fetchCurrentMovie = { this.fetchCurrentMovie }/>}
      { this.state.currentMovie && <MovieDetails currentMovie = { this.state.currentMovie } /> }
      </main>
    )
  }

}

export default App;
