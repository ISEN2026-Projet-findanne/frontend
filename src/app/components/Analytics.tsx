import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Filter } from "lucide-react";

const distributionData = [
  { tranche: "<10", nombre: 125, pourcentage: 13.6 },
  { tranche: "10-12", nombre: 245, pourcentage: 26.6 },
  { tranche: "12-14", nombre: 312, pourcentage: 33.9 },
  { tranche: "14-16", nombre: 198, pourcentage: 21.5 },
  { tranche: "16+", nombre: 40, pourcentage: 4.4 },
];

const heatmapData = [
  { matiere: "Mathématiques", moyenne: 12.5, ecartType: 2.8, difficulte: "Élevée" },
  { matiere: "Physique", moyenne: 13.2, ecartType: 2.3, difficulte: "Moyenne" },
  { matiere: "Informatique", moyenne: 14.8, ecartType: 1.9, difficulte: "Faible" },
  { matiere: "Anglais", moyenne: 13.5, ecartType: 2.1, difficulte: "Moyenne" },
  { matiere: "Communication", moyenne: 14.2, ecartType: 1.7, difficulte: "Faible" },
  { matiere: "Électronique", moyenne: 11.8, ecartType: 3.2, difficulte: "Élevée" },
  { matiere: "Mécanique", moyenne: 12.9, ecartType: 2.5, difficulte: "Moyenne" },
];

const radarPromotionsData = [
  { matiere: "Math", INFO1: 12.5, INFO2: 13.1, GEII1: 10.2 },
  { matiere: "Physique", INFO1: 13.2, INFO2: 12.8, GEII1: 14.1 },
  { matiere: "Info", INFO1: 14.8, INFO2: 15.2, GEII1: 9.8 },
  { matiere: "Anglais", INFO1: 13.5, INFO2: 13.8, GEII1: 13.6 },
  { matiere: "Comm.", INFO1: 14.2, INFO2: 14.5, GEII1: 14.8 },
];

const evolutionData = [
  { semestre: "S1 2023", moyenne: 12.1, reussite: 75 },
  { semestre: "S2 2023", moyenne: 12.8, reussite: 78 },
  { semestre: "S1 2024", moyenne: 12.5, reussite: 76 },
  { semestre: "S2 2024", moyenne: 13.1, reussite: 80 },
  { semestre: "S1 2025", moyenne: 13.3, reussite: 82 },
];

const boxPlotGroups = [
  { groupe: "TD1", min: 8.5, q1: 11.2, median: 13.5, q3: 15.1, max: 18.2 },
  { groupe: "TD2", min: 7.8, q1: 10.9, median: 13.2, q3: 14.8, max: 17.9 },
  { groupe: "TD3", min: 8.2, q1: 11.5, median: 13.8, q3: 15.4, max: 18.5 },
  { groupe: "TD4", min: 8.0, q1: 11.0, median: 13.3, q3: 15.0, max: 18.0 },
];

const getColorForDifficulty = (difficulty: string) => {
  switch (difficulty) {
    case "Élevée":
      return "#ef4444";
    case "Moyenne":
      return "#f97316";
    case "Faible":
      return "#22c55e";
    default:
      return "#gray-500";
  }
};

export function Analytics() {
  const [selectedPromo, setSelectedPromo] = useState("all");
  const [selectedSemestre, setSelectedSemestre] = useState("all");
  const [selectedAnnee, setSelectedAnnee] = useState("2024-2025");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Analytics & KPI</h1>
        <p className="text-gray-600 mt-2">
          Analyse approfondie des performances et indicateurs clés
        </p>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="size-5 text-gray-600" />
          <h3 className="font-semibold text-gray-800">Filtres</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Année
            </label>
            <select
              value={selectedAnnee}
              onChange={(e) => setSelectedAnnee(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Semestre
            </label>
            <select
              value={selectedSemestre}
              onChange={(e) => setSelectedSemestre(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">Tous</option>
              <option value="s1">Semestre 1</option>
              <option value="s2">Semestre 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Promotion
            </label>
            <select
              value={selectedPromo}
              onChange={(e) => setSelectedPromo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">Toutes</option>
              <option value="INFO1">INFO1</option>
              <option value="INFO2">INFO2</option>
              <option value="INFO3">INFO3</option>
              <option value="GEII1">GEII1</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Matière
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option value="all">Toutes</option>
              <option value="math">Mathématiques</option>
              <option value="phys">Physique</option>
              <option value="info">Informatique</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Globaux */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Moyenne</p>
          <p className="text-2xl font-bold text-gray-800">13.2</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Minimum</p>
          <p className="text-2xl font-bold text-red-600">6.5</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Maximum</p>
          <p className="text-2xl font-bold text-green-600">19.5</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Écart-type</p>
          <p className="text-2xl font-bold text-gray-800">2.8</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Médiane</p>
          <p className="text-2xl font-bold text-gray-800">13.5</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Taux réussite</p>
          <p className="text-2xl font-bold text-green-600">82%</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Taux échec</p>
          <p className="text-2xl font-bold text-red-600">18%</p>
        </div>
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribution des notes */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Distribution des notes
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={distributionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tranche" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="nombre" name="Nombre d'étudiants">
                {distributionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      index === 0
                        ? "#ef4444"
                        : index === 1
                        ? "#f97316"
                        : index === 2
                        ? "#eab308"
                        : index === 3
                        ? "#22c55e"
                        : "#16a34a"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Comparaison promotions (Radar) */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Comparaison inter-promotions
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarPromotionsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="matiere" />
              <PolarRadiusAxis domain={[0, 20]} />
              <Radar
                name="INFO1"
                dataKey="INFO1"
                stroke="#7c3aed"
                fill="#7c3aed"
                fillOpacity={0.3}
              />
              <Radar
                name="INFO2"
                dataKey="INFO2"
                stroke="#f97316"
                fill="#f97316"
                fillOpacity={0.3}
              />
              <Radar
                name="GEII1"
                dataKey="GEII1"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
              />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap matières difficiles */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Analyse des matières - Niveau de difficulté
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Matière
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Moyenne
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Écart-type
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Difficulté
                </th>
              </tr>
            </thead>
            <tbody>
              {heatmapData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{row.matiere}</td>
                  <td className="py-3 px-4">
                    <span className="font-semibold">{row.moyenne}/20</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{row.ecartType}</td>
                  <td className="py-3 px-4">
                    <span
                      className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-white"
                      style={{
                        backgroundColor: getColorForDifficulty(row.difficulte),
                      }}
                    >
                      {row.difficulte}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Box Plot et Évolution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Box Plot groupes */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Comparaison des groupes (Box Plot)
          </h3>
          <div className="space-y-4">
            {boxPlotGroups.map((group, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {group.groupe}
                  </span>
                  <span className="text-sm text-gray-600">
                    Médiane: {group.median}
                  </span>
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
                    className="absolute top-1/2 -translate-y-1/2 h-8 bg-purple-500 rounded"
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
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Min: {group.min}</span>
                  <span>Max: {group.max}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Évolution temporelle */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Évolution temporelle
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={evolutionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="semestre" />
              <YAxis yAxisId="left" domain={[0, 20]} />
              <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="moyenne"
                stroke="#7c3aed"
                strokeWidth={2}
                name="Moyenne (/20)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="reussite"
                stroke="#22c55e"
                strokeWidth={2}
                name="Taux réussite (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
