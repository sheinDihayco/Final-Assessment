
import React, { useState } from 'react';
import TextField from "@mui/material/TextField";

function SearchFilter({ citizens, onFilter }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = citizens.filter(citizen =>
      citizen.name.toLowerCase().includes(query)
    );

    onFilter(filtered);
  };

  return (
    <div className="search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchFilter;
