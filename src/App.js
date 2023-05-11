import './Components/Movie/Movie.js'
import './Components/Header/Header.js'
import MovieDetails from './Components/MovieDetails/MovieDetails.js'
import './Components/MovieContainer/MovieContainer.js'
import './App.css';
import React, { Component } from 'react';

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
    this.testStuff() 
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
      .catch(err => console.log(err.message ))
  }

  testStuff () {
    return this.fetchCurrentMovie(724495)
  }

  render() {

    return (
      <main> 
        {/* <Header /> */}
        {/* add conditional rendering here <MovieContainer/ > */}

      { this.state && <MovieDetails currentMovie = { this.state.currentMovie } /> }
      </main>
    )
  }

}

export default App;
