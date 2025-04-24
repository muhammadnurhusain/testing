"use client";

import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  sku: string;
  price: string;
  created_at: string | null;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", sku: "", price: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null); // Menyimpan produk yang sedang di-edit

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Handle form submission untuk add atau update produk
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const url = editingProduct
      ? `/api/products/${editingProduct.id}` // URL dengan ID untuk update
      : "/api/products";

    const res = await fetch(url, {
      method: editingProduct ? "PUT" : "POST", // Jika editing, gunakan PUT, jika baru POST
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingProduct || newProduct),
    });

    const data = await res.json();
    if (data.error) {
      alert("Error: " + data.error);
    } else {
      if (editingProduct) {
        // Update produk di UI setelah berhasil update
        setProducts((prev) => prev.map((product) => (product.id === data.id ? { ...product, name: data.name, sku: data.sku, price: data.price } : product)));
      } else {
        setProducts((prev) => [...prev, data]);
      }
      setNewProduct({ name: "", sku: "", price: "" });
      setEditingProduct(null); // Reset editing
    }
    setIsLoading(false);
  };

  // Handle delete product
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Yakin mau hapus produk ini?");
    if (confirmDelete) {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.error) {
        alert("Error: " + data.error);
      } else {
        setProducts((prev) => prev.filter((product) => product.id !== id));
      }
    }
  };

  // Handle edit product
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setNewProduct({ name: product.name, sku: product.sku, price: product.price });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>

      {/* Form untuk tambah atau edit produk */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Nama Produk"
          value={editingProduct ? editingProduct.name : newProduct.name}
          onChange={(e) => {
            const value = e.target.value;
            if (editingProduct) {
              setEditingProduct({ ...editingProduct, name: value });
            } else {
              setNewProduct({ ...newProduct, name: value });
            }
          }}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <input
          type="text"
          placeholder="SKU Produk"
          value={editingProduct ? editingProduct.sku : newProduct.sku}
          onChange={(e) => {
            const value = e.target.value;
            if (editingProduct) {
              setEditingProduct({ ...editingProduct, sku: value });
            } else {
              setNewProduct({ ...newProduct, sku: value });
            }
          }}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Harga Produk"
          value={editingProduct ? editingProduct.price : newProduct.price}
          onChange={(e) => {
            const value = e.target.value;
            if (editingProduct) {
              setEditingProduct({ ...editingProduct, price: value });
            } else {
              setNewProduct({ ...newProduct, price: value });
            }
          }}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300" disabled={isLoading}>
          {isLoading ? "Loading..." : editingProduct ? "Update Produk" : "Tambah Produk"}
        </button>
      </form>

      {/* Tabel Produk */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">SKU</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2 border-b">{product.name}</td>
              <td className="px-4 py-2 border-b">{product.sku}</td>
              <td className="px-4 py-2 border-b">{product.price}</td>
              <td className="px-4 py-2 border-b">
                <button onClick={() => handleEdit(product)} className="text-blue-500 hover:underline">
                  Edit
                </button>
                <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:underline ml-4">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
