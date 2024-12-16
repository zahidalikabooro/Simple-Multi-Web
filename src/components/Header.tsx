import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-black/80 px-8 py-4 border-b-2 border-yellow-300 shadow-md sticky top-0 z-50">
      <div className="text-yellow-300 text-2xl font-bold drop-shadow-lg">
        My Next.js Website
      </div>
      <nav className="flex gap-5">
        <Link
          href="/"
          className="text-yellow-300 font-bold text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 shadow hover:shadow-md"
        >
          Home
        </Link>
        <Link
          href="./About"
          className="text-yellow-300 font-bold text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 shadow hover:shadow-md"
        >
          About
        </Link>
        <Link
          href="./Contact"
          className="text-yellow-300 font-bold text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 shadow hover:shadow-md"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
