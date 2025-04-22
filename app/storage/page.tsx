export default function StoragePage() {
  const storageLocations = [
    { id: 1, code: "RACK-A1", description: "Rak A1 - Barang Ringan" },
    { id: 2, code: "RACK-B2", description: "Rak B2 - Barang Berat" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Storage</h1>
      <ul className="space-y-2">
        {storageLocations.map((loc) => (
          <li key={loc.id} className="border p-4 rounded shadow">
            <div className="font-semibold">{loc.code}</div>
            <div>{loc.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
