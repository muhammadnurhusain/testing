import Link from "next/link";

const dummyInbound = [
  { id: 1, supplier: "PT. ABC", date: "2025-04-20", status: "Received" },
  { id: 2, supplier: "CV. XYZ", date: "2025-04-21", status: "Pending" },
];

export default function InboundPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Inbound List</h2>
        <Link href="/inbound/create" className="bg-blue-600 text-white px-4 py-2 rounded">
          + New Inbound
        </Link>
      </div>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Supplier</th>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyInbound.map((inbound) => (
            <tr key={inbound.id}>
              <td className="border px-2 py-1">{inbound.id}</td>
              <td className="border px-2 py-1">{inbound.supplier}</td>
              <td className="border px-2 py-1">{inbound.date}</td>
              <td className="border px-2 py-1">{inbound.status}</td>
              <td className="border px-2 py-1">
                <Link href={`/inbound/${inbound.id}`} className="text-blue-600 underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
