'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-purple-900 text-purple-100">
      <Navbar />

      <main className="flex-grow max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-purple-100 text-purple-900 placeholder-purple-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-purple-100 text-purple-900 placeholder-purple-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded h-40 bg-purple-100 text-purple-900 placeholder-purple-600"
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </main>

      <footer className="bg-purple-800 text-purple-100 p-6 text-center text-sm border-t border-purple-700">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  )
}
