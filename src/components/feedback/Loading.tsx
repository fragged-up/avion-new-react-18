interface LoadingComponentProps {
  message?: string;
}

export const Loading: React.FC<LoadingComponentProps> = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white-500"></div>
      {message && <p className="mt-4 text-white text-lg font-sans">{message}</p>}
    </div>
  );
};


