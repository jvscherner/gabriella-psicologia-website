'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Nome */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-verde-mar-700">
              Gabriella Engelhardt
            </h1>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-cinza-700 hover:text-verde-mar-600 font-medium hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
            >
              Home
            </Link>
            <Link
              href="/atendimento"
              className="text-cinza-700 hover:text-verde-mar-600 font-medium hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
            >
              Atendimento
            </Link>
            <Link
              href="/historia"
              className="text-cinza-700 hover:text-verde-mar-600 font-medium hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
            >
              Minha História
            </Link>
            <Link
              href="/contato"
              className="text-cinza-700 hover:text-verde-mar-600 font-medium hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
            >
              Contato
            </Link>

            {/* CTA Button */}
            <Link
              href="/contato"
              className="bg-verde-mar-500 text-white px-6 py-2.5 rounded-lg hover:bg-verde-mar-600 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-medium shadow-sm transition-all"
            >
              Agendar Consulta
            </Link>
          </div>

          {/* Botão Menu Mobile (Hamburger) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Menu"
          >
            <span className={`bg-cinza-700 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`bg-cinza-700 block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bg-cinza-700 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Menu Mobile (Overlay) */}
        <div className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              onClick={toggleMenu}
              className="text-cinza-700 hover:text-verde-mar-600 font-medium py-2 hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
            >
              Home
            </Link>
            <Link
              href="/atendimento"
              onClick={toggleMenu}
              className="text-cinza-700 hover:text-verde-mar-600 font-medium py-2 hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
            >
              Atendimento
            </Link>
            <Link
              href="/historia"
              onClick={toggleMenu}
              className="text-cinza-700 hover:text-verde-mar-600 font-medium py-2 hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
            >
              Minha História
            </Link>
            <Link
              href="/contato"
              onClick={toggleMenu}
              className="text-cinza-700 hover:text-verde-mar-600 font-medium py-2 hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
            >
              Contato
            </Link>
            <Link
              href="/contato"
              onClick={toggleMenu}
              className="bg-verde-mar-500 text-white px-6 py-3 rounded-lg hover:bg-verde-mar-600 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-medium text-center transition-all"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
