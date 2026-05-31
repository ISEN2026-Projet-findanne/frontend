import { useState } from "react";
import { Link } from "react-router";

import {
  Search,
  Filter,
} from "lucide-react";

const studentsData = [
  {
    id: "1",
    name: "Martin Dupont",
    promo: "INFO1",
    groupe: "TD1",
    moyenne: 8.2,
    risque: "Critique",
    statut: "En cours",
  },
  {
    id: "2",
    name: "Sophie Bernard",
    promo: "INFO2",
    groupe: "TD2",
    moyenne: 15.8,
    risque: "Faible",
    statut: "En cours",
  },
  {
    id: "3",
    name: "Lucas Martin",
    promo: "GEII1",
    groupe: "TD1",
    moyenne: 12.3,
    risque: "Modéré",
    statut: "En cours",
  },
  {
    id: "4",
    name: "Emma Petit",
    promo: "INFO1",
    groupe: "TD3",
    moyenne: 13.7,
    risque: "Faible",
    statut: "En cours",
  },
  {
    id: "5",
    name: "Thomas Robert",
    promo: "INFO3",
    groupe: "TD2",
    moyenne: 9.5,
    risque: "Élevé",
    statut: "En cours",
  },
  {
    id: "6",
    name: "Julie Moreau",
    promo: "INFO2",
    groupe: "TD1",
    moyenne: 14.5,
    risque: "Faible",
    statut: "En cours",
  },
  {
    id: "7",
    name: "Alexandre Dubois",
    promo: "GEII1",
    groupe: "TD2",
    moyenne: 11.8,
    risque: "Modéré",
    statut: "En cours",
  },
  {
    id: "8",
    name: "Claire Laurent",
    promo: "INFO1",
    groupe: "TD1",
    moyenne: 16.2,
    risque: "Faible",
    statut: "En cours",
  },
];

const promotionsHistory = [
  {
    annee: "2023",
    promotion: "INFO1",
    moyenne: 11.2,
    reussite: 68,
    echec: 32,
    risque: 14,
  },
  {
    annee: "2024",
    promotion: "INFO1",
    moyenne: 12.6,
    reussite: 74,
    echec: 26,
    risque: 9,
  },
  {
    annee: "2025",
    promotion: "INFO1",
    moyenne: 13.4,
    reussite: 82,
    echec: 18,
    risque: 5,
  },

  {
    annee: "2023",
    promotion: "INFO2",
    moyenne: 10.8,
    reussite: 62,
    echec: 38,
    risque: 18,
  },
  {
    annee: "2024",
    promotion: "INFO2",
    moyenne: 12.1,
    reussite: 71,
    echec: 29,
    risque: 11,
  },
  {
    annee: "2025",
    promotion: "INFO2",
    moyenne: 13,
    reussite: 79,
    echec: 21,
    risque: 7,
  },
];

