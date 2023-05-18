import  React, { Component } from 'react'

export class TrailerView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trailerKey: ''
    }
  }

  fetchMovieTrailer = async () => {
    try {
      const movieDetailsResponse = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
      if (!movieDetailsResponse.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const movieDetails = await movieDetailsResponse.json()
      const movieTitle = movieDetails.movie.title
  
      const trailerResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(movieTitle + ' trailer')}&key=AIzaSyDHpUHT27Bo6hfyGlkbROE80bX9Ia3uruw`)
  
      if (!trailerResponse.ok) {
        throw new Error('Failed to fetch movie trailer');
      }
  
      const trailer = await trailerResponse.json()
      const trailerKey = trailer.items[0].id.videoId;
  
      this.setState({ trailerKey: trailerKey }) 
  
    } catch(error) {
      console.error(error);
    }
  }
  

  componentDidMount() {
    this.fetchMovieTrailer()
  }

  render() {
    return (
      <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${this.state.trailerKey}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    )
  }
}