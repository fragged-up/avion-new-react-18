import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const getActiveBreakpoint = () => {
  return Object.entries(breakpoints)
    .reverse() // נבדוק מהגדול לקטן
    .find(([_, minWidth]) => window.innerWidth >= minWidth)?.[0] || 'xs';
};

const useTailwindBreakpoint = () => {
  const [activeBreakpoint, setActiveBreakpoint] = useState(getActiveBreakpoint());

  useEffect(() => {
    const onResize = () => {
      setActiveBreakpoint(getActiveBreakpoint());
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return activeBreakpoint;
};

export default useTailwindBreakpoint;

/* Usage In component :  */

/* import useTailwindBreakpoint from '@/hooks/useTailwindBreakpoint';

const MyComponent = () => {
  const activeBreakpoint = useTailwindBreakpoint();

  return <div>הברייקפוינט הפעיל הוא: {activeBreakpoint}</div>;
};
 */