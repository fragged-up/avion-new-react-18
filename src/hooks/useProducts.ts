import { useState, useEffect } from 'react';

type API = {
  filtersMeta: any | any[];
  products: any[] | any;
};

export const useProducts = (url: string) => {
  const [api, setAPI] = useState<API | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!url) {
          setError('URL is required');
          setLoading(false);
          return;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: API = await response.json();
          setAPI(data);
          console.log("data : ",data);
          setLoading(false);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return { api, loading, error };
};
