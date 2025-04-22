"use client";

import { useEffect, useState } from "react";

type InboundItem = {
  id: string;
  productSku: string;
  productName: string;
  quantityReceived: number;
  quantityAccepted: number;
  status: string;
  locationCode?: string;
};

type InboundTransaction = {
  id: string;
  referenceNo: string;
  supplier: string;
  receivedDate: string;
  items: InboundItem[];
};

export default function InboundPage() {
  const [data, setData] = useState<InboundTransaction[]>([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    referenceNo: "",
    supplier: "",
    receivedDate: "",
    items: [
      {
        productSku: "",
        productName: "",
        quantityReceived: 0,
        quantityAccepted: 0,
        status: "PENDING",
        locationCode: "",
      },
    ],
  });

  const fetchData = async () => {
    const res = await fetch("/api/inbound");
    const result = await res.json();
    setData(result);
    setLoading(false);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/inbound", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({
        referenceNo: "",
        supplier: "",
        receivedDate: "",
        items: [
          {
            productSku: "",
            productName: "",
            quantityReceived: 0,
            quantityAccepted: 0,
            status: "PENDING",
            locationCode: "",
          },
        ],
      });
      fetchData();
    } else {
      const err = await res.json();
      alert("Gagal submit: " + err.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Inbound Transactions</h1>

      {/* FORM */}
      <div className="space-y-2 p-4 border rounded bg-gray-50">
        <input className="border p-2 w-full" placeholder="Reference No" value={form.referenceNo} onChange={(e) => setForm({ ...form, referenceNo: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Supplier" value={form.supplier} onChange={(e) => setForm({ ...form, supplier: e.target.value })} />
        <input type="date" className="border p-2 w-full" value={form.receivedDate} onChange={(e) => setForm({ ...form, receivedDate: e.target.value })} />

        {/* ITEM INPUT */}
        <div className="border-t pt-4 space-y-2">
          <h2 className="font-semibold">Item</h2>
          {form.items.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <input
                className="border p-2"
                placeholder="Product SKU"
                value={item.productSku}
                onChange={(e) =>
                  setForm({
                    ...form,
                    items: [{ ...item, productSku: e.target.value }],
                  })
                }
              />
              <input
                className="border p-2"
                placeholder="Product Name"
                value={item.productName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    items: [{ ...item, productName: e.target.value }],
                  })
                }
              />
              <input
                className="border p-2"
                placeholder="Qty Received"
                type="number"
                value={item.quantityReceived}
                onChange={(e) =>
                  setForm({
                    ...form,
                    items: [{ ...item, quantityReceived: Number(e.target.value) }],
                  })
                }
              />
              <input
                className="border p-2"
                placeholder="Qty Accepted"
                type="number"
                value={item.quantityAccepted}
                onChange={(e) =>
                  setForm({
                    ...form,
                    items: [{ ...item, quantityAccepted: Number(e.target.value) }],
                  })
                }
              />
              <select
                className="border p-2"
                value={item.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    items: [{ ...item, status: e.target.value }],
                  })
                }
              >
                <option value="PENDING">PENDING</option>
                <option value="RECEIVED">RECEIVED</option>
                <option value="INSPECTED">INSPECTED</option>
                <option value="PUTAWAY">PUTAWAY</option>
              </select>
              <input
                className="border p-2"
                placeholder="Location Code"
                value={item.locationCode}
                onChange={(e) =>
                  setForm({
                    ...form,
                    items: [{ ...item, locationCode: e.target.value }],
                  })
                }
              />
            </div>
          ))}
        </div>

        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>

      {/* LIST DATA */}
      <div className="space-y-2">
        {loading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <p>No data</p>
        ) : (
          data.map((txn) => (
            <div key={txn.id} className="border p-4 bg-white rounded shadow">
              <div className="font-bold">{txn.referenceNo}</div>
              <div className="text-sm text-gray-500">
                {txn.supplier} — {new Date(txn.receivedDate).toLocaleDateString()}
              </div>
              <ul className="ml-4 mt-2 list-disc text-sm">
                {txn.items.map((item) => (
                  <li key={item.id}>
                    <span className="font-medium">{item.productSku}</span>: {item.productName} | Qty: {item.quantityReceived} / Accepted: {item.quantityAccepted} | Status: {item.status} | Location: {item.locationCode || "-"}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
