import './Components/Movie/Movie.js'
import Header from './Components/Header/Header.js'
import MovieDetails from './Components/MovieDetails/MovieDetails.js'
import './Components/MovieContainer/MovieContainer.js'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage.js'
import './App.css';
import React, { Component } from 'react';
import MovieContainer from './Components/MovieContainer/MovieContainer.js';
import { cleanMovieDetailsData, cleanAllMoviesData}  from './utilities.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: '',
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')

      if (!response.ok && response.status >= 500) {
        throw Error('Server error');
      }

      const json = await response.json()
      this.setState({ movies: cleanAllMoviesData(json.movies) })

    } catch(err) {
      this.setState({ error: err.message})
    }
  }


  fetchCurrentMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(data => data.json())
      .then(json => {
        this.setState( { currentMovie: cleanMovieDetailsData(json.movie) })
      })
      .catch(err => console.log( err.message ))
  }

  backToHomePage = () => {
    this.setState({ currentMovie: '' })
  }

  render() {
    return (
      <main> 
        <Header currentMovie={this.state.currentMovie} backToHomePage = { this.backToHomePage } />
        { this.state.error && <ErrorMessage error={this.state.error} /> }
        { (!this.state.currentMovie && !this.state.error) && <MovieContainer movies={this.state.movies} fetchCurrentMovie = { this.fetchCurrentMovie }/>}
        { (this.state.currentMovie && !this.state.error) && <MovieDetails currentMovie = { this.state.currentMovie } /> }
      </main>
    )
  }

}

export default App;
