import React from "react";
import './MovieDetails.css'


function MovieDetails(props) {
  if (props.currentMovie) {
    const { title, average_rating, backdrop_path, release_date, revenue, overview, runtime, budget, genres, tagline } = props.currentMovie
    console.log(props.currentMovie)

    return (
      <div>
        <section className='background' style = {{ 'backgroundImage': `url(${backdrop_path})` }} >
          <img/>
          <div>
            <ul>
              <li>{ title }</li>
              <li>{ average_rating }</li>
              <li>{ release_date }</li>
              <li>{ revenue }</li>
              <li>{ overview }</li>
              <li>{ runtime }</li>
              <li>{ budget }</li>
              <li>{ genres }</li>
              <li>{ tagline }</li>

            </ul>
          </div>
        </section>
      </div>
    )

  }




}



export default MovieDetails