'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Register() {
  const router = useRouter();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // const res = await fetch('/api/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // });
    const res = await axios.post('/api/auth/register', { email, password });

    if (res.status === 201) {
      router.push('/home');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-2">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}