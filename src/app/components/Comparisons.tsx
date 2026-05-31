import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GitCompare } from "lucide-react";

const interPromotionsData = [
  { promotion: "INFO1", moyenne: 13.2, reussite: 78, etudiants: 120 },
  { promotion: "INFO2", moyenne: 13.8, reussite: 82, etudiants: 115 },
  { promotion: "INFO3", moyenne: 14.1, reussite: 85, etudiants: 108 },
  { promotion: "GEII1", moyenne: 12.8, reussite: 75, etudiants: 95 },
  { promotion: "GEII2", moyenne: 13.1, reussite: 79, etudiants: 88 },
  { promotion: "GEII3", moyenne: 13.5, reussite: 83, etudiants: 82 },
  { promotion: "GMP1", moyenne: 12.9, reussite: 76, etudiants: 102 },
  { promotion: "GMP2", moyenne: 13.3, reussite: 80, etudiants: 98 },
];

const interAnneesData = [
  { annee: "2021-2022", moyenne: 12.3, reussite: 74 },
  { annee: "2022-2023", moyenne: 12.6, reussite: 76 },
  { annee: "2023-2024", moyenne: 12.9, reussite: 78 },
  { annee: "2024-2025", moyenne: 13.2, reussite: 82 },
];

const groupesData = [
  { groupe: "TD1", min: 8.5, q1: 11.2, median: 13.5, q3: 15.1, max: 18.2, moyenne: 13.3 },
  { groupe: "TD2", min: 7.8, q1: 10.9, median: 13.2, q3: 14.8, max: 17.9, moyenne: 13.0 },
  { groupe: "TD3", min: 8.2, q1: 11.5, median: 13.8, q3: 15.4, max: 18.5, moyenne: 13.6 },
  { groupe: "TD4", min: 8.0, q1: 11.0, median: 13.3, q3: 15.0, max: 18.0, moyenne: 13.2 },
  { groupe: "TD5", min: 7.5, q1: 10.8, median: 13.1, q3: 14.9, max: 17.8, moyenne: 12.9 },
];

const matieresComparison = [
  { matiere: "Math", INFO1: 12.5, INFO2: 13.1, GEII1: 10.2, GMP1: 11.8 },
  { matiere: "Physique", INFO1: 13.2, INFO2: 12.8, GEII1: 14.1, GMP1: 13.5 },
  { matiere: "Info", INFO1: 14.8, INFO2: 15.2, GEII1: 9.8, GMP1: 10.5 },
  { matiere: "Anglais", INFO1: 13.5, INFO2: 13.8, GEII1: 13.6, GMP1: 13.4 },
  { matiere: "Comm.", INFO1: 14.2, INFO2: 14.5, GEII1: 14.8, GMP1: 14.3 },
];

