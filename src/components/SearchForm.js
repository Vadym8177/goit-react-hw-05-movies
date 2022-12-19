import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const inputChange = e => {
    setName(e.target.value.toLowerCase());
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('введите хоть что-то');
      return;
    }
    onSubmit(name);
    setName('');
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={name} onChange={inputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
