export default function OutboundDetailPage({ params }: { params: { id: string } }) {
  const outbound = {
    id: params.id,
    code: `OUT-00${params.id}`,
    destination: "Customer A",
    date: "2025-04-20",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Outbound Detail</h1>
      <div className="space-y-2">
        <div>
          <strong>Code:</strong> {outbound.code}
        </div>
        <div>
          <strong>Destination:</strong> {outbound.destination}
        </div>
        <div>
          <strong>Date:</strong> {outbound.date}
        </div>
      </div>
    </div>
  );
}
