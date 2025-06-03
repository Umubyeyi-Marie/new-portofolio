import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-900 text-purple-100">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl italic">Hi, I'm Umubyeyi Marie Bienvenue.</h1>
          <p className="mt-6 text-xl">
            I am a frontend developer. Welcome to my portfolio — a space where I introduce myself and showcase my capabilities.
          </p>
          <Link href="/about">
            <button className="mt-6 px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition">
              Learn More
            </button>
          </Link>
        </div>

        <figure className="md:w-1/3">
          <img
            src="im.jpg"
            alt="Portrait of Mary"
            className="w-72 h-72 rounded-full object-cover mx-auto md:mx-0"
          />
        </figure>
      </main>

      <footer className="bg-purple-800 text-purple-100 p-6 text-center text-sm border-t border-purple-700">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  )
}
