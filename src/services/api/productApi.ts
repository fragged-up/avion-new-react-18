export const filterProductsBy = async (caType: string, filters: string) => {
  try {
    const response = await fetch(
      `http://localhost:5001/cat/${caType}/${filters}`,

      {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
        },
      },
    );

    if (!response.ok) throw new Error('err sending reqeust from productApi');
    const data = await response.json();
    return data.items;
  } catch (err: any) {
    console.log('err in request productApi', err);
  }
};
// headers: {
//   'Accept-Encoding': 'gzip, deflate, br', // Requests compression
// },

// headers: {
//   'x-no-compression': 'true', // Custom header to signal no compression
//   // Note: The browser might still include 'Accept-Encoding' automatically
// },
