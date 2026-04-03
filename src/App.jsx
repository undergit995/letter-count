import { useState } from 'react'
import './App.css'

function App() {const [value, setValue] = useState("");

  const letters = value.replace(/[^a-zA-Z]/g, "").length;
  const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
  const chars = value.length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-1">Letter Counter</h1>
        <p className="text-gray-400 text-sm text-center mb-6">Type something to analyse it</p>

        <textarea
          className="w-full border border-gray-200 rounded-2xl p-4 text-gray-700 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-300 transition mb-6"
          rows={4}
          placeholder="Start typing here..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Letters", value: letters }
          ].map(stat => (
            <div key={stat.label} className="bg-green-50 rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {value && (
          <button
            onClick={() => setValue("")}
            className="w-full mt-4 py-2 text-sm text-gray-400 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default App
