import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=315cc20a868775627c92df79e063ea7f&language=en-US`
    )
      .then(r => r.json())
      .then(({ cast }) => {
        setMovie(cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <ul>
        {movie.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path &&
                  `https://image.tmdb.org/t/p/w200/${profile_path}`
                }
                alt={name}
              />
              <p style={{ marginTop: 10, marginBottom: 10 }}>{name}</p>
              <p style={{ marginBottom: 10 }}>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
