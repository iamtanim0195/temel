"use client";

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body className="min-h-screen flex items-center justify-center text-center px-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">
                        A critical application error occurred
                    </h2>

                    <p className="text-base-content/70 mb-6">
                        {error?.message}
                    </p>

                    <button className="btn btn-primary" onClick={() => reset()}>
                        Reload
                    </button>
                </div>
            </body>
        </html>
    );
}
