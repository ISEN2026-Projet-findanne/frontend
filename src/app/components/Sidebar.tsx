import React from "react";
import { Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  Users, 
  PenLine, 
  BarChart3, 
  AlertTriangle, 
  FileText, 
  UserCircle 
} from "lucide-react";
import { cn } from "./ui";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Mes Étudiants", href: "/students" },
  { icon: Users, label: "Mes Matières", href: "/groups" },
  { icon: PenLine, label: "Saisie des Notes", href: "/grades" },
  { icon: BarChart3, label: "Analytics / KPI", href: "/analytics" },
  { icon: AlertTriangle, label: "Alertes", href: "/alerts" },
  { icon: FileText, label: "Rapports PDF", href: "/reports" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-indigo-950 text-white min-h-screen flex flex-col hidden md:flex fixed h-full z-20">
      <div className="p-6 flex items-center gap-3 border-b border-indigo-900/50">
        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center font-bold text-xl">
          E
        </div>
        <span className="font-bold text-xl tracking-tight">Edu<span className="text-orange-500">Track</span></span>
      </div>
      
      <div className="px-4 py-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mt-4">
        Espace Enseignant
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = location.pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                active 
                  ? "bg-indigo-900/80 text-white" 
                  : "text-indigo-200 hover:bg-indigo-900/50 hover:text-white"
              )}
            >
              <item.icon className={cn("w-5 h-5", active ? "text-orange-500" : "text-indigo-400")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-indigo-900/50">
        <Link
          to="/profile"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
            location.pathname === "/profile"
              ? "bg-indigo-900/80 text-white" 
              : "text-indigo-200 hover:bg-indigo-900/50 hover:text-white"
          )}
        >
          <UserCircle className="w-5 h-5 text-indigo-400" />
          Mon Profil
        </Link>
      </div>
    </aside>
  );
}
