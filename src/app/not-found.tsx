import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="mb-8">
          <h1 className="text-6xl font-teko font-bold">404</h1>
          <h2 className="text-4xl">Page Not Found</h2>
          <p>
            The page you are looking for does not exist. You will be redirected
            to the homepage in 5 seconds.
          </p>
        </div>
        <Link href="/" className="bg-black text-white p-4">
          Go back to the homepage
        </Link>
      </div>
    </>
  );
}
