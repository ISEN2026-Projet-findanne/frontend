import React from "react";

export default function Subjects() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Matières</h1>
          <p className="text-gray-500">
            Gestion des matières et coefficients
          </p>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-xl">
          Ajouter une matière
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-gray-500">Total matières</h2>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-gray-500">Semestre 1</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-gray-500">Semestre 2</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-gray-500">Taux réussite</h2>
          <p className="text-3xl font-bold mt-2 text-green-500">84%</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-4">Matière</th>
              <th>Coefficient</th>
              <th>Semestre</th>
              <th>Taux réussite</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b h-16">
              <td>Mathématiques</td>
              <td>4</td>
              <td>S1</td>
              <td className="text-green-500">89%</td>
            </tr>

            <tr className="border-b h-16">
              <td>Algorithmique</td>
              <td>3</td>
              <td>S1</td>
              <td className="text-orange-500">67%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}