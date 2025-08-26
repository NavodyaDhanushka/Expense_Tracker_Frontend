import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";

function App() {
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, { ...expense, _id: Date.now() }]);
    };

    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter((e) => e._id !== id));
    };

    const handleEditExpense = (updatedExpense) => {
        setExpenses(
            expenses.map((e) => (e._id === updatedExpense._id ? updatedExpense : e))
        );
    };

    return (
        <div className="h-screen bg-gray-100 p-6 flex flex-col">
            <h1 className="text-2xl font-bold mb-6">Expense Tracker</h1>

            <div className="flex flex-1 gap-6 w-full h-full">

                <div className="w-1/3 space-y-4">
                    {/*<div className="flex flex-wrap gap-4">
                        <DashboardCard title="Total Expenses" value="LKR 2,450.00" />
                        <DashboardCard title="This Month" value="LKR 890.50" />
                        <DashboardCard title="Total Transactions" value="127" />
                    </div>*/}

                    <ExpenseForm onAdd={handleAddExpense} />
                </div>

                <div className="w-2/3 flex flex-col">
                    <div className="flex-1 overflow-x-auto overflow-y-auto">
                        <ExpenseTable
                            expenses={expenses}
                            onEdit={handleEditExpense}
                            onDelete={handleDeleteExpense}
                        />
                    </div>
                </div>
            </div>
        </div>

    );

}

export default App;
