import React from "react";

export default function Settings() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Paramètres</h1>

      <p className="text-gray-500 mb-8">
        Configuration générale de la plateforme
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-xl mb-4">
            Année académique
          </h2>

          <input
            className="border rounded-xl px-4 py-2 w-full"
            placeholder="2025-2026"
          />
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-xl mb-4">
            Sécurité
          </h2>

          <button className="bg-purple-700 text-white px-4 py-2 rounded-xl">
            Modifier mot de passe
          </button>
        </div>
      </div>
    </div>
  );
}