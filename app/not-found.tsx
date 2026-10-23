import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container section first-section">
      <h1>Page not found</h1>
      <p className="my-6">The page you’re looking for could not be found.</p>
      <Link href="/" className="underline">
        Return to APFX home
      </Link>
    </main>
  );
}
