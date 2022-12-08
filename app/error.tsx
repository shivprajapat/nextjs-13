'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error);
  // }, [error]);

  return (
    <div className='bg-info position-absolute top-5 end-0 p-3' style={{width:"300px"}}>
      <p>Something went wrong! {error.message}</p>
      <button onClick={() => reset()} className='btn btn-danger'>Reset error boundary</button>
    </div>

  );
}