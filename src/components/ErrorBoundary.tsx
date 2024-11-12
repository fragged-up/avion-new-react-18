import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import React from 'react';

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div
      className='m-auto flex h-[900px] flex-col items-center justify-center gap-10 bg-blue-500'
      role='alert'
    >
      <h2 className='font-satoshi text-[2rem] font-medium text-red-300'>
        Ops! Something went wrong:
      </h2>
      <div className='flex flex-col gap-2'>
        <p className='text-center font-satoshi text-[3rem] font-medium tracking-wide text-yellow-100'>
          My Error :
        </p>
        <div className='bg-red-500 py-12'>
          <pre className='font-satoshi text-[3rem] font-medium tracking-wide text-yellow-300'>
            {error.message}
          </pre>
        </div>
      </div>
      <button
        className='mx-auto rounded-2xl bg-slate-400 px-24 py-6 text-slate-200 shadow-lg hover:bg-slate-500'
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here if needed
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
