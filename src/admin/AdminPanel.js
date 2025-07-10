import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

const categories = [
  { label: "Living Room", value: "living-room" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Dining", value: "dining" },
  { label: "Outdoor", value: "outdoor" },
  { label: "Office", value: "office" },
  { label: "Accessories", value: "accessories" },
  { label: "Gallery", value: "gallery" },
  { label: "Another Page", value: "another" },
];

const isProductCategory = (cat) =>
  ["living-room", "bedroom", "dining", "outdoor", "office", "accessories"].includes(cat);

const AdminPanel = () => {
  const [form, setForm] = useState({
    category: "living-room",
    title: "",
    price: "",
    inStock: true,
    image: null,
    description: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchItems = async () => {
    setFetching(true);
    try {
      const res = await axios.get(`${BACKEND_URL}/gallery`);
      setItems(res.data);
    } catch (err) {
      // Optionally handle error
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else if (type === "file") {
      setForm((f) => ({ ...f, image: files[0] }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      if (editId) {
        // If a new image is selected, upload it and update the image URL
        let updatedData = {
          title: form.title,
          description: form.description,
          category: form.category,
          price: isProductCategory(form.category) ? form.price : "",
          inStock: isProductCategory(form.category) ? form.inStock : false,
        };
        if (form.image) {
          // Upload new image to backend as a new item, then update the old item with the new URL
          const data = new FormData();
          data.append("image", form.image);
          data.append("title", form.title);
          data.append("description", form.description);
          data.append("category", form.category);
          data.append("price", isProductCategory(form.category) ? form.price : "");
          data.append("inStock", isProductCategory(form.category) ? form.inStock : false);
          // Use a special endpoint or update logic to update the image (not implemented in backend yet)
          // For now, just update metadata
          await axios.put(`${BACKEND_URL}/gallery/${editId}`, updatedData);
        } else {
          await axios.put(`${BACKEND_URL}/gallery/${editId}`, updatedData);
        }
        setMessage("Item updated successfully!");
        setEditId(null);
      } else {
        // Create new item
        const data = new FormData();
        data.append("image", form.image);
        data.append("title", form.title);
        data.append("description", form.description);
        data.append("category", form.category);
        data.append("price", isProductCategory(form.category) ? form.price : "");
        data.append("inStock", isProductCategory(form.category) ? form.inStock : false);
        await axios.post(
          `${BACKEND_URL}/upload-image`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setMessage("Image uploaded successfully!");
      }
      setForm({
        category: "living-room",
        title: "",
        price: "",
        inStock: true,
        image: null,
        description: "",
      });
      fetchItems();
    } catch (err) {
      setMessage("Upload failed. " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await axios.delete(`${BACKEND_URL}/gallery/${id}`);
      fetchItems();
    } catch (err) {
      setMessage("Delete failed. " + (err.response?.data?.error || err.message));
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({
      category: item.category || "living-room",
      title: item.title || "",
      price: item.price || "",
      inStock: item.inStock !== undefined ? item.inStock : true,
      image: null,
      description: item.description || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-rose-50 via-white to-emerald-50 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Admin Panel - {editId ? "Edit Item" : "Add Image"}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-lg px-3 py-2"
              required
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
              required={!editId}
            />
            {editId && <div className="text-xs text-slate-400 mt-1">(Leave blank to keep current image)</div>}
          </div>
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-lg px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-lg px-3 py-2"
              rows={3}
            />
          </div>
          {isProductCategory(form.category) && (
            <>
              <div>
                <label className="block font-medium mb-1">Price</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={form.inStock}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="font-medium">In Stock</label>
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition"
            disabled={loading}
          >
            {loading ? (editId ? "Updating..." : "Uploading...") : (editId ? "Update Item" : "Upload Image")}
          </button>
          {editId && (
            <button
              type="button"
              className="w-full mt-2 bg-slate-300 text-slate-800 font-semibold py-3 rounded-lg hover:bg-slate-400 transition"
              onClick={() => {
                setEditId(null);
                setForm({
                  category: "living-room",
                  title: "",
                  price: "",
                  inStock: true,
                  image: null,
                  description: "",
                });
              }}
            >
              Cancel Edit
            </button>
          )}
          {message && <div className="mt-4 text-center text-emerald-700 font-medium">{message}</div>}
        </form>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mt-8 mb-8">
        <h3 className="text-xl font-bold mb-4 text-slate-800">Uploaded Items</h3>
        {fetching ? (
          <div>Loading...</div>
        ) : items.length === 0 ? (
          <div>No items uploaded yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">In Stock</th>
                  <th className="p-2 border">Uploaded At</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id} className="hover:bg-slate-50">
                    <td className="p-2 border">
                      <img src={item.url} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    </td>
                    <td className="p-2 border">{item.title}</td>
                    <td className="p-2 border">{item.description}</td>
                    <td className="p-2 border">{item.category || "-"}</td>
                    <td className="p-2 border">{item.price || "-"}</td>
                    <td className="p-2 border">{item.inStock === undefined ? "-" : item.inStock ? "Yes" : "No"}</td>
                    <td className="p-2 border">{item.uploadedAt ? new Date(item.uploadedAt).toLocaleString() : "-"}</td>
                    <td className="p-2 border">
                      <button
                        className="bg-emerald-500 text-white px-2 py-1 rounded mr-2 hover:bg-emerald-600"
                        onClick={() => handleEdit(item)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-rose-500 text-white px-2 py-1 rounded hover:bg-rose-600"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 