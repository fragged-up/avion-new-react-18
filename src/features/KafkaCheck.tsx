// const TryKafkaRequest = async () => {
//   const userData = {
//     uname: 'itsworking?',
//     ulastname: 'omagod',
//     upass: 213123,
//   };
//   try {
//     const request = await fetch('http://localhost:5001/kafka/sort-filter', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });

//     const responed = await request.json();
//     console.log(responed);
//   } catch (err: any) {
//     console.log('error to send the request', err.message);
//   }
// };

// export default TryKafkaRequest;

// const getItems = async () => {
//   const userData = {
//     uname: 'itsworking?',
//     ulastname: 'omagod',
//     upass: 213123,
//   };
//   try {
//     const request = await fetch('http://localhost:5001/kafka/category', {
//       method: 'GET',
//     });

//     const responed = await request.json();
//     const data = responed.allItems;
//     console.log(data);
//   } catch (err: any) {
//     console.log('error to send the request', err.message);
//   }
// };

// await getItems();
