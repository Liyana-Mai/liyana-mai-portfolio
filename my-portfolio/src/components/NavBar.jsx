import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
          LM
        </div>
        <div>
          <h1 className="text-lg font-semibold">Liyana Maisela</h1>
          <p className="text-xs text-gray-500">Code · Fashion · Beauty</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#home" className="hover:text-pink-500">Home</a>
        <a href="#about" className="hover:text-pink-500">About</a>
        <a href="#projects" className="hover:text-pink-500">Projects</a>
        <a href="#lookbook" className="hover:text-pink-500">Lookbook</a>
        <a href="#blog" className="hover:text-pink-500">Blog</a>
        <a href="#shop" className="hover:text-pink-500">Shop</a>
        <button className="flex items-center gap-2 bg-white/70 backdrop-blur-md border px-3 py-2 rounded-full hover:bg-pink-50 transition">
          <ShoppingCart size={16} />
          <span>Cart</span>
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          aria-label="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md bg-white/70 backdrop-blur"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-6 mt-3 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg border p-4 flex flex-col gap-3 md:hidden">
          <a href="#home" className="hover:text-pink-500" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-pink-500" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="hover:text-pink-500" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#lookbook" className="hover:text-pink-500" onClick={() => setMenuOpen(false)}>Lookbook</a>
          <a href="#blog" className="hover:text-pink-500" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#shop" className="hover:text-pink-500" onClick={() => setMenuOpen(false)}>Shop</a>
          <button className="flex items-center gap-2 bg-white/80 backdrop-blur-md border px-3 py-2 rounded-full">
            <ShoppingCart size={16} /> <span>Cart</span>
          </button>
        </div>
      )}
    </header>
  );
}
