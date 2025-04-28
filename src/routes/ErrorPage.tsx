import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="flex flex-col justify-center items-center bg-slate-600 h-screen">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-red-600 font-satoshi text-3xl text-center">
          <i className="text-red-600 font-satoshi text-3xl text-center">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