const getBadgeColor = (risque: string) => {
  switch (risque) {
    case "Critique":
      return "bg-red-100 text-red-800";

    case "Élevé":
      return "bg-orange-100 text-orange-800";

    case "Modéré":
      return "bg-yellow-100 text-yellow-800";

    case "Faible":
      return "bg-green-100 text-green-800";

    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPromo, setSelectedPromo] = useState("all");
  const [selectedRisque, setSelectedRisque] = useState("all");

  const [selectedYear1, setSelectedYear1] = useState("2023");
  const [selectedYear2, setSelectedYear2] = useState("2025");
  const [selectedPromotion, setSelectedPromotion] =
    useState("INFO1");

  const promo1 = promotionsHistory.find(
    (p) =>
      p.annee === selectedYear1 &&
      p.promotion === selectedPromotion
  );

  const promo2 = promotionsHistory.find(
    (p) =>
      p.annee === selectedYear2 &&
      p.promotion === selectedPromotion
  );

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPromo =
      selectedPromo === "all" ||
      student.promo === selectedPromo;

    const matchesRisque =
      selectedRisque === "all" ||
      student.risque === selectedRisque;

    return (
      matchesSearch &&
      matchesPromo &&
      matchesRisque
    );
  });

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Vue Étudiants
        </h1>

        <p className="text-gray-600 mt-2">
          Recherchez et analysez les performances
          de tous les étudiants
        </p>
      </div>

      {/* FILTERS */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* SEARCH */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rechercher un étudiant
            </label>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />

              <input
                type="text"
                placeholder="Nom de l'étudiant..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* PROMOTION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Promotion
            </label>

            <select
              value={selectedPromo}
              onChange={(e) =>
                setSelectedPromo(e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="all">Toutes</option>
              <option value="INFO1">INFO1</option>
              <option value="INFO2">INFO2</option>
              <option value="INFO3">INFO3</option>
              <option value="GEII1">GEII1</option>
            </select>
          </div>

          {/* RISQUE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Niveau de risque
            </label>

            <select
              value={selectedRisque}
              onChange={(e) =>
                setSelectedRisque(e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="all">Tous</option>
              <option value="Critique">
                Critique
              </option>
              <option value="Élevé">
                Élevé
              </option>
              <option value="Modéré">
                Modéré
              </option>
              <option value="Faible">
                Faible
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* RESULTATS */}
      <div>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">
            {filteredStudents.length}
          </span>{" "}
          étudiant
          {filteredStudents.length > 1 ? "s" : ""}
          trouvé
          {filteredStudents.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* TABLEAU */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Étudiant
                </th>

                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Promotion
                </th>

                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Groupe
                </th>

                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Moyenne
                </th>

                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Risque
                </th>

                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Statut
                </th>

                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">

                      <div className="size-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <span className="text-sm font-medium text-gray-800">
                        {student.name}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-sm text-gray-600">
                    {student.promo}
                  </td>

                  <td className="py-3 px-4 text-sm text-gray-600">
                    {student.groupe}
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`text-sm font-semibold ${
                        student.moyenne < 10
                          ? "text-red-600"
                          : student.moyenne >= 14
                          ? "text-green-600"
                          : "text-gray-800"
                      }`}
                    >
                      {student.moyenne}/20
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getBadgeColor(
                        student.risque
                      )}`}
                    >
                      {student.risque}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-sm text-gray-600">
                    {student.statut}
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex gap-2">

                      <Link
                        to={`/students/${student.id}`}
                        className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Voir fiche
                      </Link>

                      <Link
                        to={`/simulation?student=${student.id}`}
                        className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                      >
                        Simuler
                      </Link>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* COMPARAISON DES PROMOTIONS */}
      <div className="bg-white rounded-xl shadow-sm p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Comparaison des promotions par année
        </h2>

        {/* SELECTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          {/* PROMOTION */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Promotion
            </label>

            <select
              value={selectedPromotion}
              onChange={(e) =>
                setSelectedPromotion(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="INFO1">INFO1</option>
              <option value="INFO2">INFO2</option>
            </select>
          </div>

          {/* ANNEE 1 */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Première année
            </label>

            <select
              value={selectedYear1}
              onChange={(e) =>
                setSelectedYear1(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          {/* ANNEE 2 */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Deuxième année
            </label>

            <select
              value={selectedYear2}
              onChange={(e) =>
                setSelectedYear2(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
        </div>

        {/* KPI */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* MOYENNE */}
          <div className="bg-purple-50 p-5 rounded-xl">
            <p className="text-sm text-gray-500 mb-2">
              Moyenne générale
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">
                {promo1?.moyenne}/20
              </span>

              <span className="text-xl font-bold text-purple-700">
                {promo2?.moyenne}/20
              </span>
            </div>
          </div>

          {/* REUSSITE */}
          <div className="bg-green-50 p-5 rounded-xl">
            <p className="text-sm text-gray-500 mb-2">
              Taux de réussite
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">
                {promo1?.reussite}%
              </span>

              <span className="text-xl font-bold text-green-700">
                {promo2?.reussite}%
              </span>
            </div>
          </div>

          {/* ECHEC */}
          <div className="bg-red-50 p-5 rounded-xl">
            <p className="text-sm text-gray-500 mb-2">
              Taux d’échec
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">
                {promo1?.echec}%
              </span>

              <span className="text-xl font-bold text-red-700">
                {promo2?.echec}%
              </span>
            </div>
          </div>

          {/* RISQUE */}
          <div className="bg-orange-50 p-5 rounded-xl">
            <p className="text-sm text-gray-500 mb-2">
              Étudiants à risque
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">
                {promo1?.risque}
              </span>

              <span className="text-xl font-bold text-orange-700">
                {promo2?.risque}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}