export function Comparisons() {
  const [viewMode, setViewMode] = useState<"promotions" | "annees" | "groupes">("promotions");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <GitCompare className="size-8 text-purple-600" />
          Comparaisons
        </h1>
        <p className="text-gray-600 mt-2">
          Analyses comparatives entre promotions, années et groupes
        </p>
      </div>

      {/* Mode selector */}
      <div className="bg-white rounded-lg shadow-sm p-2 border border-gray-200 inline-flex gap-2">
        <button
          onClick={() => setViewMode("promotions")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            viewMode === "promotions"
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Inter-Promotions
        </button>
        <button
          onClick={() => setViewMode("annees")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            viewMode === "annees"
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Inter-Années
        </button>
        <button
          onClick={() => setViewMode("groupes")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            viewMode === "groupes"
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Groupes
        </button>
      </div>

      {/* Comparaison Inter-Promotions */}
      {viewMode === "promotions" && (
        <div className="space-y-6">
          {/* Tableau comparatif */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Comparaison des promotions
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Promotion
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Étudiants
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Moyenne
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Taux réussite
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {interPromotionsData.map((promo, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <span className="font-semibold text-purple-900">{promo.promotion}</span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {promo.etudiants} étudiants
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-gray-800">{promo.moyenne}/20</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-green-600">{promo.reussite}%</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${promo.reussite}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Graphiques promotions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Moyennes par promotion
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={interPromotionsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="promotion" />
                  <YAxis domain={[0, 20]} />
                  <Tooltip />
                  <Bar dataKey="moyenne" fill="#7c3aed" name="Moyenne" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Taux de réussite par promotion
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={interPromotionsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="promotion" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="reussite" fill="#22c55e" name="Taux réussite (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Comparaison par matière */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Comparaison par matière
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={matieresComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="matiere" />
                <YAxis domain={[0, 20]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="INFO1" fill="#7c3aed" />
                <Bar dataKey="INFO2" fill="#f97316" />
                <Bar dataKey="GEII1" fill="#3b82f6" />
                <Bar dataKey="GMP1" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Comparaison Inter-Années */}
      {viewMode === "annees" && (
        <div className="space-y-6">
          {/* Tableau années */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Évolution sur les dernières années
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Année académique
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Moyenne générale
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Taux réussite
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Évolution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {interAnneesData.map((annee, index) => {
                    const prevYear = index > 0 ? interAnneesData[index - 1] : null;
                    const evolution = prevYear
                      ? ((annee.moyenne - prevYear.moyenne) / prevYear.moyenne) * 100
                      : 0;
                    return (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <span className="font-semibold text-gray-800">{annee.annee}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-semibold text-gray-800">{annee.moyenne}/20</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-semibold text-green-600">{annee.reussite}%</span>
                        </td>
                        <td className="py-3 px-4">
                          {index > 0 && (
                            <span
                              className={`inline-flex items-center gap-1 text-sm font-medium ${
                                evolution >= 0 ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {evolution >= 0 ? "↑" : "↓"} {Math.abs(evolution).toFixed(1)}%
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Graphiques évolution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Évolution de la moyenne
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={interAnneesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="annee" />
                  <YAxis domain={[0, 20]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="moyenne"
                    stroke="#7c3aed"
                    strokeWidth={3}
                    name="Moyenne"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Évolution du taux de réussite
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={interAnneesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="annee" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="reussite"
                    stroke="#22c55e"
                    strokeWidth={3}
                    name="Taux réussite (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Comparaison Groupes */}
      {viewMode === "groupes" && (
        <div className="space-y-6">
          {/* Box plot visuel */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Distribution des notes par groupe (Box Plot)
            </h3>
            <div className="space-y-4">
              {groupesData.map((group, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{group.groupe}</span>
                    <div className="flex gap-4 text-xs text-gray-600">
                      <span>Min: {group.min}</span>
                      <span>Q1: {group.q1}</span>
                      <span className="font-semibold">Médiane: {group.median}</span>
                      <span>Q3: {group.q3}</span>
                      <span>Max: {group.max}</span>
                    </div>
                  </div>
                  <div className="relative h-12 bg-gray-100 rounded">
                    {/* Whisker min to max */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-400"
                      style={{
                        left: `${(group.min / 20) * 100}%`,
                        width: `${((group.max - group.min) / 20) * 100}%`,
                      }}
                    />
                    {/* Box Q1 to Q3 */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-orange-500 to-purple-600 rounded"
                      style={{
                        left: `${(group.q1 / 20) * 100}%`,
                        width: `${((group.q3 - group.q1) / 20) * 100}%`,
                      }}
                    />
                    {/* Median line */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-10 w-0.5 bg-white"
                      style={{ left: `${(group.median / 20) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tableau comparatif groupes */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Statistiques détaillées par groupe
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Groupe
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Moyenne
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Médiane
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Min - Max
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {groupesData.map((group, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <span className="font-semibold text-purple-900">{group.groupe}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-gray-800">{group.moyenne}/20</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-gray-800">{group.median}/20</span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {group.min} - {group.max}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Graphique moyennes groupes */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Comparaison des moyennes
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={groupesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="groupe" />
                <YAxis domain={[0, 20]} />
                <Tooltip />
                <Bar dataKey="moyenne" fill="#7c3aed" name="Moyenne" />
                <Bar dataKey="median" fill="#f97316" name="Médiane" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
