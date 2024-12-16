import React from 'react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-black/60 rounded-lg shadow-lg">
        <h1 className="text-4xl mb-5 uppercase tracking-wide text-yellow-300 drop-shadow-lg">
          Welcome to My Next.js Website
        </h1>
        <p className="text-lg leading-relaxed mb-5 text-white">
          This is the homepage. Explore more about us and what we offer!
        </p>
        <a
          href="/about"
          className="inline-block text-yellow-300 font-bold mx-5 px-5 py-3 border-2 border-yellow-300 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 transform hover:scale-110 mb-5"
        >
          Go to About
        </a>
        <div className="mt-8 flex justify-center gap-5">
          <a
            href="/contact"
            className="inline-block text-yellow-300 font-bold px-6 py-3 border-2 border-yellow-300 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 transform hover:scale-110"
          >
            Contact Us
          </a>
          <a
            href="/services"
            className="inline-block text-yellow-300 font-bold px-6 py-3 border-2 border-yellow-300 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 transform hover:scale-110"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
