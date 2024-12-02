import { useState } from 'react';

const ChooseCat = () => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [dataRes, setDataRes] = useState<null | any | {} | any[] | string>(
    null,
  );

  const options = [
    { opt: 'ceramics' },
    { opt: 'chairs' },
    { opt: 'plants' },
    { opt: 'lights' },
    { opt: 'tables' },
  ];

  const onClickHandler = async (option: any) => {
    if (!option) return;
    try {
      const queryParam = new URLSearchParams({ option }).toString();
      const req = await fetch(`http://localhost:5001/exp?${queryParam}`);
      if (!req.ok) throw new Error('Http Error in Repsonse..');
      const response = await req.json();
      const data = response.data;
      if (data) {
        setDataRes(data);
      }
    } catch (err: any) {
      console.log('err in fetch options ...', err);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center py-14 bg-slate-400">
        <h2 onClick={() => setOpenSelect(!openSelect)}>Choose Category</h2>
        {openSelect && (
          <ul className="w-[220px] h-[140px]  mt-8 flex justify-center items-center flex-col">
            {options.map((option: any, index: number) => (
              <li
                key={index}
                // onChange={() => }
                onClick={() => onClickHandler(option.opt)}
                className="px-2 py-1 text-white hover:bg-slate-500"
              >
                {option.opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChooseCat;

// const options = [
//   { opt: 'ceramics' },
//   { opt: 'chairs' },
//   { opt: 'plants' },
//   { opt: 'lights' },
//   { opt: 'tables' },
// ];

// const onClickHandler = async (option: any) => {
//   if (!option) return;

//   try {
//     const queryParam = new URLSearchParams({ option }).toString();
//     const req = await fetch(`http://localhost:5001/exp?${queryParam}`);
//     if (!req.ok) throw new Error('Http Error in Repsonse..');
//     const response = await req.json();
//     const data = response.data;
//     if (data) {
//       setDataRes(data);
//     }
//   } catch (err: any) {
//     console.log('err in fetch options ...', err);
//   }
// };
