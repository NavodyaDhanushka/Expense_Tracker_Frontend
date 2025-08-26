import { useState } from "react";
import Swal from "sweetalert2";

const ExpenseForm = ({ onAdd }) => {
    const today = new Date().toISOString().slice(0, 10);

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        category: "",
        description: "",
        date: today,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "amount" && Number(value) < 0) return; // no negative values
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            amount: Number(formData.amount),
            date: formData.date ? new Date(formData.date).toISOString() : null,
        };

        try {
            const response = await fetch("http://localhost:5000/api/expenses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Failed to add expense");

            const data = await response.json();
            onAdd(data);


            Swal.fire({
                icon: "success",
                title: "Expense Added!",
                text: `${formData.title} was added successfully.`,
                showConfirmButton: false,
                timer: 2000,
            });

            setFormData({ title: "", amount: "", category: "", description: "", date: today });
        } catch (error) {
            console.error("Error adding expense:", error);


            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error adding expense. Please try again.",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-6"
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
                Add New Expense
            </h2>

            <input
                type="text"
                name="title"
                placeholder="Expense Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />


            <div className="relative mb-4">
                <span className="absolute left-3 top-2.5 text-gray-500 font-medium">LKR</span>
                <input
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={handleChange}
                    min="0"
                    required
                    className="w-full pl-12 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>


            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="">Select Category</option>
                <option value="Food & Dining">Food & Dining</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Utilities">Utilities</option>
                <option value="Shopping">Shopping</option>
            </select>


            <textarea
                name="description"
                placeholder="Description (optional)"
                value={formData.description}
                onChange={handleChange}
                className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />


            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full mb-6 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />


            <button
                type="submit"
                style={{
                    boxShadow: "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)"
                }}
                className="w-full py-2 px-4 font-semibold rounded-lg border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 transition-colors"
            >
                Add Expense
            </button>
        </form>
    );
};

export default ExpenseForm;
