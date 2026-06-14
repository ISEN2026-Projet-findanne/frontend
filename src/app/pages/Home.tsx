import { GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  const roles = [
    {
      id: "admin",
      emoji: "👨‍💼",
      title: "Administrateur",
      description: "Gestion des étudiants, groupes, matières et utilisateurs.",
      path: "/login/admin"
    },
    {
      id: "enseignant",
      emoji: "👨‍🏫",
      title: "Enseignant",
      description: "Suivi des notes, absences et progression des étudiants.",
      path: "/login/enseignant"
    },
    {
      id: "responsable",
      emoji: "📊",
      title: "Responsable pédagogique",
      description: "Analyse des performances, alertes et indicateurs décisionnels.",
      path: "/login/responsable"
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="text-center max-w-3xl mb-16">
          <div className="inline-flex items-center justify-center p-5 bg-white shadow-sm rounded-full mb-8 border border-slate-100">
            <GraduationCap className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Plateforme de Suivi Pédagogique
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Outil d'aide à la décision et de suivi des performances étudiantes.
          </p>
          <div className="mt-8 text-sm font-medium text-slate-400 uppercase tracking-widest">
            Choisissez votre espace
          </div>
        </div>

        {/* Role Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {roles.map((role) => (
            <div 
              key={role.id}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200"
            >
              <div className="text-6xl mb-6 mt-2 select-none">{role.emoji}</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{role.title}</h2>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                {role.description}
              </p>
              <button 
                onClick={() => navigate(role.path)}
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-semibold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm"
              >
                Accéder <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center border-t border-slate-200 bg-white mt-auto">
        <p className="text-slate-600 font-medium">© 2026 Plateforme de Suivi Pédagogique</p>
        <p className="text-slate-500 text-sm mt-2">Projet universitaire - Aide à la décision pédagogique</p>
      </footer>
    </div>
  );
}
