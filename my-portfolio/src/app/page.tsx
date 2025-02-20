"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <nav className="w-full p-4 flex justify-center space-x-6 bg-gray-800 fixed top-0">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/projects" className="hover:text-blue-400">Projects</Link>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </nav>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="text-center mt-20"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-400">Showcasing my projects and skills</p>
      </motion.div>
    </div>
  );
}
