import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch } from '@/features/store';
import filterThunk from '@/features/filters/thunk';

const ApiCheck = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: any) => state.filters);
  const { status, data, error } = useSelector((state: any) => state.filters);

  console.log('state :', state);

  useEffect(() => {
    dispatch(filterThunk());
  }, [dispatch]);
  if (status === 'loading') return <div>Loading ...</div>;
  if (data === 'succeeded') return <div>data : {JSON.stringify(data)}</div>;
  if (error === 'error') return <div>Error : {JSON.stringify(error)}</div>;
  return (
    <div className="container">
      <h1>ApiCheck</h1>
      <p>This is the ApiCheck page.</p>

      {data && (
        <div>
          <p>data is with us boy </p>
          <p> data : ${JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
};

export default ApiCheck;
