import Link from "next/link";

const menu = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Inbound", path: "/inbound" },
  { label: "Outbound", path: "/outbound" },
  { label: "Storage", path: "/storage" },
  { label: "Inventory", path: "/inventory" },
  { label: "Reports", path: "/reports" },
];

export const Sidebar = () => (
  <aside className="w-64 bg-gray-800 text-white h-full p-4">
    <h2 className="text-xl font-bold mb-6">Warehouse</h2>
    <nav className="space-y-2">
      {menu.map((item) => (
        <Link key={item.path} href={item.path} className="block hover:bg-gray-700 p-2 rounded">
          {item.label}
        </Link>
      ))}
    </nav>
  </aside>
);
