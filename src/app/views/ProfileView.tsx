import React from "react";
import { MOCK_USER } from "../mockData";
import { Card, CardContent, Button } from "../components/ui";

export function ProfileView() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Mon Profil</h1>
      </div>

      <Card>
        <CardContent className="p-8 flex flex-col items-center text-center">
          <img 
            src={MOCK_USER.avatar} 
            alt={MOCK_USER.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-50 mb-4"
          />
          <h2 className="text-2xl font-bold text-slate-900">{MOCK_USER.name}</h2>
          <p className="text-slate-500">{MOCK_USER.role}</p>
          
          <div className="mt-8 w-full space-y-4">
            <Button variant="outline" className="w-full">Modifier le profil</Button>
            <Button variant="danger" className="w-full">Se déconnecter</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
