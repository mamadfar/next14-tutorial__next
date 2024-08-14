'use client' // Error boundaries must be Client Components

const ErrorBoundary = ({error, reset}: {error: Error, reset: () => void}) => {
    return (
        <div>
            <h1>{error.message}</h1>
            <button onClick={reset} className="border">Try again</button>
        </div>
    );
};

export default ErrorBoundary;
