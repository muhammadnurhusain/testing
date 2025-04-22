export default function InboundDetailPage({ params }: { params: { id: string } }) {
  const inbound = {
    id: params.id,
    code: `IN-00${params.id}`,
    supplier: "Supplier A",
    date: "2025-04-20",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inbound Detail</h1>
      <div className="space-y-2">
        <div>
          <strong>Code:</strong> {inbound.code}
        </div>
        <div>
          <strong>Supplier:</strong> {inbound.supplier}
        </div>
        <div>
          <strong>Date:</strong> {inbound.date}
        </div>
      </div>
    </div>
  );
}
