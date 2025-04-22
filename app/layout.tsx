// app/layout.tsx
import "../styles/global.css";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

export const metadata = {
  title: "Warehouse System",
  description: "Simple warehouse management system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="p-4 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
