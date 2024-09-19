import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');

  const handleSearch = () => {
    onSearch({ date, location, name });
  };

  return (
    <div className="search-form">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
