"use client";

export default function Error({ error, reset }) {
    return (
        <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl font-semibold mb-3">Something went wrong</h1>

            <p className="text-base-content/70 max-w-md mb-6">
                {error?.message || "An unexpected error occurred."}
            </p>

            <button className="btn btn-primary" onClick={() => reset()}>
                Try again
            </button>
        </main>
    );
}
