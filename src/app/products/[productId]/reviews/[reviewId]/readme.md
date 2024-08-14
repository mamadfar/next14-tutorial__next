
# Error - reset
- We can pass a reset function to our `ErrorBoundary` component to re-render the component.
- In this case, we need to use `use client` for our component.
- We can use `error.tsx` for each level in nested routes.
- Error in each level will trigger the error boundary in the same level, if it is not handled, it will trigger the error boundary in the parent level.
- Also, the error boundaries will not catch the errors inside `Layouts` and `Templates`.
- 