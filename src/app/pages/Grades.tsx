import React from "react";

export default function Grades() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Notes</h1>
          <p className="text-gray-500">
            Gestion et suivi des notes
          </p>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-xl">
          Importer CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-4">Étudiant</th>
              <th>Matière</th>
              <th>CC</th>
              <th>EF</th>
              <th>Moyenne</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b h-16">
              <td>Ali Hassan</td>
              <td>Mathématiques</td>
              <td>14</td>
              <td>15</td>
              <td className="text-green-500">14.5</td>
            </tr>

            <tr className="border-b h-16">
              <td>Sarah Ahmed</td>
              <td>Physique</td>
              <td>8</td>
              <td>10</td>
              <td className="text-orange-500">9</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}