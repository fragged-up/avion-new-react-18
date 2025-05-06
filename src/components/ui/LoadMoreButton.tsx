import React from 'react';

interface LoadMoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, disabled, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {loading ? 'Loading more...' : 'Load More'}
    </button>
  );
};

export default LoadMoreButton;
