"use client";
import { useState } from "react";
import NavItem from "./NavItem";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false)

  return (
    <>
      <button className="md:hidden p-2" onClick={() => setOpen(true)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setOpen(false)}>
          <div className="w-64 bg-white h-full shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 text-xl font-semibold">Admin Panel</div>
            <nav className="mt-4">
              <NavItem href="/dashboard" label="Dashboard" onClick={closeMenu} />
              <NavItem href="/products" label="Products" onClick={closeMenu} />
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
