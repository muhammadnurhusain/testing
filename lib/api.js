// lib/api.js
import supabase from "./supabase";

export const createProduct = async (name, price) => {
  const { data, error } = await supabase.from("products").insert([{ name, price }]);
  return { data, error };
};


export const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  }

  export const updateProduct = async (id, updates) => {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
    return { data, error }
  }

  export const deleteProduct = async (id) => {
    const { data, error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)
    return { data, error }
  }
  