import { useParams, useNavigate } from "react-router";
import { ArrowLeft, GraduationCap, Lock, Mail } from "lucide-react";

export function Login() {
  const { role } = useParams();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "admin") {
      window.location.href = "http://localhost:5175";
    }

    if (role === "enseignant") {
      window.location.href = "http://localhost:5173";
    }

    if (role === "responsable") {
      window.location.href = "http://localhost:5174";
    }
  };

  const getRoleInfo = () => {
    switch(role) {
      case 'admin': 
        return { title: 'Espace Administrateur', emoji: '👨‍💼', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700' };
      case 'enseignant': 
        return { title: 'Espace Enseignant', emoji: '👨‍🏫', color: 'bg-emerald-600', hoverColor: 'hover:bg-emerald-700' };
      case 'responsable': 
        return { title: 'Espace Responsable Pédagogique', emoji: '📊', color: 'bg-violet-600', hoverColor: 'hover:bg-violet-700' };
      default: 
        return { title: 'Connexion', emoji: '🔐', color: 'bg-slate-800', hoverColor: 'hover:bg-slate-900' };
    }
  };

  const info = getRoleInfo();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 min-h-screen relative">
      <button 
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 md:top-8 md:left-8 inline-flex items-center text-slate-500 hover:text-slate-800 transition-colors font-medium bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Retour à l'accueil
      </button>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mt-16 md:mt-0">
        <div className={`${info.color} p-10 text-center text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 text-white opacity-10">
            <GraduationCap className="w-32 h-32" />
          </div>
          <div className="text-5xl mb-4 relative z-10">{info.emoji}</div>
          <h1 className="text-2xl font-bold relative z-10">{info.title}</h1>
          <p className="text-white/80 mt-2 text-sm relative z-10">Veuillez vous identifier pour continuer</p>
        </div>
        
        <div className="p-8 md:p-10">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault();  handleLogin(); }} >
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Adresse email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="email" 
                  className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 transition-shadow bg-slate-50/50 focus:bg-white" 
                  placeholder="prenom.nom@universite.fr"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Mot de passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 transition-shadow bg-slate-50/50 focus:bg-white" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input 
                  id="remember-me" 
                  type="checkbox" 
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 cursor-pointer">
                  Se souvenir de moi
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <button 
              type="submit"
              className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white ${info.color} ${info.hoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors mt-4`}
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
