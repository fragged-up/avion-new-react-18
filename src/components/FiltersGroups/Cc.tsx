import { useEffect, useState } from 'react';

const Cc = () => {
  const [dataResponse, setDataResponse] = useState<
    null | Record<string, any> | any[]
  >(null);

  useEffect(() => {
    const handleData = async () => {
      try {
        const params = new URLSearchParams({
          category: 'plants',
          pagination: '50',
          sortBy: 'hightoLow',
          filterBy: 'colors',
        });
        const url = `http://localhost:5001/products/?${params.toString()}`;
        const response = await fetch(url);

        if (!response.ok) {
          console.error(
            `HTTP Error: ${response.status} ${response.statusText}`,
          );
          return;
        }

        const data = await response.json();
        setDataResponse(data.data);
        console.log('Fetched Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    handleData();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-center text-white text-3xl">CC API</h1>
      <div>
        {dataResponse ? (
          <pre className="text-white bg-gray-800 p-4 rounded">
            {JSON.stringify(dataResponse, null, 2)}
          </pre>
        ) : (
          <p className="text-white">Data is not here yet...</p>
        )}
      </div>
    </div>
  );
};

export default Cc;
