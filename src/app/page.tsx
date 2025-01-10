import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Landing Page</h1>
      <Link
        href="/login"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </Link>
    </div>
  );
}