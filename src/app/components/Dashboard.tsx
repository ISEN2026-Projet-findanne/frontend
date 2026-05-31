import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  Target
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
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

const kpiData = [
  { label: "Nombre promotions", value: "8", icon: GraduationCap, color: "bg-purple-500" },
  { label: "Nombre étudiants", value: "920", icon: Users, color: "bg-blue-500" },
  { label: "Taux réussite global", value: "82%", icon: TrendingUp, color: "bg-green-500" },
  { label: "Taux échec global", value: "18%", icon: TrendingDown, color: "bg-red-500" },
  { label: "Étudiants à risque", value: "37", icon: AlertTriangle, color: "bg-orange-500" },
  { label: "Moyenne générale globale", value: "13.2/20", icon: Target, color: "bg-indigo-500" },
];

const evolutionData = [
  { mois: "Sept", s1_2024: 11.2, s2_2024: null, s1_2023: 10.8 },
  { mois: "Oct", s1_2024: 11.8, s2_2024: null, s1_2023: 11.3 },
  { mois: "Nov", s1_2024: 12.3, s2_2024: null, s1_2023: 11.9 },
  { mois: "Déc", s1_2024: 12.1, s2_2024: null, s1_2023: 12.2 },
  { mois: "Jan", s1_2024: null, s2_2024: 12.5, s1_2023: 12.4 },
  { mois: "Fév", s1_2024: null, s2_2024: 13.1, s1_2023: 12.8 },
  { mois: "Mar", s1_2024: null, s2_2024: 13.4, s1_2023: 13.2 },
  { mois: "Avr", s1_2024: null, s2_2024: 13.7, s1_2023: 13.5 },
  { mois: "Mai", s1_2024: null, s2_2024: 14.1, s1_2023: 13.8 },
];

const heatmapData = [
  { matiere: "Mathématiques", INFO1: 12.5, INFO2: 13.1, INFO3: 11.8, GEII1: 10.2 },
  { matiere: "Physique", INFO1: 13.2, INFO2: 12.8, INFO3: 13.5, GEII1: 14.1 },
  { matiere: "Informatique", INFO1: 14.8, INFO2: 15.2, INFO3: 14.3, GEII1: 9.8 },
  { matiere: "Anglais", INFO1: 13.5, INFO2: 13.8, INFO3: 13.2, GEII1: 13.6 },
  { matiere: "Communication", INFO1: 14.2, INFO2: 14.5, INFO3: 14.1, GEII1: 14.8 },
];

const distributionData = [
  { tranche: "<10", nombre: 125 },
  { tranche: "10-12", nombre: 245 },
  { tranche: "12-14", nombre: 312 },
  { tranche: "14-16", nombre: 198 },
  { tranche: "16+", nombre: 40 },
];

const radarData = [
  { matiere: "Math", INFO1: 12.5, INFO2: 13.1, GEII1: 10.2 },
  { matiere: "Physique", INFO1: 13.2, INFO2: 12.8, GEII1: 14.1 },
  { matiere: "Info", INFO1: 14.8, INFO2: 15.2, GEII1: 9.8 },
  { matiere: "Anglais", INFO1: 13.5, INFO2: 13.8, GEII1: 13.6 },
  { matiere: "Communication", INFO1: 14.2, INFO2: 14.5, GEII1: 14.8 },
];

const alertsData = [
  { etudiant: "Martin Dupont", promo: "INFO1", risque: "Critique", niveau: "critique", score: 8.2 },
  { etudiant: "Sophie Bernard", promo: "INFO2", risque: "Élevé", niveau: "élevé", score: 9.8 },
  { etudiant: "Lucas Martin", promo: "GEII1", risque: "Élevé", niveau: "élevé", score: 9.5 },
  { etudiant: "Emma Petit", promo: "INFO1", risque: "Modéré", niveau: "modéré", score: 10.3 },
  { etudiant: "Thomas Robert", promo: "INFO3", risque: "Critique", niveau: "critique", score: 7.8 },
];

const getColor = (value: number) => {
  if (value < 10) return "#ef4444"; // red
  if (value < 12) return "#f97316"; // orange
  if (value < 14) return "#eab308"; // yellow
  return "#22c55e"; // green
};

const getBadgeColor = (niveau: string) => {
  switch (niveau) {
    case "critique": return "bg-red-100 text-red-800";
    case "élevé": return "bg-orange-100 text-orange-800";
    case "modéré": return "bg-yellow-100 text-yellow-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{kpi.label}</p>
                  <p className="text-3xl font-bold text-gray-800">{kpi.value}</p>
                </div>
                <div className={`${kpi.color} p-3 rounded-lg`}>
                  <Icon className="size-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Courbe évolution annuelle */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Évolution des moyennes annuelles
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={evolutionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis domain={[0, 20]} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="s1_2024" 
                stroke="#7c3aed" 
                strokeWidth={2}
                name="Semestre 1 - 2024"
              />
              <Line 
                type="monotone" 
                dataKey="s2_2024" 
                stroke="#f97316" 
                strokeWidth={2}
                name="Semestre 2 - 2024"
              />
              <Line 
                type="monotone" 
                dataKey="s1_2023" 
                stroke="#94a3b8" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="2023"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Histogramme distribution notes */}
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
                  <Cell key={`cell-${index}`} fill={
                    index === 0 ? "#ef4444" :
                    index === 1 ? "#f97316" :
                    index === 2 ? "#eab308" :
                    index === 3 ? "#22c55e" :
                    "#16a34a"
                  } />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap et Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Heatmap matières/promotions */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Heatmap Matières / Promotions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Matière</th>
                  <th className="text-center py-2 px-3">INFO1</th>
                  <th className="text-center py-2 px-3">INFO2</th>
                  <th className="text-center py-2 px-3">INFO3</th>
                  <th className="text-center py-2 px-3">GEII1</th>
                </tr>
              </thead>
              <tbody>
                {heatmapData.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-3 font-medium">{row.matiere}</td>
                    {(['INFO1', 'INFO2', 'INFO3', 'GEII1'] as const).map((promo) => (
                      <td key={promo} className="py-3 px-3">
                        <div 
                          className="text-center py-2 px-3 rounded font-semibold text-white"
                          style={{ backgroundColor: getColor(row[promo]) }}
                        >
                          {row[promo].toFixed(1)}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Radar performance promotion */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Comparaison des promotions
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
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

      {/* Tableau alertes */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Alertes pédagogiques récentes
          </h3>
          <a href="/alerts" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
            Voir toutes les alertes →
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Étudiant
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Promo
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Score
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Niveau
                </th>
              </tr>
            </thead>
            <tbody>
              {alertsData.map((alert, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{alert.etudiant}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{alert.promo}</td>
                  <td className="py-3 px-4 text-sm font-semibold text-gray-800">
                    {alert.score}/20
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getBadgeColor(alert.niveau)}`}>
                      {alert.risque}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
