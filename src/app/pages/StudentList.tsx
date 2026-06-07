import { useState } from "react";
import { Search, Filter, Plus, Upload, MoreHorizontal, Eye, Edit2, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { MOCK_STUDENTS } from "../data/mockData";

export function StudentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPromo, setSelectedPromo] = useState("Toutes");

  const filteredStudents = MOCK_STUDENTS.filter(s => {
    const matchesSearch = `${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.studentNumber.includes(searchTerm);
    const matchesPromo = selectedPromo === "Toutes" || s.promo === selectedPromo;
    return matchesSearch && matchesPromo;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gestion des Étudiants</h1>
          <p className="text-slate-500 text-sm mt-1">Gérez les profils et suivez les résultats</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Upload size={16} />
            Import CSV
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Plus size={16} />
            Ajouter
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un étudiant..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select 
              value={selectedPromo}
              onChange={(e) => setSelectedPromo(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-slate-700 flex-1 sm:flex-none"
            >
              <option value="Toutes">Toutes les promos</option>
              <option value="2024">Promo 2024</option>
              <option value="2025">Promo 2025</option>
            </select>
            <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2">
              <Filter size={16} />
              <span className="hidden sm:inline">Plus de filtres</span>
            </button>
          </div>
        </div>
        <div className="text-sm text-slate-500 w-full md:w-auto text-left md:text-right">
          {filteredStudents.length} étudiant(s)
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Étudiant</th>
                <th className="px-6 py-4">N° Étudiant</th>
                <th className="px-6 py-4">Promo & Groupe</th>
                <th className="px-6 py-4">Moyenne</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4">Niveau de risque</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                          {student.firstName[0]}{student.lastName[0]}
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{student.firstName} {student.lastName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{student.studentNumber}</td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900">{student.promo}</div>
                      <div className="text-slate-500 text-xs">Année {student.year} • {student.group}</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900">{student.annualAverage.toFixed(2)}/20</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                        ${student.status === 'Validé' ? 'bg-green-100 text-green-700' : ''}
                        ${student.status === 'Non Validé' ? 'bg-red-100 text-red-700' : ''}
                        ${student.status === 'En attente' ? 'bg-yellow-100 text-yellow-700' : ''}
                      `}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border
                        ${student.riskLevel === 'Faible' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : ''}
                        ${student.riskLevel === 'Modéré' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : ''}
                        ${student.riskLevel === 'Élevé' ? 'bg-orange-50 border-orange-200 text-orange-700' : ''}
                        ${student.riskLevel === 'Critique' ? 'bg-red-50 border-red-200 text-red-700' : ''}
                      `}>
                        <div className={`w-1.5 h-1.5 rounded-full 
                          ${student.riskLevel === 'Faible' ? 'bg-emerald-500' : ''}
                          ${student.riskLevel === 'Modéré' ? 'bg-yellow-500' : ''}
                          ${student.riskLevel === 'Élevé' ? 'bg-orange-500' : ''}
                          ${student.riskLevel === 'Critique' ? 'bg-red-500' : ''}
                        `} />
                        {student.riskLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link 
                          to={`/students/${student.id}`}
                          className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                          title="Voir profil"
                        >
                          <Eye size={18} />
                        </Link>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    Aucun étudiant trouvé correspondant à vos critères.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {filteredStudents.length > 0 && (
          <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-slate-50/50">
            <span className="text-sm text-slate-500">Affichage de 1 à {filteredStudents.length} sur {filteredStudents.length}</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-500 bg-white disabled:opacity-50" disabled>Précédent</button>
              <button className="px-3 py-1 border border-purple-500 rounded text-sm text-white bg-purple-600">1</button>
              <button className="px-3 py-1 border border-slate-200 rounded text-sm text-slate-500 bg-white disabled:opacity-50" disabled>Suivant</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}