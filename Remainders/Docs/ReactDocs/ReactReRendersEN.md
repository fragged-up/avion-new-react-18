# When Does React Re-render a Parent Component and Why?

## When Does React Re-render a Parent Component?
1. **State Changes**:
   - Any change in the component's state triggers a re-render. This is because React detects that the data has changed and needs to ensure the UI reflects the updated state.

2. **Props Changes**:
   - If a component receives new props from its parent, it will re-render to adapt its content or behavior to the new data.

3. **New Function References**:
   - When functions are passed as props without using `useCallback`, React treats them as new references on every render. This can lead to unnecessary re-renders of child components.

## When Does React **Not** Re-render a Parent Component?
1. **No Change in State or Props**:
   - If there is no change in the component's state or props, React will not trigger a re-render, as there is no need to update the UI.

2. **Using Memoization**:
   - Using `React.memo`, `useCallback`, or `useMemo` can help React maintain the same reference, preventing unnecessary re-renders and improving performance.
   - **`useCallback`** memorizes the function itself, ensuring that the same function reference is returned unless its dependencies change. This is useful when passing functions as props to child components to avoid re-creating functions on each render.
   - **`useMemo`** memorizes the result of an expensive computation or calculation. It re-computes the value only when its dependencies change, helping avoid recalculations on every render.

## How to Avoid Unnecessary Re-renders?
1. **Use `useCallback`**:
   - To prevent functions from being re-created on every render when passed as props. This ensures child components don't re-render unnecessarily.

2. **Use `React.memo`**:
   - Wrap components that don't need to re-render unless their props change. This helps in optimizing performance by reducing render frequency.

3. **Manage State Wisely**:
   - Keep the state as small and focused as possible to ensure only the required components re-render, rather than the entire component tree.

---

**Summary**: React re-renders components to keep the UI updated with the latest data. To prevent unnecessary re-renders, use techniques like `useCallback`, `useMemo`, and `React.memo` to efficiently manage function and data references within components.