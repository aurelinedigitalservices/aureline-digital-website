import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap py-32 text-center">
      <h1 className="text-6xl md:text-8xl">Page not found</h1>
      <p className="mx-auto mt-6 max-w-md text-lg text-stone">The page you are looking for does not exist or has moved.</p>
      <div className="mt-10 flex justify-center gap-4">
        <Link href="/" className="btn btn-dark">Back to home</Link>
        <Link href="/contact" className="btn btn-line">Contact us</Link>
      </div>
    </section>
  );
}
