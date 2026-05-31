import { useParams } from "react-router";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { User, Award, TrendingUp, AlertTriangle, MessageSquare } from "lucide-react";

const radarData = [
  { matiere: "Math", etudiant: 8.5, classe: 12.5 },
  { matiere: "Physique", etudiant: 9.2, classe: 13.2 },
  { matiere: "Info", etudiant: 7.8, classe: 14.8 },
  { matiere: "Anglais", etudiant: 8.9, classe: 13.5 },
  { matiere: "Communication", etudiant: 9.5, classe: 14.2 },
];

const progressionData = [
  { periode: "Sept", note: 7.2 },
  { periode: "Oct", note: 7.8 },
  { periode: "Nov", note: 8.1 },
  { periode: "Déc", note: 8.3 },
  { periode: "Jan", note: 8.5 },
  { periode: "Fév", note: 8.2 },
  { periode: "Mar", note: 8.0 },
  { periode: "Avr", note: 8.4 },
];

const heatmapData = [
  { matiere: "Mathématiques", s1: 8.5, s2: 8.2, annuelle: 8.35 },
  { matiere: "Physique", s1: 9.2, s2: 8.8, annuelle: 9.0 },
  { matiere: "Informatique", s1: 7.8, s2: 7.5, annuelle: 7.65 },
  { matiere: "Anglais", s1: 8.9, s2: 9.1, annuelle: 9.0 },
  { matiere: "Communication", s1: 9.5, s2: 9.8, annuelle: 9.65 },
];

const comparisonData = [
  { matiere: "Math", etudiant: 8.5, classe: 12.5 },
  { matiere: "Physique", etudiant: 9.2, classe: 13.2 },
  { matiere: "Info", etudiant: 7.8, classe: 14.8 },
  { matiere: "Anglais", etudiant: 8.9, classe: 13.5 },
  { matiere: "Comm.", etudiant: 9.5, classe: 14.2 },
];

const remarques = [
  { type: "négatif", enseignant: "Prof. Dupont", matiere: "Mathématiques", texte: "Difficulté en algèbre linéaire" },
  { type: "neutre", enseignant: "Prof. Martin", matiere: "Physique", texte: "Résultats stables mais peut mieux faire" },
  { type: "négatif", enseignant: "Prof. Bernard", matiere: "Informatique", texte: "Manque de rigueur dans le code" },
  { type: "positif", enseignant: "Prof. Simon", matiere: "Anglais", texte: "Bonne participation en cours" },
];

const getColor = (value: number) => {
  if (value < 10) return "#ef4444";
  if (value < 12) return "#f97316";
  if (value < 14) return "#eab308";
  return "#22c55e";
};

export function StudentDetails() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      {/* Header avec infos générales */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-start gap-6">
          <div className="size-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            MD
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">Martin Dupont</h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <span className="font-medium">Promotion: INFO1</span>
              <span>•</span>
              <span className="font-medium">Groupe: TD1</span>
              <span>•</span>
              <span className="font-medium">N° Étudiant: 20240001</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-red-100 text-red-800">
              Risque Critique
            </span>
          </div>
        </div>
      </div>

      {/* KPI Étudiant */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Award className="size-5 text-blue-600" />
            <span className="text-sm text-gray-600">Moyenne S1</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">8.5/20</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Award className="size-5 text-orange-600" />
            <span className="text-sm text-gray-600">Moyenne S2</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">8.0/20</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Award className="size-5 text-purple-600" />
            <span className="text-sm text-gray-600">Moyenne annuelle</span>
          </div>
          <p className="text-2xl font-bold text-red-600">8.2/20</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="size-5 text-green-600" />
            <span className="text-sm text-gray-600">Rang classe</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">108/120</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="size-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Rang groupe</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">28/30</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="size-5 text-red-600" />
            <span className="text-sm text-gray-600">Score risque</span>
          </div>
          <p className="text-2xl font-bold text-red-600">85/100</p>
        </div>
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar forces/faiblesses */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Forces et Faiblesses par Matière
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="matiere" />
              <PolarRadiusAxis domain={[0, 20]} />
              <Radar
                name="Étudiant"
                dataKey="etudiant"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.5}
              />
              <Radar
                name="Moyenne classe"
                dataKey="classe"
                stroke="#7c3aed"
                fill="#7c3aed"
                fillOpacity={0.3}
              />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Courbe progression */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Progression au fil du temps
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="periode" />
              <YAxis domain={[0, 20]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="note"
                stroke="#f97316"
                strokeWidth={2}
                name="Moyenne"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap matières */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Détail des notes par semestre
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3">Matière</th>
                <th className="text-center py-2 px-3">Semestre 1</th>
                <th className="text-center py-2 px-3">Semestre 2</th>
                <th className="text-center py-2 px-3">Moyenne annuelle</th>
              </tr>
            </thead>
            <tbody>
              {heatmapData.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-3 font-medium">{row.matiere}</td>
                  <td className="py-3 px-3">
                    <div
                      className="text-center py-2 px-3 rounded font-semibold text-white"
                      style={{ backgroundColor: getColor(row.s1) }}
                    >
                      {row.s1.toFixed(1)}
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <div
                      className="text-center py-2 px-3 rounded font-semibold text-white"
                      style={{ backgroundColor: getColor(row.s2) }}
                    >
                      {row.s2.toFixed(1)}
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <div
                      className="text-center py-2 px-3 rounded font-semibold text-white"
                      style={{ backgroundColor: getColor(row.annuelle) }}
                    >
                      {row.annuelle.toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparaison étudiant vs classe */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Comparaison Étudiant vs Moyenne de Classe
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="matiere" />
            <YAxis domain={[0, 20]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="etudiant" fill="#ef4444" name="Étudiant" />
            <Bar dataKey="classe" fill="#7c3aed" name="Moyenne classe" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Analyse de risque */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Analyse de Risque</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-sm text-red-700 font-medium mb-1">Score global</p>
            <p className="text-3xl font-bold text-red-600">85/100</p>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-sm text-red-700 font-medium mb-1">Niveau de risque</p>
            <p className="text-xl font-bold text-red-600">CRITIQUE</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-700 font-medium mb-1">Tendance</p>
            <p className="text-xl font-bold text-orange-600">En baisse</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Causes principales</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="inline-block size-2 bg-red-500 rounded-full mt-2"></span>
              <span className="text-sm text-gray-700">
                Moyenne générale inférieure à 10/20 (8.2/20)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block size-2 bg-red-500 rounded-full mt-2"></span>
              <span className="text-sm text-gray-700">
                3 matières en situation d'échec (Math, Physique, Informatique)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block size-2 bg-orange-500 rounded-full mt-2"></span>
              <span className="text-sm text-gray-700">
                Régression entre S1 et S2 (-0.5 points)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block size-2 bg-orange-500 rounded-full mt-2"></span>
              <span className="text-sm text-gray-700">
                Classement en fin de promotion (108/120)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Remarques enseignants */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MessageSquare className="size-5" />
          Remarques des Enseignants
        </h3>
        <div className="space-y-3">
          {remarques.map((remarque, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                remarque.type === "positif"
                  ? "bg-green-50 border-green-200"
                  : remarque.type === "négatif"
                  ? "bg-red-50 border-red-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      remarque.type === "positif"
                        ? "bg-green-100 text-green-800"
                        : remarque.type === "négatif"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {remarque.type}
                  </span>
                  <span className="text-sm font-medium text-gray-800">{remarque.matiere}</span>
                </div>
                <span className="text-xs text-gray-500">{remarque.enseignant}</span>
              </div>
              <p className="text-sm text-gray-700">{remarque.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
