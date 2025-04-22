"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InboundCreatePage() {
  const router = useRouter();
  const [supplier, setSupplier] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    alert(`Inbound created for ${supplier}`);
    router.push("/inbound");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <h2 className="text-xl font-bold">Create Inbound</h2>
      <div>
        <label className="block mb-1">Supplier</label>
        <input className="w-full border px-2 py-1" value={supplier} onChange={(e) => setSupplier(e.target.value)} required />
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
        Submit
      </button>
    </form>
  );
}
