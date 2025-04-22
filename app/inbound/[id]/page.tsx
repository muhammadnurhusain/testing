// app/inbound/[id]/page.tsx

interface InboundPageProps {
  params: Promise<{
    id: string;
  }>;
}

const InboundPage = async ({ params }: InboundPageProps) => {
  const { id } = await params; // Await the params before accessing 'id'

  return (
    <div>
      <h1>Inbound Page</h1>
      <p>Inbound ID: {id}</p>
    </div>
  );
};

export default InboundPage;
