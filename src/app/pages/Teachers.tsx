import React from "react";

export default function Teachers() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Enseignants</h1>
          <p className="text-gray-500">
            Gestion des enseignants et affectations
          </p>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-xl">
          Ajouter un enseignant
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-4">Nom</th>
              <th>Matière</th>
              <th>Groupes</th>
              <th>Charge</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b h-16">
              <td>Dr Ahmed</td>
              <td>Mathématiques</td>
              <td>3</td>
              <td>18h</td>
            </tr>

            <tr className="border-b h-16">
              <td>Mme Sarah</td>
              <td>Physique</td>
              <td>2</td>
              <td>12h</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}