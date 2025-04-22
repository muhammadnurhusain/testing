"use client";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white shadow-lg hidden md:block">
      <div className="p-4 text-xl font-semibold shadow-sm text-center">Admin Panel</div>
      <nav className="mt-4">
        <NavItem href="/dashboard" label="Dashboard" />
        <NavItem href="/products" label="Products" />
      </nav>
    </aside>
  );
}
