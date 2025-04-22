export default function InboundDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Inbound Detail</h2>
      <p>ID: {params.id}</p>
      <p>Supplier: Dummy Supplier</p>
      <p>Date: 2025-04-20</p>
      <p>Status: Received</p>
    </div>
  );
}
