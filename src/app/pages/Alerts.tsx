import React from "react";

export default function Alerts() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Alertes</h1>

      <p className="text-gray-500 mb-8">
        Étudiants à risque et alertes pédagogiques
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-red-100 rounded-2xl p-6">
          <h2 className="text-red-600 font-bold text-xl">
            Critique
          </h2>

          <p className="mt-4 text-4xl font-bold">12</p>
        </div>

        <div className="bg-orange-100 rounded-2xl p-6">
          <h2 className="text-orange-600 font-bold text-xl">
            Élevé
          </h2>

          <p className="mt-4 text-4xl font-bold">24</p>
        </div>

        <div className="bg-yellow-100 rounded-2xl p-6">
          <h2 className="text-yellow-600 font-bold text-xl">
            Modéré
          </h2>

          <p className="mt-4 text-4xl font-bold">38</p>
        </div>
      </div>
    </div>
  );
}