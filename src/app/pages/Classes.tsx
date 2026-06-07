import { useState } from "react";
import { Link } from "react-router";
import { 
  Building2, Plus, Search, Filter, Users, 
  UserPlus, MoreHorizontal, Edit2, Trash2, 
  Layers, GraduationCap, X, Check
} from "lucide-react";

const MOCK_GROUPS = [
  { id: 1, name: "TD 1", type: "TD", promo: "Promo 2024", year: "Année 1", capacity: 35, currentStudents: 32, teacher: "Dr. Dupont" },
  { id: 2, name: "TD 2", type: "TD", promo: "Promo 2024", year: "Année 1", capacity: 35, currentStudents: 34, teacher: "Prof. Martin" },
  { id: 3, name: "TP 1.A", type: "TP", promo: "Promo 2024", year: "Année 1", capacity: 18, currentStudents: 16, teacher: "Dr. Dupont" },
  { id: 4, name: "TP 1.B", type: "TP", promo: "Promo 2024", year: "Année 1", capacity: 18, currentStudents: 16, teacher: "Prof. Martin" },
  { id: 5, name: "TD 1", type: "TD", promo: "Promo 2025", year: "Année 2", capacity: 30, currentStudents: 30, teacher: "Dr. Curie" },
  { id: 6, name: "TP 1", type: "TP", promo: "Promo 2025", year: "Année 2", capacity: 15, currentStudents: 12, teacher: "Dr. Curie" },
];

const MOCK_UNASSIGNED_STUDENTS = [
  { id: 101, name: "Alice Dubois", studentNumber: "2024001" },
  { id: 102, name: "Lucas Bernard", studentNumber: "2024002" },
  { id: 103, name: "Emma Petit", studentNumber: "2024003" },
  { id: 104, name: "Hugo Richard", studentNumber: "2024004" },
];

