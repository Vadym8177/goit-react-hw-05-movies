import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=315cc20a868775627c92df79e063ea7f`
    )
      .then(r => r.json())
      .then(({ results }) => {
        setTrending(results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trending.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
