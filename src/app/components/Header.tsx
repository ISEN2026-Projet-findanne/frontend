import React from "react";
import { Bell, Search } from "lucide-react";
import { MOCK_USER } from "../mockData";

export function Header() {
  const currentDate = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div>
        <h2 className="text-xl font-semibold text-slate-800">
          Bonjour {MOCK_USER.name} 👋
        </h2>

        <p className="text-sm text-slate-500">
          {currentDate}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none w-64"
          />
        </div>

        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <img 
            src={MOCK_USER.avatar} 
            alt={MOCK_USER.name}
            className="w-9 h-9 rounded-full object-cover border-2 border-indigo-100"
          />
          <div className="hidden md:block text-sm">
            <p className="font-medium text-slate-700">{MOCK_USER.name}</p>
            <p className="text-slate-500 text-xs">{MOCK_USER.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
