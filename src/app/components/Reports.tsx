import { useState } from "react";
import { FileText, Download, Calendar, Users, GraduationCap, BarChart3 } from "lucide-react";

const reportTypes = [
  {
    id: "student",
    title: "Rapport Étudiant",
    description: "Rapport détaillé des performances d'un étudiant spécifique",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    id: "promotion",
    title: "Rapport Promotion",
    description: "Analyse complète d'une promotion avec KPI et graphiques",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    id: "matiere",
    title: "Rapport Matière",
    description: "Performance globale par matière sur toutes les promotions",
    icon: BarChart3,
    color: "bg-orange-500",
  },
  {
    id: "comparatif",
    title: "Rapport Comparatif",
    description: "Comparaison inter-promotions ou inter-années",
    icon: FileText,
    color: "bg-green-500",
  },
];

const studentsOptions = [
  "Martin Dupont - INFO1",
  "Sophie Bernard - INFO2",
  "Lucas Martin - GEII1",
  "Emma Petit - INFO1",
  "Thomas Robert - INFO3",
];

const promotionsOptions = ["INFO1", "INFO2", "INFO3", "GEII1", "GEII2", "GEII3", "GMP1", "GMP2"];

const matieresOptions = [
  "Mathématiques",
  "Physique",
  "Informatique",
  "Anglais",
  "Communication",
  "Électronique",
  "Mécanique",
];

export function Reports() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedPromotion, setSelectedPromotion] = useState("");
  const [selectedMatiere, setSelectedMatiere] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("annee");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = () => {
    setIsGenerating(true);
    // Simulated PDF generation
    setTimeout(() => {
      setIsGenerating(false);
      alert("Rapport PDF généré avec succès !");
    }, 2000);
  };

  const canGenerate = () => {
    if (!selectedType) return false;
    if (selectedType === "student" && !selectedStudent) return false;
    if (selectedType === "promotion" && !selectedPromotion) return false;
    if (selectedType === "matiere" && !selectedMatiere) return false;
    return true;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <FileText className="size-8 text-purple-600" />
          Rapports PDF
        </h1>
        <p className="text-gray-600 mt-2">
          Générez des rapports PDF détaillés pour vos analyses pédagogiques
        </p>
      </div>

      {/* Types de rapports */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          1. Sélectionner le type de rapport
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  selectedType === type.id
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className={`${type.color} size-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="size-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{type.title}</h4>
                <p className="text-sm text-gray-600">{type.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Configuration du rapport */}
      {selectedType && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            2. Configurer le rapport
          </h3>

          <div className="space-y-4">
            {/* Rapport Étudiant */}
            {selectedType === "student" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sélectionner un étudiant
                </label>
                <select
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">-- Choisir un étudiant --</option>
                  {studentsOptions.map((student, idx) => (
                    <option key={idx} value={student}>
                      {student}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Rapport Promotion */}
            {selectedType === "promotion" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sélectionner une promotion
                </label>
                <select
                  value={selectedPromotion}
                  onChange={(e) => setSelectedPromotion(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">-- Choisir une promotion --</option>
                  {promotionsOptions.map((promo) => (
                    <option key={promo} value={promo}>
                      {promo}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Rapport Matière */}
            {selectedType === "matiere" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sélectionner une matière
                </label>
                <select
                  value={selectedMatiere}
                  onChange={(e) => setSelectedMatiere(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">-- Choisir une matière --</option>
                  {matieresOptions.map((matiere) => (
                    <option key={matiere} value={matiere}>
                      {matiere}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Rapport Comparatif */}
            {selectedType === "comparatif" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Première promotion
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">-- Choisir --</option>
                    {promotionsOptions.map((promo) => (
                      <option key={promo} value={promo}>
                        {promo}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deuxième promotion
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">-- Choisir --</option>
                    {promotionsOptions.map((promo) => (
                      <option key={promo} value={promo}>
                        {promo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Période */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Période du rapport
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="period"
                    value="s1"
                    checked={selectedPeriod === "s1"}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="size-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Semestre 1</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="period"
                    value="s2"
                    checked={selectedPeriod === "s2"}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="size-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Semestre 2</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="period"
                    value="annee"
                    checked={selectedPeriod === "annee"}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="size-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Année complète</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Aperçu du contenu */}
      {selectedType && canGenerate() && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            3. Contenu du rapport
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="size-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Page de garde</p>
                <p className="text-sm text-gray-600">
                  Titre, date, période, et informations générales
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">KPI et indicateurs clés</p>
                <p className="text-sm text-gray-600">
                  Moyennes, taux de réussite, écart-type, médiane
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Graphiques et visualisations</p>
                <p className="text-sm text-gray-600">
                  Courbes d'évolution, histogrammes, heatmaps, radar charts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Tableaux détaillés</p>
                <p className="text-sm text-gray-600">
                  Données complètes avec toutes les matières et notes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Analyse et recommandations</p>
                <p className="text-sm text-gray-600">
                  Points forts, points faibles, et actions suggérées
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bouton de génération */}
      {selectedType && (
        <div className="flex items-center justify-center">
          <button
            onClick={handleGeneratePDF}
            disabled={!canGenerate() || isGenerating}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold text-lg transition-all flex items-center gap-3 shadow-lg"
          >
            {isGenerating ? (
              <>
                <Calendar className="size-6 animate-spin" />
                Génération en cours...
              </>
            ) : (
              <>
                <Download className="size-6" />
                Générer le Rapport PDF
              </>
            )}
          </button>
        </div>
      )}

      {/* Historique des rapports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Rapports récents</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Sujet
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Période
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Date de génération
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800">Promotion</td>
                <td className="py-3 px-4 text-sm text-gray-800 font-medium">INFO1</td>
                <td className="py-3 px-4 text-sm text-gray-600">Année 2024-2025</td>
                <td className="py-3 px-4 text-sm text-gray-600">25/05/2026</td>
                <td className="py-3 px-4">
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1">
                    <Download className="size-4" />
                    Télécharger
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800">Étudiant</td>
                <td className="py-3 px-4 text-sm text-gray-800 font-medium">Martin Dupont</td>
                <td className="py-3 px-4 text-sm text-gray-600">Semestre 2</td>
                <td className="py-3 px-4 text-sm text-gray-600">24/05/2026</td>
                <td className="py-3 px-4">
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1">
                    <Download className="size-4" />
                    Télécharger
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-800">Matière</td>
                <td className="py-3 px-4 text-sm text-gray-800 font-medium">Mathématiques</td>
                <td className="py-3 px-4 text-sm text-gray-600">Année 2024-2025</td>
                <td className="py-3 px-4 text-sm text-gray-600">20/05/2026</td>
                <td className="py-3 px-4">
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1">
                    <Download className="size-4" />
                    Télécharger
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
