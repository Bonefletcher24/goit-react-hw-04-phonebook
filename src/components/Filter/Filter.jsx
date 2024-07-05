import React, { useState } from 'react';
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
    setFilter(newValue);
  };

  return (
    <label className={css.FilterLabel}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={css.FilterInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};