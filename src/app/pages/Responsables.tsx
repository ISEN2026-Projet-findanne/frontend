import { Search, Eye, Users } from "lucide-react";

const responsables = [
  {
    id: 1,
    nom: "Mme Dupont",
    promo: "INFO 2024",
    niveau: "Année 1",
    etudiants: 145,
  },

  {
    id: 2,
    nom: "M. Martin",
    promo: "INFO 2025",
    niveau: "Année 2",
    etudiants: 132,
  },

  {
    id: 3,
    nom: "Mme Curie",
    promo: "DATA 2024",
    niveau: "Année 3",
    etudiants: 98,
  },
];

export default function Responsables() {
  return (
    <div className="p-8 bg-[#f5f7fb] min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#1e1b4b]">
            Responsables pédagogiques
          </h1>

          <p className="text-gray-500 mt-2">
            Gérez les responsables et leurs promotions
          </p>
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl">
          + Nouveau Responsable
        </button>

      </div>

      {/* KPI */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-2xl p-6 border">

          <div className="flex items-center gap-4">

            <div className="bg-purple-100 p-4 rounded-xl">
              <Users className="text-purple-600" />
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Total Responsables
              </p>

              <h2 className="text-3xl font-bold">
                12
              </h2>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl p-6 border">

          <p className="text-gray-500 text-sm">
            Promotions gérées
          </p>

          <h2 className="text-3xl font-bold mt-2">
            8
          </h2>

        </div>

        <div className="bg-white rounded-2xl p-6 border">

          <p className="text-gray-500 text-sm">
            Étudiants suivis
          </p>

          <h2 className="text-3xl font-bold mt-2">
            875
          </h2>

        </div>

      </div>

      {/* FILTRES */}
      <div className="bg-white rounded-2xl p-5 border mb-6 flex gap-4">

        {/* SEARCH */}
        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl w-[350px]">

          <Search className="text-gray-400 mr-3" size={18} />

          <input
            type="text"
            placeholder="Rechercher un responsable..."
            className="bg-transparent outline-none w-full"
          />

        </div>

        {/* TRI */}
        <select className="border rounded-xl px-4 py-3">

          <option>Toutes les promos</option>
          <option>INFO</option>
          <option>DATA</option>

        </select>

        <select className="border rounded-xl px-4 py-3">

          <option>Tous les niveaux</option>
          <option>Année 1</option>
          <option>Année 2</option>
          <option>Année 3</option>

        </select>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50 border-b">

            <tr className="text-left text-gray-600">

              <th className="p-5">Responsable</th>
              <th className="p-5">Promotion</th>
              <th className="p-5">Niveau</th>
              <th className="p-5">Étudiants</th>
              <th className="p-5">Actions</th>

            </tr>

          </thead>

          <tbody>

            {responsables.map((responsable) => (

              <tr
                key={responsable.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-5 font-medium">
                  {responsable.nom}
                </td>

                <td className="p-5">
                  {responsable.promo}
                </td>

                <td className="p-5">
                  {responsable.niveau}
                </td>

                <td className="p-5">
                  {responsable.etudiants}
                </td>

                <td className="p-5">

                  <button className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition">

                    <Eye size={16} />

                    Voir promo

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}