import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="mb-4 font-serif text-4xl font-bold text-primary">Page Not Found</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
      >
        Back to Home
      </Link>
    </div>
  );
}
