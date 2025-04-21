// app/dashboard/layout.tsx
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6">Warehouse</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/dashboard/inbound" className="hover:text-blue-600">
            Inbound
          </Link>
          <Link href="/dashboard/outbound" className="hover:text-blue-600">
            Outbound
          </Link>
          <Link href="/dashboard/inventory" className="hover:text-blue-600">
            Inventory
          </Link>
          <Link href="/dashboard/report" className="hover:text-blue-600">
            Reports
          </Link>
        </nav>
        <button onClick={handleLogout} className="mt-10 text-sm text-red-500 hover:underline">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
