export default function ReportsPage() {
  const reports = [
    { id: 1, title: "Laporan Stok Harian", date: "2025-04-22" },
    { id: 2, title: "Laporan Pengiriman Mingguan", date: "2025-04-21" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <ul className="space-y-2">
        {reports.map((r) => (
          <li key={r.id} className="border p-4 rounded shadow">
            <div className="font-semibold">{r.title}</div>
            <div>Date: {r.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
