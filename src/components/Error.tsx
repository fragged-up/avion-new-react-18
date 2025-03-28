export const Error = ({ message }: { message: any }) => {
  return (
    <div className="w-full">
      <h1 className="font-sans font-semibold text-3xl text-red-400 text-center">
        Error ...{' '}
      </h1>
      <h2 className="font-sans font-bold text-2xl text-red-500">
        Err Message : {message}
      </h2>
    </div>
  );
};
