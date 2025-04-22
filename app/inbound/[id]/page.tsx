// app/inbound/[id]/page.tsx

interface InboundPageProps {
  params: {
    id: string;
  };
}

const InboundPage = ({ params }: InboundPageProps) => {
  const { id } = params; // Access the dynamic parameter

  return (
    <div>
      <h1>Inbound Page</h1>
      <p>Inbound ID: {id}</p>
    </div>
  );
};

export default InboundPage;
