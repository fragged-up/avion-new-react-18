import React, { useState, useMemo } from 'react';

// הסבר על שימוש ב-useMemo
const UseMemoExample: React.FC = () => {
  const [number, setNumber] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  // חישוב יקר שמזוכר (memoized) כדי למנוע חישוב מחדש בכל רינדור
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return number * multiplier;
  }, [number, multiplier]); // החישוב יתבצע מחדש רק אם number או multiplier משתנים

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Number: {number}</p>
      <p>Multiplier: {multiplier}</p>
      <p>Result (Memoized): {expensiveCalculation}</p>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>Increase Multiplier</button>
      <p>
        <strong>הסבר:</strong> החישוב היקר מתבצע מחדש רק כאשר ערכי number או multiplier משתנים, מה שמונע ביצוע חישוב מיותר ומשפר את הביצועים.
      </p>
    </div>
  );
};

// export default UseMemoExample;


// *! הסבר איך useMemo פותר את הבעיה של חישובים יקרים ורינדור מחדש של קומפוננטה:
// *! בדוגמה למטה תוצג קומפוננטה ללא שימוש ב-useMemo שבה כל רינדור גורם לחישוב מחדש של ערכים גם אם אין שינוי בתלויות.
// *! דוגמה לקומפוננטה ללא useMemo:

// import React, { useState } from 'react';

const NoMemoExample: React.FC = () => {
  const [number, setNumber] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  // חישוב יקר שמתבצע בכל רינדור
  const expensiveCalculation = () => {
    console.log('Calculating...');
    return number * multiplier;
  };

  return (
    <div>
      <h2>Component without useMemo</h2>
      <p>Number: {number}</p>
      <p>Multiplier: {multiplier}</p>
      <p>Result (Without Memo): {expensiveCalculation()}</p>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>Increase Multiplier</button>
      <p>
        <strong>הסבר:</strong> בכל רינדור של הקומפוננטה, החישוב היקר מתבצע מחדש גם אם אין שינוי בערכי number או multiplier, מה שעלול להוביל לביצועים ירודים.
      </p>
    </div>
  );
};

// export default NoMemoExample;


// *! מה קורה פה:
// *!   • החישוב expensiveCalculation מתבצע מחדש בכל רינדור של הקומפוננטה, מכיוון שהוא מוגדר כפונקציה רגילה שנקראת בכל רינדור.
// *!   • זה מוביל לביצועים ירודים כשיש חישובים יקרים או מורכבים שאינם חייבים להתבצע מחדש.

// *! הסבר:
// *!  כאשר חישוב מתבצע בכל רינדור ללא צורך, React נאלץ לבצע עבודה מיותרת שיכולה לפגוע בביצועים, במיוחד אם מדובר בחישוב כבד. שימוש ב-useMemo מאפשר לשמור את תוצאת החישוב בזיכרון כך שתחושב מחדש רק כאשר התלויות משתנות.

// *! איך זה נראה עם useMemo:
// *! אם היינו משתמשים ב-useMemo להחזרת תוצאת החישוב, כך:

// const expensiveCalculation = useMemo(() => {
//   console.log('Calculating...');
//   return number * multiplier;
// }, [number, multiplier]);

// היינו מונעים חישובים מיותרים בכל רינדור כאשר התלויות לא משתנות.





// *! הסבר קצר:

// *!	•	UseMemoExample.tsx: מציג כיצד להשתמש ב-useMemo כדי לשמור תוצאה של חישוב יקר ולמנוע חישובים מיותרים.
	// *!•	NoMemoExample.tsx: מציג קומפוננטה ללא שימוש ב-useMemo, שמדגימה כיצד חישוב מתבצע מחדש בכל רינדור גם אם אין שינוי בתלויות, מה שעלול להוביל לביצועים ירודים.

// *! שני הקבצים הללו עוזרים להמחיש את היתרונות של useMemo ומדוע כדאי להשתמש בו במקרים של חישובים יקרים.