export function Classes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [promoFilter, setPromoFilter] = useState("Toutes");
  const [yearFilter, setYearFilter] = useState("Toutes");
  const [typeFilter, setTypeFilter] = useState("Tous");
  
  // Assignment Modal State
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);

  const filteredGroups = MOCK_GROUPS.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          group.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPromo = promoFilter === "Toutes" || group.promo === promoFilter;
    const matchesYear = yearFilter === "Toutes" || group.year === yearFilter;
    const matchesType = typeFilter === "Tous" || group.type === typeFilter;
    
    return matchesSearch && matchesPromo && matchesYear && matchesType;
  });

  const totalCapacity = MOCK_GROUPS.reduce((acc, curr) => acc + curr.capacity, 0);
  const totalStudents = MOCK_GROUPS.reduce((acc, curr) => acc + curr.currentStudents, 0);
  const fillRate = Math.round((totalStudents / totalCapacity) * 100);

  const openAssignmentModal = (group: any) => {
    setSelectedGroup(group);
    setIsAssignmentModalOpen(true);
    setSelectedStudents([]);
  };

  const toggleStudentSelection = (id: number) => {
    setSelectedStudents(prev => 
      prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Classes & Groupes</h1>
          <p className="text-slate-500 text-sm mt-1">Organisez les TD, TP et gérez l'affectation des étudiants</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Building2 size={16} />
            Créer une classe
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Plus size={16} />
            Nouveau Groupe
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
            <Layers size={24} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Total Groupes</p>
            <p className="text-2xl font-bold text-slate-900">{MOCK_GROUPS.length}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Étudiants Placés</p>
            <p className="text-2xl font-bold text-slate-900">{totalStudents} <span className="text-sm font-normal text-slate-500">/ {totalCapacity} cap.</span></p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <GraduationCap size={24} />
          </div>
          <div className="flex-1">
            <p className="text-slate-500 text-sm font-medium mb-1">Taux de remplissage</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${fillRate}%` }} />
              </div>
              <span className="text-lg font-bold text-slate-900">{fillRate}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="relative flex-1 sm:max-w-xs">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un groupe..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
            />
          </div>
          <select 
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-slate-700 w-full sm:w-auto"
          >
            <option value="Tous">Type : Tous</option>
            <option value="TD">TD</option>
            <option value="TP">TP</option>
            <option value="CM">CM</option>
          </select>
          <select 
            value={promoFilter}
            onChange={(e) => setPromoFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-slate-700 w-full sm:w-auto"
          >
            <option value="Toutes">Promo : Toutes</option>
            <option value="Promo 2024">Promo 2024</option>
            <option value="Promo 2025">Promo 2025</option>
          </select>
          <select 
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-slate-700 w-full sm:w-auto"
          >
            <option value="Toutes">Année : Toutes</option>
            <option value="Année 1">Année 1</option>
            <option value="Année 2">Année 2</option>
          </select>
        </div>
      </div>

      {/* Groups Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Nom du Groupe</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Promo & Année</th>
                <th className="px-6 py-4">Enseignant</th>
                <th className="px-6 py-4 w-48">Capacité</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredGroups.length > 0 ? (
                filteredGroups.map((group) => {
                  const fillPercentage = (group.currentStudents / group.capacity) * 100;
                  const isFull = group.currentStudents >= group.capacity;

                  return (
                    <tr key={group.id} className="hover:bg-slate-50 transition-colors group/row">
                      <td className="px-6 py-4">
                        <Link
                            to={`/classes/${group.id}`}
                            className="font-semibold text-slate-900 hover:text-purple-600 transition"
                        >
                            {group.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border
                          ${group.type === 'TD' ? 'bg-blue-50 border-blue-200 text-blue-700' : ''}
                          ${group.type === 'TP' ? 'bg-orange-50 border-orange-200 text-orange-700' : ''}
                          ${group.type === 'CM' ? 'bg-purple-50 border-purple-200 text-purple-700' : ''}
                        `}>
                          {group.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-slate-900 font-medium">{group.promo}</div>
                        <div className="text-slate-500 text-xs">{group.year}</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{group.teacher}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${isFull ? 'bg-red-500' : fillPercentage > 80 ? 'bg-orange-500' : 'bg-emerald-500'}`}
                              style={{ width: `${fillPercentage}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-slate-600 w-12 text-right">
                            {group.currentStudents}/{group.capacity}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => openAssignmentModal(group)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                          >
                            <UserPlus size={14} />
                            <span className="hidden sm:inline">Affecter</span>
                          </button>
                          <div className="opacity-0 group-hover/row:opacity-100 transition-opacity flex items-center gap-1">
                            <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Modifier">
                              <Edit2 size={16} />
                            </button>
                            <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Supprimer">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    Aucun groupe trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assignment Modal UI Overlay */}
      {isAssignmentModalOpen && selectedGroup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Affectation : {selectedGroup.name}</h2>
                <p className="text-sm text-slate-500">{selectedGroup.type} • {selectedGroup.promo} • Capacité : {selectedGroup.currentStudents}/{selectedGroup.capacity}</p>
              </div>
              <button 
                onClick={() => setIsAssignmentModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex-1 overflow-y-auto">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Étudiants disponibles ({selectedGroup.promo})</h3>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Rechercher par nom ou numéro..." 
                    className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg divide-y divide-slate-100 max-h-64 overflow-y-auto">
                {MOCK_UNASSIGNED_STUDENTS.map((student) => {
                  const isSelected = selectedStudents.includes(student.id);
                  return (
                    <div 
                      key={student.id} 
                      onClick={() => toggleStudentSelection(student.id)}
                      className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors
                        ${isSelected ? 'bg-purple-50' : 'hover:bg-slate-50'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors
                          ${isSelected ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-300 bg-white'}
                        `}>
                          {isSelected && <Check size={14} />}
                        </div>
                        <div>
                          <p className={`text-sm font-medium ${isSelected ? 'text-purple-900' : 'text-slate-900'}`}>
                            {student.name}
                          </p>
                          <p className="text-xs text-slate-500">{student.studentNumber}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-slate-400">Non affecté(e)</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-sm text-slate-600">
                {selectedStudents.length > 0 ? (
                  <><b>{selectedStudents.length}</b> étudiant(s) sélectionné(s)</>
                ) : (
                  "Aucun étudiant sélectionné"
                )}
              </span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsAssignmentModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors"
                >
                  Annuler
                </button>
                <button 
                  disabled={selectedStudents.length === 0}
                  className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <UserPlus size={16} />
                  Valider l'affectation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}