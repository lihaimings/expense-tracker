"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Download, PieChart, TrendingUp, DollarSign, Calendar } from "lucide-react";

interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface Budget {
  category: string;
  limit: number;
  spent: number;
}

const CATEGORIES = [
  "Food & Dining",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Bills & Utilities",
  "Healthcare",
  "Education",
  "Other"
];

export default function ToolComponent() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [newExpense, setNewExpense] = useState({
    amount: "",
    category: CATEGORIES[0],
    description: "",
    date: new Date().toISOString().split("T")[0]
  });
  const [activeTab, setActiveTab] = useState<"add" | "history" | "budget" | "export">("add");
  const [newBudget, setNewBudget] = useState({ category: CATEGORIES[0], limit: "" });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("expense_tracker_expenses");
    if (saved) setExpenses(JSON.parse(saved));
    const savedBudgets = localStorage.getItem("expense_tracker_budgets");
    if (savedBudgets) setBudgets(JSON.parse(savedBudgets));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("expense_tracker_expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("expense_tracker_budgets", JSON.stringify(budgets));
  }, [budgets]);

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.amount || !newExpense.description) return;
    
    const expense: Expense = {
      id: Date.now().toString(),
      amount: parseFloat(newExpense.amount),
      category: newExpense.category,
      description: newExpense.description,
      date: newExpense.date
    };
    
    setExpenses([expense, ...expenses]);
    setNewExpense({ ...newExpense, amount: "", description: "" });
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const addBudget = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBudget.limit) return;
    
    const existing = budgets.findIndex(b => b.category === newBudget.category);
    if (existing >= 0) {
      const updated = [...budgets];
      updated[existing].limit = parseFloat(newBudget.limit);
      setBudgets(updated);
    } else {
      setBudgets([...budgets, {
        category: newBudget.category,
        limit: parseFloat(newBudget.limit),
        spent: 0
      }]);
    }
    setNewBudget({ category: CATEGORIES[0], limit: "" });
  };

  const getCategoryTotal = (category: string) => {
    return expenses
      .filter(e => e.category === category)
      .reduce((sum, e) => sum + e.amount, 0);
  };

  const getTotalExpenses = () => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  };

  const exportToCSV = () => {
    const headers = ["Date", "Category", "Description", "Amount"];
    const rows = expenses.map(e => [e.date, e.category, e.description, e.amount.toFixed(2)]);
    const csv = [headers, ...rows].map(row => row.join(",")).join("\n");
    
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.csv";
    a.click();
  };

  const exportToJSON = () => {
    const blob = new Blob([JSON.stringify(expenses, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.json";
    a.click();
  };

  return (
    <div className="card p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Expense Tracker</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-primary-50 rounded-xl p-4">
          <DollarSign className="w-6 h-6 text-primary-600 mb-2" />
          <p className="text-sm text-gray-600">Total Spent</p>
          <p className="text-xl font-bold text-gray-900">${getTotalExpenses().toFixed(2)}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4">
          <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
          <p className="text-sm text-gray-600">This Month</p>
          <p className="text-xl font-bold text-gray-900">
            ${expenses.filter(e => new Date(e.date).getMonth() === new Date().getMonth())
              .reduce((sum, e) => sum + e.amount, 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-4">
          <PieChart className="w-6 h-6 text-blue-600 mb-2" />
          <p className="text-sm text-gray-600">Categories</p>
          <p className="text-xl font-bold text-gray-900">
            {new Set(expenses.map(e => e.category)).size}
          </p>
        </div>
        <div className="bg-purple-50 rounded-xl p-4">
          <Calendar className="w-6 h-6 text-purple-600 mb-2" />
          <p className="text-sm text-gray-600">Transactions</p>
          <p className="text-xl font-bold text-gray-900">{expenses.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["add", "history", "budget", "export"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Add Expense Tab */}
      {activeTab === "add" && (
        <form onSubmit={addExpense} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={newExpense.amount}
                onChange={e => setNewExpense({...newExpense, amount: e.target.value})}
                className="input"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={newExpense.category}
                onChange={e => setNewExpense({...newExpense, category: e.target.value})}
                className="input"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <input
              type="text"
              value={newExpense.description}
              onChange={e => setNewExpense({...newExpense, description: e.target.value})}
              className="input"
              placeholder="What did you spend on?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={newExpense.date}
              onChange={e => setNewExpense({...newExpense, date: e.target.value})}
              className="input"
            />
          </div>
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" /> Add Expense
          </button>
        </form>
      )}

      {/* History Tab */}
      {activeTab === "history" && (
        <div className="space-y-3">
          {expenses.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No expenses yet. Add your first expense!</p>
          ) : (
            expenses.map(expense => (
              <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">{expense.description}</p>
                  <p className="text-sm text-gray-500">{expense.category} • {expense.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">${expense.amount.toFixed(2)}</span>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Budget Tab */}
      {activeTab === "budget" && (
        <div className="space-y-6">
          <form onSubmit={addBudget} className="flex gap-4">
            <select
              value={newBudget.category}
              onChange={e => setNewBudget({...newBudget, category: e.target.value})}
              className="input flex-1"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="number"
              value={newBudget.limit}
              onChange={e => setNewBudget({...newBudget, limit: e.target.value})}
              className="input w-32"
              placeholder="Limit"
              min="0"
            />
            <button type="submit" className="btn-primary">Set</button>
          </form>
          
          <div className="space-y-4">
            {CATEGORIES.map(category => {
              const budget = budgets.find(b => b.category === category);
              const spent = getCategoryTotal(category);
              const limit = budget?.limit || 0;
              const percentage = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
              const isOverBudget = limit > 0 && spent > limit;
              
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{category}</span>
                    <span className={isOverBudget ? "text-red-600 font-bold" : "text-gray-600"}>
                      ${spent.toFixed(2)} {limit > 0 && `/ ${limit.toFixed(2)}`}
                      {isOverBudget && " ⚠️ Over budget!"}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${isOverBudget ? "bg-red-500" : "bg-primary-500"}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Export Tab */}
      {activeTab === "export" && (
        <div className="space-y-4">
          <p className="text-gray-600">Export your expense data in different formats:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={exportToCSV} className="btn-primary flex-1 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Export as CSV
            </button>
            <button onClick={exportToJSON} className="btn-secondary flex-1 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Export as JSON
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
