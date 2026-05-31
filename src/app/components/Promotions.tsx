import { Link } from "react-router";
import { Users, TrendingUp, Calendar } from "lucide-react";

const promotionsData = [
  {
    id: "info1",
    name: "INFO1",
    fullName: "Informatique 1ère année",
    students: 120,
    successRate: 78,
    average: 13.2,
    year: "2024-2025",
  },
  {
    id: "info2",
    name: "INFO2",
    fullName: "Informatique 2ème année",
    students: 115,
    successRate: 82,
    average: 13.8,
    year: "2024-2025",
  },
  {
    id: "info3",
    name: "INFO3",
    fullName: "Informatique 3ème année",
    students: 108,
    successRate: 85,
    average: 14.1,
    year: "2024-2025",
  },
  {
    id: "geii1",
    name: "GEII1",
    fullName: "GEII 1ère année",
    students: 95,
    successRate: 75,
    average: 12.8,
    year: "2024-2025",
  },
  {
    id: "geii2",
    name: "GEII2",
    fullName: "GEII 2ème année",
    students: 88,
    successRate: 79,
    average: 13.1,
    year: "2024-2025",
  },
  {
    id: "geii3",
    name: "GEII3",
    fullName: "GEII 3ème année",
    students: 82,
    successRate: 83,
    average: 13.5,
    year: "2024-2025",
  },
  {
    id: "gmp1",
    name: "GMP1",
    fullName: "GMP 1ère année",
    students: 102,
    successRate: 76,
    average: 12.9,
    year: "2024-2025",
  },
  {
    id: "gmp2",
    name: "GMP2",
    fullName: "GMP 2ème année",
    students: 98,
    successRate: 80,
    average: 13.3,
    year: "2024-2025",
  },
];

export function Promotions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Gestion des Promotions</h1>
        <p className="text-gray-600 mt-2">
          Vue d'ensemble de toutes les promotions et leurs performances
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {promotionsData.map((promo) => (
          <Link
            key={promo.id}
            to={`/promotions/${promo.id}`}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-purple-900">{promo.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{promo.fullName}</p>
              </div>
              <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="size-6 text-purple-600" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Users className="size-4 text-gray-500" />
                <span className="text-gray-700">
                  <span className="font-semibold">{promo.students}</span> étudiants
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="size-4 text-gray-500" />
                <span className="text-gray-700">
                  Taux réussite : <span className="font-semibold text-green-600">{promo.successRate}%</span>
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Calendar className="size-4 text-gray-500" />
                <span className="text-gray-700">
                  Moyenne : <span className="font-semibold">{promo.average}/20</span>
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500">{promo.year}</span>
            </div>

            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
              Voir détails
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
