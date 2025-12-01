import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl font-semibold mb-2">Page not found</h1>
            <p className="text-base-content/70 mb-6 max-w-md">
                The page you are looking for does not exist or may have been moved.
            </p>

            <Link
                href="/"
                className="btn btn-primary"
            >
                Go back home
            </Link>
        </main>
    );
}
