import { useState } from "react";
import { TestTube2, Calculator, TrendingUp, CheckCircle, XCircle } from "lucide-react";

const studentsOptions = [
  { id: "1", name: "Martin Dupont", promo: "INFO1", moyenneActuelle: 8.2 },
  { id: "2", name: "Sophie Bernard", promo: "INFO2", moyenneActuelle: 9.8 },
  { id: "3", name: "Lucas Martin", promo: "GEII1", moyenneActuelle: 12.3 },
  { id: "4", name: "Emma Petit", promo: "INFO1", moyenneActuelle: 13.7 },
  { id: "5", name: "Thomas Robert", promo: "INFO3", moyenneActuelle: 9.5 },
];

const matieresRattrapage = [
  { id: "math", name: "Mathématiques", noteActuelle: 7.5, coef: 3 },
  { id: "phys", name: "Physique", noteActuelle: 8.0, coef: 2 },
  { id: "info", name: "Informatique", noteActuelle: 6.5, coef: 4 },
];

export function Simulation() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [simulations, setSimulations] = useState<
    { matiereId: string, nouvelleNote: string }[]
  >([]);
  const [showResults, setShowResults] = useState(false);

  const handleAddSimulation = (matiereId: string, note: string) => {
    setSimulations((prev) => {
      const existing = prev.findIndex((s) => s.matiereId === matiereId);
      if (existing >= 0) {
        const newSims = [...prev];
        newSims[existing] = { matiereId, nouvelleNote: note };
        return newSims;
      }
      return [...prev, { matiereId, nouvelleNote: note }];
    });
  };

  const calculateResults = () => {
    if (!selectedStudent) return null;

    const student = studentsOptions.find((s) => s.id === selectedStudent);
    if (!student) return null;

    let totalPoints = student.moyenneActuelle * 10; // Base sur 10 matières fictives
    let totalCoef = 10;

    simulations.forEach((sim) => {
      const matiere = matieresRattrapage.find((m) => m.id === sim.matiereId);
      if (matiere && sim.nouvelleNote) {
        const newNote = parseFloat(sim.nouvelleNote);
        totalPoints = totalPoints - matiere.noteActuelle * matiere.coef + newNote * matiere.coef;
      }
    });

    const nouvelleMoyenne = totalPoints / totalCoef;
    const semestreValide = nouvelleMoyenne >= 10;
    const anneeValidee = nouvelleMoyenne >= 10; // Simplifié pour demo
    const impactRisque = nouvelleMoyenne >= 12 ? "Fort" : nouvelleMoyenne >= 10 ? "Modéré" : "Faible";

    return {
      moyenneActuelle: student.moyenneActuelle,
      nouvelleMoyenne: nouvelleMoyenne.toFixed(2),
      semestreValide,
      anneeValidee,
      impactRisque,
      progression: (nouvelleMoyenne - student.moyenneActuelle).toFixed(2),
    };
  };

  const results = showResults ? calculateResults() : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <TestTube2 className="size-8 text-purple-600" />
          Simulation Pédagogique
        </h1>
        <p className="text-gray-600 mt-2">
          Simulez l'impact de notes de rattrapage sur les résultats d'un étudiant
        </p>
      </div>

      {/* Sélection étudiant */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          1. Sélectionner un étudiant
        </h3>
        <select
          value={selectedStudent}
          onChange={(e) => {
            setSelectedStudent(e.target.value);
            setSimulations([]);
            setShowResults(false);
          }}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">-- Choisir un étudiant --</option>
          {studentsOptions.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name} - {student.promo} (Moyenne actuelle: {student.moyenneActuelle}/20)
            </option>
          ))}
        </select>
      </div>

      {/* Simulation des notes */}
      {selectedStudent && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            2. Simuler les notes de rattrapage
          </h3>
          <div className="space-y-4">
            {matieresRattrapage.map((matiere) => (
              <div key={matiere.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div>
                  <p className="font-medium text-gray-800">{matiere.name}</p>
                  <p className="text-sm text-gray-600">
                    Note actuelle: {matiere.noteActuelle}/20 (Coef: {matiere.coef})
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nouvelle note de rattrapage
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    step="0.5"
                    placeholder="Ex: 14"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    onChange={(e) => handleAddSimulation(matiere.id, e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  {simulations.find((s) => s.matiereId === matiere.id)?.nouvelleNote && (
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="size-4 text-green-600" />
                      <span className="text-green-600 font-semibold">
                        +
                        {(
                          parseFloat(
                            simulations.find((s) => s.matiereId === matiere.id)
                              ?.nouvelleNote || "0"
                          ) - matiere.noteActuelle
                        ).toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowResults(true)}
              disabled={simulations.length === 0}
              className="w-full md:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Calculator className="size-5" />
              Calculer les résultats
            </button>
          </div>
        </div>
      )}

      {/* Résultats */}
      {results && (
        <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg shadow-sm p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Calculator className="size-6 text-purple-600" />
            Résultats de la simulation
          </h3>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Moyenne actuelle</p>
              <p className="text-3xl font-bold text-gray-800">{results.moyenneActuelle}/20</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-purple-200">
              <p className="text-sm text-gray-600 mb-1">Nouvelle moyenne</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-purple-600">{results.nouvelleMoyenne}/20</p>
                <span
                  className={`text-sm font-semibold ${
                    parseFloat(results.progression) > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {parseFloat(results.progression) > 0 ? "+" : ""}
                  {results.progression}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Semestre validé ?</p>
              <div className="flex items-center gap-2">
                {results.semestreValide ? (
                  <>
                    <CheckCircle className="size-8 text-green-600" />
                    <span className="text-xl font-bold text-green-600">OUI</span>
                  </>
                ) : (
                  <>
                    <XCircle className="size-8 text-red-600" />
                    <span className="text-xl font-bold text-red-600">NON</span>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Année validée ?</p>
              <div className="flex items-center gap-2">
                {results.anneeValidee ? (
                  <>
                    <CheckCircle className="size-8 text-green-600" />
                    <span className="text-xl font-bold text-green-600">OUI</span>
                  </>
                ) : (
                  <>
                    <XCircle className="size-8 text-red-600" />
                    <span className="text-xl font-bold text-red-600">NON</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Impact sur le risque */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Impact sur le niveau de risque</h4>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Réduction du risque</span>
                  <span
                    className={`text-sm font-semibold ${
                      results.impactRisque === "Fort"
                        ? "text-green-600"
                        : results.impactRisque === "Modéré"
                        ? "text-orange-600"
                        : "text-red-600"
                    }`}
                  >
                    {results.impactRisque}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      results.impactRisque === "Fort"
                        ? "bg-green-500"
                        : results.impactRisque === "Modéré"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width:
                        results.impactRisque === "Fort"
                          ? "80%"
                          : results.impactRisque === "Modéré"
                          ? "50%"
                          : "20%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Visualisation Avant/Après */}
          <div className="mt-6 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-4">Comparaison Avant / Après</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Avant</p>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${(results.moyenneActuelle / 20) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{results.moyenneActuelle}/20</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Après</p>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${(parseFloat(results.nouvelleMoyenne) / 20) * 100}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                        parseFloat(results.nouvelleMoyenne) >= 12
                          ? "bg-green-500"
                          : parseFloat(results.nouvelleMoyenne) >= 10
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                    />
                  </div>
                  <p className="text-2xl font-bold text-purple-600">{results.nouvelleMoyenne}/20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
