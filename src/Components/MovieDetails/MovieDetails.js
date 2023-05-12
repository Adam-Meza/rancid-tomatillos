import React from "react";
import './MovieDetails.css'


function MovieDetails(props) {
  if (props.currentMovie) {
    const { title, average_rating, poster_path, backdrop_path, release_date, revenue, overview, runtime, budget, genres, tagline } = props.currentMovie
    console.log(props.currentMovie)

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
                <li>Revenue: { revenue }</li>
                <li>Runtime: { runtime } minutes</li>
                <li>Budget: { budget }</li>
                <li>Genre: { genres }</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    )
  }




}



export default MovieDetails