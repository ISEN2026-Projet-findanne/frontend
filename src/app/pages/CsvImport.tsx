import React from "react";

export default function CsvImport() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Import CSV
          </h1>

          <p className="text-gray-500 mt-2">
            Harmonisation intelligente des fichiers CSV
          </p>
        </div>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl shadow">
          Importer fichier
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-10 mb-8 border-2 border-dashed border-gray-300 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Drag & Drop CSV
        </h2>

        <p className="text-gray-500 mb-6">
          Déposez votre fichier CSV ici
        </p>

        <button className="bg-purple-700 text-white px-6 py-3 rounded-xl">
          Choisir un fichier
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">
            Mapping Colonnes
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-4">CSV</th>
                <th>Champ système</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b h-16">
                <td>student_name</td>
                <td>Nom étudiant</td>
              </tr>

              <tr className="border-b h-16">
                <td>grade</td>
                <td>Note</td>
              </tr>

              <tr className="border-b h-16">
                <td>subject</td>
                <td>Matière</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">
            Validation des données
          </h2>

          <div className="space-y-4">
            <div className="bg-green-100 text-green-700 p-4 rounded-xl">
              124 lignes valides
            </div>

            <div className="bg-orange-100 text-orange-700 p-4 rounded-xl">
              6 lignes incomplètes
            </div>

            <div className="bg-red-100 text-red-700 p-4 rounded-xl">
              2 erreurs détectées
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 mt-8">
        <h2 className="text-xl font-bold mb-6">
          Aperçu des données
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-4">Étudiant</th>
              <th>Matière</th>
              <th>Note</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b h-16">
              <td>Ali Hassan</td>
              <td>Mathématiques</td>
              <td>14</td>
            </tr>

            <tr className="border-b h-16">
              <td>Sarah Ahmed</td>
              <td>Physique</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}