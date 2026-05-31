import { useParams } from "react-router";
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
  Cell,
} from "recharts";
import { Users, TrendingUp, TrendingDown, Target } from "lucide-react";

const tabs = ["Étudiants", "Matières", "KPI", "Comparaison", "Historique"];

const studentsData = [
  { name: "Martin Dupont", moyenne: 8.2, statut: "À risque", groupe: "TD1" },
  { name: "Sophie Bernard", moyenne: 15.8, statut: "Excellent", groupe: "TD1" },
  { name: "Lucas Martin", moyenne: 12.3, statut: "Bon", groupe: "TD2" },
  { name: "Emma Petit", moyenne: 13.7, statut: "Bon", groupe: "TD1" },
  { name: "Thomas Robert", moyenne: 9.5, statut: "À risque", groupe: "TD3" },
];

const matieresData = [
  { matiere: "Mathématiques", moyenne: 12.5, min: 6.5, max: 18.5, reussite: 75 },
  { matiere: "Physique", moyenne: 13.2, min: 7.0, max: 19.0, reussite: 82 },
  { matiere: "Informatique", moyenne: 14.8, min: 9.5, max: 19.5, reussite: 90 },
  { matiere: "Anglais", moyenne: 13.5, min: 8.0, max: 18.0, reussite: 85 },
  { matiere: "Communication", moyenne: 14.2, min: 10.0, max: 19.0, reussite: 88 },
];

const heatmapData = [
  { matiere: "Mathématiques", TD1: 13.2, TD2: 12.1, TD3: 12.3, TD4: 12.8 },
  { matiere: "Physique", TD1: 13.5, TD2: 13.0, TD3: 13.1, TD4: 13.4 },
  { matiere: "Informatique", TD1: 15.1, TD2: 14.5, TD3: 14.8, TD4: 14.9 },
  { matiere: "Anglais", TD1: 13.8, TD2: 13.2, TD3: 13.5, TD4: 13.6 },
  { matiere: "Communication", TD1: 14.5, TD2: 14.0, TD3: 14.2, TD4: 14.3 },
];

const evolutionData = [
  { mois: "Sept", moyenne: 11.2 },
  { mois: "Oct", moyenne: 11.8 },
  { mois: "Nov", moyenne: 12.3 },
  { mois: "Déc", moyenne: 12.1 },
  { mois: "Jan", moyenne: 12.5 },
  { mois: "Fév", moyenne: 13.1 },
  { mois: "Mar", moyenne: 13.4 },
  { mois: "Avr", moyenne: 13.7 },
];

const getColor = (value: number) => {
  if (value < 10) return "#ef4444";
  if (value < 12) return "#f97316";
  if (value < 14) return "#eab308";
  return "#22c55e";
};

export function PromotionDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Étudiants");

  const promotionName = id?.toUpperCase() || "INFO1";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{promotionName}</h1>
        <p className="text-gray-600 mt-2">Analyse détaillée de la promotion</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Users className="size-5 text-purple-600" />
            <span className="text-sm text-gray-600">Étudiants</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">120</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Target className="size-5 text-blue-600" />
            <span className="text-sm text-gray-600">Moyenne</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">13.2/20</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="size-5 text-green-600" />
            <span className="text-sm text-gray-600">Taux réussite</span>
          </div>
          <p className="text-2xl font-bold text-green-600">78%</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="size-5 text-red-600" />
            <span className="text-sm text-gray-600">Taux échec</span>
          </div>
          <p className="text-2xl font-bold text-red-600">22%</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === "Étudiants" && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Étudiant
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Groupe
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Moyenne
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentsData.map((student, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-800">{student.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{student.groupe}</td>
                      <td className="py-3 px-4 text-sm font-semibold">{student.moyenne}/20</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                            student.statut === "À risque"
                              ? "bg-red-100 text-red-800"
                              : student.statut === "Excellent"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {student.statut}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "Matières" && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Matière
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Moyenne
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Min
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Max
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Taux réussite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matieresData.map((matiere, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm font-medium text-gray-800">
                        {matiere.matiere}
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold">{matiere.moyenne}/20</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{matiere.min}/20</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{matiere.max}/20</td>
                      <td className="py-3 px-4 text-sm font-semibold text-green-600">
                        {matiere.reussite}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "KPI" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Moyenne</p>
                  <p className="text-2xl font-bold text-gray-800">13.2</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Médiane</p>
                  <p className="text-2xl font-bold text-gray-800">13.5</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Écart-type</p>
                  <p className="text-2xl font-bold text-gray-800">2.8</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Min - Max</p>
                  <p className="text-2xl font-bold text-gray-800">6.5 - 19.0</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Heatmap par groupe</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-3">Matière</th>
                        <th className="text-center py-2 px-3">TD1</th>
                        <th className="text-center py-2 px-3">TD2</th>
                        <th className="text-center py-2 px-3">TD3</th>
                        <th className="text-center py-2 px-3">TD4</th>
                      </tr>
                    </thead>
                    <tbody>
                      {heatmapData.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-3 font-medium">{row.matiere}</td>
                          {(["TD1", "TD2", "TD3", "TD4"] as const).map((td) => (
                            <td key={td} className="py-3 px-3">
                              <div
                                className="text-center py-2 px-3 rounded font-semibold text-white"
                                style={{ backgroundColor: getColor(row[td]) }}
                              >
                                {row[td].toFixed(1)}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Comparaison" && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                Comparaison des performances par groupe
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={heatmapData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="matiere" />
                  <YAxis domain={[0, 20]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="TD1" fill="#7c3aed" />
                  <Bar dataKey="TD2" fill="#f97316" />
                  <Bar dataKey="TD3" fill="#3b82f6" />
                  <Bar dataKey="TD4" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === "Historique" && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                Évolution de la moyenne au fil du temps
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={evolutionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mois" />
                  <YAxis domain={[0, 20]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="moyenne"
                    stroke="#7c3aed"
                    strokeWidth={2}
                    name="Moyenne promotion"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
