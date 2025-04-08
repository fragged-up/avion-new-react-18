import React, { useState } from 'react';
import SearchBox from './SearchBox';

const data: string[] = ['IKEA', 'HOMES', 'DecoArt', 'GreenLife'];
const MainComponent: React.FC = () => {
  const [filteredData, setFilteredData] = useState<string[]>(data);

  const handleSearch = (term: string) => {
    const filtered = data.filter((item) => item.toLowerCase().includes(term.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Brand list</h1>
      <SearchBox onSearch={handleSearch} />

      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;
