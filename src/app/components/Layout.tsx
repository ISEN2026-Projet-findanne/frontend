import { Outlet, NavLink } from "react-router";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Building2,
  BookOpen,
  UserSquare2,
  PenTool,
  BarChart3,
  Bell,
  Settings,
  Search,
  Menu,
  User
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Étudiants", path: "/students", icon: Users },
  { label: "Promotions", path: "/promotions", icon: GraduationCap },
  { label: "Classes & Groupes", path: "/classes", icon: Building2 },
  { label: "Matières", path: "/subjects", icon: BookOpen },
  { label: "Enseignants", path: "/teachers", icon: UserSquare2 },
  { label: "Responsables", path: "/responsables", icon:Users },
  { label: "Analytics", path: "/analytics", icon: BarChart3 },
  { label: "Alertes", path: "/alerts", icon: Bell },
  { label: "Profil", path: "/profile", icon: User },
  { label: "Paramètres", path: "/settings", icon: Settings },
  

];

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString(
    "fr-FR",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* Sidebar Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-[#2A1B38] text-white flex flex-col
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white">
              <GraduationCap size={20} />
            </div>
            EduAdmin
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? "bg-white/10 text-white" 
                    : "text-slate-300 hover:bg-white/5 hover:text-white"}
                `}
              >
                <item.icon size={18} />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shrink-0">

          {/* Partie gauche */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Bonjour Mme Admin 👋
            </h2>

            <p className="text-sm text-slate-500">
              {currentDate}
            </p>
          </div>

          {/* Partie droite */}
          <div className="flex items-center gap-6">

            {/* Recherche */}
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />

              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none w-64"
              />
            </div>

            {/* Notification */}
            <button className="relative p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Séparateur */}
            <div className="h-10 w-px bg-slate-200"></div>

            {/* Profil */}
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Admin"
                className="w-9 h-9 rounded-full object-cover border-2 border-indigo-100"
              />

              <div className="hidden md:block text-sm">
                <p className="font-medium text-slate-700">
                  Mme Admin
                </p>

                <p className="text-slate-500 text-xs">
                  Administrateur
                </p>
              </div>
            </div>

          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}