// 2. ABOUT PAGE - Add Image component and metadata
import Navbar from '@/components/Navbar'
import Image from 'next/image' // ADD THIS
import { Metadata } from 'next' // ADD THIS

// ADD METADATA
export const metadata: Metadata = {
  title: 'About - Umubyeyi Marie Bienvenue',
  description: 'Learn more about my experience in frontend development with React, Next.js, and modern web technologies.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-900 text-purple-100">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <main className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          <div className="md:w-2/3 text-left">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-6 text-lg leading-relaxed">
              I'm a passionate developer with extensive experience in building modern web applications using React, Next.js, and Tailwind CSS. I enjoy solving complex problems and crafting seamless digital experiences that are user-focused, accessible, and performance-driven. My goal is to continuously learn and apply best practices to create scalable and maintainable software.
            </p>
          </div>

          <figure className="md:w-1/3">
            {/* REPLACE img with Image component */}
            <Image
              src="/im.jpg"
              alt="Portrait of Umubyeyi Marie Bienvenue"
              width={320}
              height={320}
              className="w-80 h-80 rounded-full object-cover mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
            />
          </figure>
        </main>
      </div>

      <footer className="bg-purple-800 text-purple-100 p-6 text-center text-sm border-t border-purple-700">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  )
}