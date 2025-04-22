export default function InventoryPage() {
  const inventoryData = [
    { id: 1, sku: "SKU-001", name: "Item A", stock: 120 },
    { id: 2, sku: "SKU-002", name: "Item B", stock: 45 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <ul className="space-y-2">
        {inventoryData.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow">
            <div className="font-semibold">{item.name}</div>
            <div>SKU: {item.sku}</div>
            <div>Stock: {item.stock}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
