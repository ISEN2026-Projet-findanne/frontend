import React from "react";
import { useNavigate } from "react-router";
import { Button, Card, CardContent, Input } from "../components/ui";

export function LoginView() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl mx-auto flex items-center justify-center font-bold text-4xl text-white shadow-lg mb-4">
            E
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">EduTrack</h1>
          <p className="text-slate-500 mt-2">Espace Enseignant</p>
        </div>

        <Card className="border-none shadow-xl shadow-slate-200/50">
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email académique</label>
                <Input type="email" placeholder="prenom.nom@ecole.fr" defaultValue="enseignant@ecole.fr" required />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-700">Mot de passe</label>
                  <a href="#" className="text-sm text-orange-600 hover:text-orange-700 font-medium">Mot de passe oublié ?</a>
                </div>
                <Input type="password" placeholder="••••••••" defaultValue="password" required />
              </div>

              <Button type="submit" className="w-full py-2.5 text-base mt-2">
                Se connecter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
