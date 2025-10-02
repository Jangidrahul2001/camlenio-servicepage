"use client";
import { useState } from "react";

export default function CookieSettings() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="text-sm  text-gray-300 hover:text-orange-500 transition-colors duration-300"
      >
        Cookie Settings
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-orange-100 p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Cookie Preferences
            </h2>
            <div className="space-y-3">
              <label className="flex items-center text-gray-800 space-x-2">
                <input type="checkbox" defaultChecked disabled />
                <span>Necessary Cookies</span>
              </label>
              <label className="flex items-center text-gray-800 space-x-2">
                <input type="checkbox" className="bg-orange-500" />
                <span>Analytics Cookies</span>
              </label>
              <label className="flex items-center text-gray-800 space-x-2">
                <input type="checkbox" className="bg-orange-500" />
                <span>Marketing Cookies</span>
              </label>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Your cookie preferences have been saved.");
                  setOpen(false);
                }}
                className="px-4 py-2 bg-orange-500 text-white rounded"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
