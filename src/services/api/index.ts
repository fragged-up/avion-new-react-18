export const filterProductsBy = async (caType: string, filters: string) => {
  try {
    const response = await fetch(
      `http://localhost:5001/cat/${caType}/${filters}`,

      {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );

    if (!response.ok) throw new Error('err sending reqeust from productApi');
    const data = await response.json();
    return data.items;
  } catch (err: any) {
    console.log('err in request productApi', err);
  }
};

export type QueryOptions = {
  category?: string;
  limit?: number | string;
  offset?: number | string;
  sortBy?: number | string;
  filterBy?: number | string;
};

export const getProducts = async (queryOptions: QueryOptions) => {
  const { category, limit, offset, sortBy, filterBy } = queryOptions;
  try {
    const res = await fetch(
      `http://localhost:5001/products?${queryOptions.toString()}`
    );
    if (!res.ok) throw new Error('HTTP Err ! fetching products ..');
    const response = await res.json();
    return response.data;
  } catch (err: any) {
    console.log('err fetching init products err : ', err);
    return [];
  }
};
