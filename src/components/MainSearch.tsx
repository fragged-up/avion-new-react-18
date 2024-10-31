import React, { useState } from "react";
import SearchBox from "./SearchBox";

// הגדרת טיפוס הנתונים עבור המותגים
const data: string[] = ["IKEA", "HOMES", "DecoArt", "GreenLife"];

const MainComponent: React.FC = () => {
  const [filteredData, setFilteredData] = useState<string[]>(data);

  // פונקציית החיפוש שמופעלת מ-SearchBox
  const handleSearch = (term: string) => {
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>רשימת מותגים</h1>
      <SearchBox onSearch={handleSearch} />

      {/* הצגת תוצאות */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;
