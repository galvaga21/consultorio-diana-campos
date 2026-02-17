
"use client";

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { UserRole } from "../../lib/types";

export const MagicLogin = () => {
    const { login } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div
                className={`${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 translate-y-4 pointer-events-none"
                    } transition-all duration-300 absolute bottom-16 right-0 bg-white shadow-xl rounded-lg p-4 border border-gray-100 min-w-[200px] flex flex-col gap-2`}
            >
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">Login Mágico</div>
                <button
                    onClick={() => login("psychologist")}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors flex items-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Psicóloga
                </button>
                <button
                    onClick={() => login("patient")}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors flex items-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Paciente
                </button>
                <button
                    onClick={() => login("admin")}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors flex items-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> Admin
                </button>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                title="Magic Login for Testing"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wand-2"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" /><path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M19 14v4" /><path d="M10 2v2" /><path d="M7 8H3" /><path d="M21 16h-4" /><path d="M11 3H9" /></svg>
            </button>
        </div>
    );
};
