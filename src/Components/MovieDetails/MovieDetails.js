import React, { Component } from 'react';
import './MovieDetails.css';
import PropTypes from 'prop-types';
import { cleanMovieDetailsData }  from '../../utilities.js';
import  { NavLink, Redirect } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: {},
      error: false,
    };
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchMovieDetails();
    }
  }

  fetchMovieDetails = async () => {
    try {
      const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.match.params.id}`)
      const json = await response.json()
      if (response.status !== 200) {
        this.setState({ error: true }) 
      }
      this.setState({ currentMovie: cleanMovieDetailsData(json.movie) })

    } catch {
      console.log(Error)
    }
  }

  render() {
    const { currentMovie } = this.state;

    if (this.state.error) {
      return <Redirect to='/*' />
    }

    const { id, title, average_rating, poster_path, backdrop_path, release_date, revenue, overview, runtime, budget, genres, tagline } = currentMovie;

    return (
      <section className='individual-container'>
      <section className='background' style = {{ 'backgroundImage': `url(${backdrop_path})` }} >
        <div className='body-container'>
          <div className='poster'>
            <img src={`${poster_path}`} alt='Movie poster' />
          </div>
          <div className='info-container'>
            <h2>{ title }</h2>
            <h4>{ tagline }</h4>
            <p>{ overview }</p>
            <ul>
              <li>Average Rating: { average_rating }</li>
              <li>Release Date: { release_date }</li>
              <li>Runtime: { runtime }</li>
              <li>Revenue: { revenue }</li>
              <li>Budget: { budget }</li>
              <li>Genre: { genres }</li>
            </ul>
            <NavLink to={`/movies/${id}/trailer`}
                style={{ textDecoration: 'inherit'}}
                className='button-trailer'>Watch Trailer!</NavLink>
          </div>
        </div>
      </section>
    </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieDetails;
