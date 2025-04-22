import Link from "next/link";

export default function OutboundPage() {
  const outboundData = [
    { id: 1, code: "OUT-001", destination: "Customer A", date: "2025-04-20" },
    { id: 2, code: "OUT-002", destination: "Customer B", date: "2025-04-21" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Outbound</h1>
        <Link href="/outbound/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + New Outbound
        </Link>
      </div>
      <ul className="space-y-2">
        {outboundData.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow hover:bg-gray-50">
            <Link href={`/outbound/${item.id}`} className="block">
              <div className="font-semibold">{item.code}</div>
              <div>Destination: {item.destination}</div>
              <div>Date: {item.date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}