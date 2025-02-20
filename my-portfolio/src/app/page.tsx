"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-400">Showcasing my projects and skills</p>
      <nav className="mt-6">
        <Link href="/about" className="text-blue-400 hover:underline mx-2">About</Link>
        <Link href="/projects" className="text-blue-400 hover:underline mx-2">Projects</Link>
        <Link href="/contact" className="text-blue-400 hover:underline mx-2">Contact</Link>
      </nav>
    </div>
  );
}
