import  React, { Component } from 'react';
import './TrailerView.css';

export class TrailerView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trailerKey: ''
    }
  }

  fetchMovieTrailer = async () => {
    try {
      const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}/videos`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch movie trailer');
      }

      const json = await response.json()
      const trailerKey = json.videos.find(video => video.type === 'Trailer')
      
      this.setState({ trailerKey: trailerKey }) 
    
    } catch(error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.fetchMovieTrailer()
  }

  render() {
    if(!this.state.trailerKey.key) {
      return <>
        <div className="video-container">
          <p className='no-trailer'>Sorry, that movie trailer is not available.</p>
        </div>
      </>
    };

    return (
      <div className="video-container">
        <iframe
          title='Movie trailer'
          className="video-display"
          src={`https://www.youtube.com/embed/${this.state.trailerKey.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }
}