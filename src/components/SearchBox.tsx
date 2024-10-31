import React, { useState } from "react";

// הגדרת types עבור הפרופס של הקומפוננטה
interface SearchBoxProps {
  onSearch: (term: string) => void; // פונקציה שמקבלת מחרוזת
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  // ניהול state עבור טקסט החיפוש
  const [searchTerm, setSearchTerm] = useState<string>("");

  // פונקציה לעדכון הטקסט בכל שינוי
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term); // עדכון ה-state
    onSearch(term); // קריאה לפונקציית onSearch עם המונח העדכני
  };

  return (
    <div>
      <input
        type="text"
        placeholder="חפש מותג או מוצר..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ddd",
        }}
      />
    </div>
  );
};

export default SearchBox;
