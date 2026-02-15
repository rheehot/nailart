'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-6 py-4 bg-transparent">
      {/* Font import (Indie Flower) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
      `}</style>

      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo + Text */}
        <a
          href="/"
          className="flex items-center gap-3 no-underline text-white font-indie"
        >
          <img
            src="/nailarrt.png"
            alt="Nailart AI Logo"
            className="w-10 h-10 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
          <span className="text-xl font-bold tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Nailart AI
          </span>
        </a>

        {/* Center Links */}
        <div className="flex items-center gap-8">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/90 no-underline text-sm font-medium transition-all duration-200 hover:text-white hover:opacity-100"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Get Started Button */}
        <a
          href="#create"
          className="px-5 py-2.5 rounded-lg bg-white/15 text-white no-underline text-sm font-semibold border border-white/20 backdrop-blur-sm shadow-lg transition-all duration-200 hover:bg-white/20 hover:-translate-y-px"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
