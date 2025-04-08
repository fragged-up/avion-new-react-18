import React, { useState } from 'react';

interface SearchBoxProps {
  onSearch: (term: string) => void;
}
const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search for brand or product .."
        value={searchTerm}
        onChange={handleChange}
        style={{
          padding: '10px',
          width: '100%',
          borderRadius: '5px',
          border: '1px solid #ddd',
        }}
      />
    </div>
  );
};

export default SearchBox;
