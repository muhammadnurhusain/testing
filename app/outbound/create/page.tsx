export default function OutboundCreatePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Outbound</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Outbound Code" className="border p-2 w-full rounded" />
        <input type="text" placeholder="Destination" className="border p-2 w-full rounded" />
        <input type="date" className="border p-2 w-full rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}
