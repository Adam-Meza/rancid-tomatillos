import React from "react";
import './MovieDetails.css'
import PropTypes from 'prop-types'

function MovieDetails(props) {
  console.log(props)
    const { title, average_rating, poster_path, backdrop_path, release_date, revenue, overview, runtime, budget, genres, tagline } = props.currentMovie
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
            </div>
          </div>
        </section>
      </section>
    )
}

export default MovieDetails

MovieDetails.propTypes = {
  currentMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired, 
    release_date: PropTypes.string.isRequired,
    revenue: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    genres: PropTypes.string,
    tagline: PropTypes.string.isRequired
  }).isRequired
}