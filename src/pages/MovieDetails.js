import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Container,
  MovieInfo,
  MovieDetailCard,
  Information,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=315cc20a868775627c92df79e063ea7f&language=en-US`
    )
      .then(r => r.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const { title, release_date, vote_average, poster_path, overview, genres } =
    movie;
  const backLink = location.state?.from ?? '/movies';
  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <MovieDetailCard>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <MovieInfo>User Score: {vote_average.toFixed(1) * 10}%</MovieInfo>
          <h3>Overview</h3>
          <MovieInfo>{overview}</MovieInfo>
          <h4>Genres</h4>
          <MovieInfo>{genres.map(genre => genre.name).join(' ')}</MovieInfo>
        </MovieDetailCard>
      </Container>
      <Information>
        <h5 style={{ fontSize: 24 }}>Additional information</h5>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </Information>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
