import React from 'react';

const UICredit: React.FC = () => {
  return (
    <footer className="w-full text-center text-sm text-gray-500 py-4">
      <h1>Copyright 2022 Avion LTD</h1>
      UI Design by
      <a
        href="https://www.figma.com/@justux"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-700"
      >
        JustUX
      </a>
      —
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-700"
      >
        Under License CC BY 4.0
      </a>
    </footer>
  );
};

export default UICredit;
