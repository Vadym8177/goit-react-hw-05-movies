import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from '../components/SearchForm';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchData = searchParams.get('searchValue') ?? '';

  useEffect(() => {
    setName(searchData);
    if (name === '') {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=315cc20a868775627c92df79e063ea7f&language=en-US&query=${name}&page=1&include_adult=false`
    )
      .then(r => r.json())
      .then(({ results }) => {
        setMovie(results);
      })
      .catch(error => console.log(error));
  }, [name, searchData]);

  const changeInput = value => {
    setName(value);
    setSearchParams({ searchValue: value });
  };
  return (
    <div>
      <SearchForm onSubmit={changeInput} />
      <ul>
        {movie.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
