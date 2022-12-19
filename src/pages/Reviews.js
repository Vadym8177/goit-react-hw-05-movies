import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=315cc20a868775627c92df79e063ea7f&language=en-US`
    )
      .then(r => r.json())
      .then(data => {
        setMovie(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <ul>
        {movie.length === 0 && <li>We don't have reviews for this movie</li>}
        {movie.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p style={{ fontWeight: 800 }}>Author: {author}</p>
              <p style={{ marginTop: 10, marginBottom: 10 }}>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
