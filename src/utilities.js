import dayjs from "dayjs"

export const cleanMovieDetailsData = ({ title, average_rating, poster_path, backdrop_path, release_date, revenue, overview, runtime, budget, genres, tagline }) => {
  return {
      title: title,
      average_rating: ` ${average_rating} / 10`,
      poster_path: poster_path,
      backdrop_path: backdrop_path, 
      release_date: dayjs(release_date).format('MMMM DD, YYYY'),
      revenue: `$${ revenue.toLocaleString() }`,
      overview: overview,
      runtime: `${runtime} minutes` ,
      budget: `$${ budget.toLocaleString() }`,
      genres: genres.join(", "),
      tagline: tagline
  }
}

export const cleanAllMoviesData = (data) => {
  return data.map(movie => {
    return {
    id: movie.id,
    title: movie.title,
    poster_path : movie.poster_path,
    release_date : dayjs(movie.release_date).format('YYYY'),
    average_rating: `${movie.average_rating} / 10`
  }})
}
