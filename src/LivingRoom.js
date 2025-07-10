import React, { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

const LivingRoom = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/gallery`);
        setItems(res.data.filter(item => item.category === "living-room"));
      } catch (err) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-rose-50 via-white to-emerald-50 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 mt-8">Living Room Collection</h1>
      <p className="text-lg text-slate-600 mb-8">Explore our comfortable seating and elegant coffee tables for your living room.</p>
      <div className="text-6xl mb-8">🛋️</div>
      {loading ? (
        <div>Loading...</div>
      ) : items.length === 0 ? (
        <div>No items found for Living Room.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
          {items.map(item => (
            <div key={item._id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src={item.url} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 mb-2">{item.description}</p>
              <div className="text-emerald-600 font-bold mb-1">Price: {item.price ? `Rs. ${item.price}` : "-"}</div>
              <div className="text-sm text-slate-500">In Stock: {item.inStock === undefined ? "-" : item.inStock ? "Yes" : "No"}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LivingRoom;
