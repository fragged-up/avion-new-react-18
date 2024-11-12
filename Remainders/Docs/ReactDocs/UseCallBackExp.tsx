import React, { useState, useCallback } from 'react';

// הסבר על שימוש ב-useCallback
const UseCallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);

  // פונקציה מזוכרת (memoized) שמדפיסה הודעה בעת לחיצה על כפתור
  const handleClick = useCallback(() => {
    console.log('Button clicked:', count);
  }, [count]); // הפונקציה תיווצר מחדש רק כאשר הערך של count משתנה

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={handleClick}>Log Count</button>
      <p>
        <strong>הסבר:</strong> הפונקציה handleClick נזכרת מחדש רק כאשר ערך
        ה-count משתנה, מה שמונע יצירת פונקציה חדשה בכל רינדור.
      </p>
    </div>
  );
};

// export default UseCallbackExample;


// *! הסבר איך useCallBack פותר את הבעיה שקומפננטת מתרדנת מחדש 
// *! בדוגמא למטה דוגמא בלי useCallback ופה נראה איך קומפננטה מתרדנת מחדש כל פעם מחדש 
// *! כדי להמחיש מקרה שבו קומפוננטה עוברת רינדור מחדש כל פעם, אפילו אם אין צורך בכך, הנה דוגמה פשוטה ללא שימוש ב-useCallback. כאשר פונקציות מועברות כפרופס לקומפוננטות ילדים מבלי להשתמש ב-useCallback, הן נוצרות מחדש בכל רינדור, מה שיכול לגרום לרינדור מיותר של קומפוננטת הילד.
// *! דוגמה לקומפוננטה ללא useCallback

// import React, { useState } from 'react';

// קומפוננטת כפתור שמדפיסה הודעה כאשר לוחצים עליה
type ButtonProps = {
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click me</button>;
};

// קומפוננטת אב שלא משתמשת ב-useCallback
const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  // פונקציה רגילה שמועברת כפרופס
  const handleClick = () => {
    console.log('Button clicked:', count);
  };

  return (
    <div>
      <h2>Component without useCallback</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Button onClick={handleClick} />
      <p>
        <strong>הסבר:</strong> בכל פעם שהקומפוננטה ParentComponent מתרנדרת מחדש, הפונקציה handleClick נוצרת מחדש, מה שגורם לקומפוננטת הילד Button לעבור רינדור מחדש גם אם התלות לא השתנתה.
      </p>
    </div>
  );
};

// export default ParentComponent;


// *!  מה קורה פה:
// *!  	•	הפונקציה handleClick נוצרת מחדש בכל רינדור של ParentComponent, מכיוון שהיא מוגדרת בתוך הקומפוננטה ללא useCallback.
// *!  	•	כל רינדור מחדש של ParentComponent גורם לכך שהפרופס onClick שמועבר ל-Button מתעדכן, ולכן גם Button עוברת רינדור מחדש, אפילו אם ערך ה-count לא השתנה.

// *!  הסבר:
// *!  כשהפונקציה נוצרת מחדש בכל רינדור, React מזהה אותה כפרופס חדש לקומפוננטת הילד (Button). זה קורה מכיוון שב-JavaScript, פונקציות הן אובייקטים, ולכן הן לא שוות זו לזו (מבחינת השוואת reference) גם אם הן נראות זהות בקוד.
// *!  איך זה נראה עם useCallback:
// *!  אם היינו משתמשים ב-useCallback להחזרת הפונקציה, כמו בדוגמה הבאה:

// איך זה נראה עם useCallback:

// אם היינו משתמשים ב-useCallback להחזרת הפונקציה, כמו בדוגמה הבאה:

// const handleClick = useCallback(() => {
//   console.log('Button clicked:', count);
// }, [count]);

// היינו מונעים רינדור מחדש של Button כאשר ערך count לא משתנה.
