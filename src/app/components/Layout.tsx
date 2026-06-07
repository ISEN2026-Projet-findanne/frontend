import { Outlet, Link, useLocation } from "react-router";
import {
  Home,
  GraduationCap,
  Users,
  BarChart3,
  GitCompare,
  AlertTriangle,
  FileText,
  TestTube2,
  User,
  Bell,
  Search
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: GraduationCap, label: "Promotions", path: "/promotions" },
  { icon: Users, label: "Étudiants", path: "/students" },
  { icon: BarChart3, label: "Analytics & KPI", path: "/analytics" },
  { icon: GitCompare, label: "Comparaisons", path: "/comparisons" },
  { icon: AlertTriangle, label: "Alertes pédagogiques", path: "/alerts" },
  { icon: FileText, label: "Rapports PDF", path: "/reports" },
  { icon: TestTube2, label: "Simulation pédagogique", path: "/simulation" },
  { icon: User, label: "Profil", path: "/profile" },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-900 text-white flex flex-col">
        <div className="p-6 border-b border-purple-800">
          <h1 className="text-xl font-bold">Interface Pédagogique</h1>
          <p className="text-sm text-purple-300 mt-1">Responsable</p>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || 
              (item.path !== "/" && location.pathname.startsWith(item.path));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  isActive 
                    ? "bg-orange-500 text-white" 
                    : "text-purple-200 hover:bg-purple-800"
                }`}
              >
                <Icon className="size-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-1 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Bonjour Mme Responsable 👋
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {new Date().toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="flex items-center gap-6">

            {/* Recherche */}
            <div className="flex items-center bg-slate-100 px-4 py-3 rounded-2xl w-80">
              <Search size={20} className="text-slate-400 mr-3" />

              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent outline-none w-full text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* Notification */}
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="size-5" />
              <span className="absolute top-1 right-1 size-2 bg-orange-500 rounded-full"></span>
            </button>

            {/* Séparateur */}
            <div className="h-10 w-px bg-slate-200"></div>

            {/* Profil */}
            <div className="flex items-center gap-3">

              <img
                src="https://i.pravatar.cc/150?img=44"
                alt="Responsable"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-slate-900">
                  Mme Responsable
                </p>

                <p className="text-sm text-slate-500">
                  Responsable pédagogique
                </p>
              </div>

            </div>

          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
