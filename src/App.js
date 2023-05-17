import './Components/Movie/Movie.js'
import Header from './Components/Header/Header.js'
import MovieDetails from './Components/MovieDetails/MovieDetails.js'
import './Components/MovieContainer/MovieContainer.js'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage.js'
import './App.css';
import React, { Component } from 'react';
import MovieContainer from './Components/MovieContainer/MovieContainer.js';
import { cleanAllMoviesData}  from './utilities.js';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
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

  backToHomePage = () => {
    this.setState({ currentMovie: '' })
  }

  render() {
    return (
      <main> 
        <Header currentMovie={this.state.currentMovie} backToHomePage = { this.backToHomePage } />
        <Switch>
          {/* <Route exact path='/error' render={() => <ErrorMessage error={this.state.error} />} /> */}
          <Route exact path='/movies/:id' component={MovieDetails} />
          <Route exact path='/' render={() => <MovieContainer movies={this.state.movies} />} />
        </Switch>
      </main>
    )
  }

}

export default App;
