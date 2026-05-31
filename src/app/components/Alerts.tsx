import { useState } from "react";
import { Link } from "react-router";
import { AlertTriangle, Eye, TestTube2, CheckCircle } from "lucide-react";

const alertsData = [
  {
    id: "1",
    etudiant: "Martin Dupont",
    studentId: "1",
    promo: "INFO1",
    score: 8.2,
    niveau: "critique",
    causes: ["Moyenne < 10", "3 matières en échec", "Régression S2"],
    statut: "non-traité",
  },
  {
    id: "2",
    etudiant: "Thomas Robert",
    studentId: "5",
    promo: "INFO3",
    score: 7.8,
    niveau: "critique",
    causes: ["Moyenne < 10", "Absences répétées"],
    statut: "non-traité",
  },
  {
    id: "3",
    etudiant: "Sophie Bernard",
    studentId: "2",
    promo: "INFO2",
    score: 9.8,
    niveau: "élevé",
    causes: ["Moyenne proche de 10", "Difficulté en Math"],
    statut: "en-cours",
  },
  {
    id: "4",
    etudiant: "Lucas Martin",
    studentId: "3",
    promo: "GEII1",
    score: 9.5,
    niveau: "élevé",
    causes: ["2 matières en échec", "Baisse de motivation"],
    statut: "non-traité",
  },
  {
    id: "5",
    etudiant: "Pierre Simon",
    studentId: "9",
    promo: "GEII2",
    score: 10.1,
    niveau: "élevé",
    causes: ["Difficulté en Physique"],
    statut: "traité",
  },
  {
    id: "6",
    etudiant: "Emma Petit",
    studentId: "4",
    promo: "INFO1",
    score: 10.3,
    niveau: "modéré",
    causes: ["Régression légère"],
    statut: "en-cours",
  },
  {
    id: "7",
    etudiant: "Alexandre Dubois",
    studentId: "7",
    promo: "GEII1",
    score: 11.8,
    niveau: "modéré",
    causes: ["Performance irrégulière"],
    statut: "non-traité",
  },
  {
    id: "8",
    etudiant: "Marc Lefebvre",
    studentId: "11",
    promo: "INFO2",
    score: 8.5,
    niveau: "critique",
    causes: ["Moyenne < 10", "4 matières en échec"],
    statut: "non-traité",
  },
  {
    id: "9",
    etudiant: "Julie Garcia",
    studentId: "12",
    promo: "GEII1",
    score: 9.9,
    niveau: "élevé",
    causes: ["Moyenne < 10", "Stress examens"],
    statut: "en-cours",
  },
  {
    id: "10",
    etudiant: "Karim Benali",
    studentId: "13",
    promo: "INFO1",
    score: 10.5,
    niveau: "modéré",
    causes: ["Difficulté en Communication"],
    statut: "traité",
  },
];

const getBadgeColor = (niveau: string) => {
  switch (niveau) {
    case "critique":
      return "bg-red-100 text-red-800 border-red-200";
    case "élevé":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "modéré":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatutColor = (statut: string) => {
  switch (statut) {
    case "traité":
      return "bg-green-100 text-green-800";
    case "en-cours":
      return "bg-blue-100 text-blue-800";
    case "non-traité":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatutLabel = (statut: string) => {
  switch (statut) {
    case "traité":
      return "Traité";
    case "en-cours":
      return "En cours";
    case "non-traité":
      return "Non traité";
    default:
      return statut;
  }
};

export function Alerts() {
  const [selectedNiveau, setSelectedNiveau] = useState("all");
  const [selectedStatut, setSelectedStatut] = useState("all");

  const filteredAlerts = alertsData.filter((alert) => {
    const matchesNiveau = selectedNiveau === "all" || alert.niveau === selectedNiveau;
    const matchesStatut = selectedStatut === "all" || alert.statut === selectedStatut;
    return matchesNiveau && matchesStatut;
  });

  const handleMarkAsTreated = (id: string) => {
    // Simulated action - in real app would update backend
    console.log(`Marking alert ${id} as treated`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <AlertTriangle className="size-8 text-orange-600" />
          Alertes Pédagogiques
        </h1>
        <p className="text-gray-600 mt-2">
          Suivi des étudiants à risque et gestion des alertes
        </p>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="size-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Critiques</p>
              <p className="text-2xl font-bold text-red-600">
                {alertsData.filter((a) => a.niveau === "critique").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="size-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Élevés</p>
              <p className="text-2xl font-bold text-orange-600">
                {alertsData.filter((a) => a.niveau === "élevé").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="size-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Modérés</p>
              <p className="text-2xl font-bold text-yellow-600">
                {alertsData.filter((a) => a.niveau === "modéré").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="size-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Non traités</p>
              <p className="text-2xl font-bold text-gray-800">
                {alertsData.filter((a) => a.statut === "non-traité").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Niveau de risque
            </label>
            <select
              value={selectedNiveau}
              onChange={(e) => setSelectedNiveau(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">Tous les niveaux</option>
              <option value="critique">Critique</option>
              <option value="élevé">Élevé</option>
              <option value="mod��ré">Modéré</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
            <select
              value={selectedStatut}
              onChange={(e) => setSelectedStatut(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">Tous les statuts</option>
              <option value="non-traité">Non traité</option>
              <option value="en-cours">En cours</option>
              <option value="traité">Traité</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">{filteredAlerts.length}</span> alerte
          {filteredAlerts.length > 1 ? "s" : ""} trouvée{filteredAlerts.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Tableau des alertes */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
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
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Causes principales
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
              {filteredAlerts.map((alert) => (
                <tr key={alert.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold text-sm">
                        {alert.etudiant
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {alert.etudiant}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{alert.promo}</td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-semibold text-red-600">{alert.score}/20</span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${getBadgeColor(
                        alert.niveau
                      )}`}
                    >
                      {alert.niveau.charAt(0).toUpperCase() + alert.niveau.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {alert.causes.slice(0, 2).map((cause, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                          {cause}
                        </span>
                      ))}
                      {alert.causes.length > 2 && (
                        <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                          +{alert.causes.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatutColor(
                        alert.statut
                      )}`}
                    >
                      {getStatutLabel(alert.statut)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Link
                        to={`/students/${alert.studentId}`}
                        className="p-2 text-purple-600 hover:bg-purple-50 rounded transition-colors"
                        title="Voir fiche"
                      >
                        <Eye className="size-4" />
                      </Link>
                      <Link
                        to={`/simulation?student=${alert.studentId}`}
                        className="p-2 text-orange-600 hover:bg-orange-50 rounded transition-colors"
                        title="Simuler"
                      >
                        <TestTube2 className="size-4" />
                      </Link>
                      {alert.statut !== "traité" && (
                        <button
                          onClick={() => handleMarkAsTreated(alert.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                          title="Marquer comme traité"
                        >
                          <CheckCircle className="size-4" />
                        </button>
                      )}
                    </div>
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
