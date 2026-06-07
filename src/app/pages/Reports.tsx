import React from "react";

export default function Reports() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Rapports PDF
          </h1>

          <p className="text-gray-500 mt-2">
            Génération et export des rapports pédagogiques
          </p>
        </div>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl shadow">
          Générer PDF
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            Rapport Étudiant
          </h2>

          <p className="text-gray-500 mb-6">
            Fiche complète avec résultats,
            progression et score de risque.
          </p>

          <button className="bg-purple-700 text-white px-4 py-2 rounded-xl">
            Générer
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            Rapport Promotion
          </h2>

          <p className="text-gray-500 mb-6">
            KPI, statistiques et comparaisons
            inter-promotions.
          </p>

          <button className="bg-purple-700 text-white px-4 py-2 rounded-xl">
            Générer
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            Rapport Matière
          </h2>

          <p className="text-gray-500 mb-6">
            Résultats détaillés et analyse
            pédagogique par matière.
          </p>

          <button className="bg-purple-700 text-white px-4 py-2 rounded-xl">
            Générer
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 mt-8">
        <h2 className="text-xl font-bold mb-6">
          Historique des exports
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-4">Type</th>
              <th>Date</th>
              <th>Utilisateur</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b h-16">
              <td>Rapport étudiant</td>
              <td>25/05/2026</td>
              <td>Admin</td>
              <td>
                <button className="text-purple-700">
                  Télécharger
                </button>
              </td>
            </tr>

            <tr className="border-b h-16">
              <td>Rapport promotion</td>
              <td>24/05/2026</td>
              <td>Responsable</td>
              <td>
                <button className="text-purple-700">
                  Télécharger
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}