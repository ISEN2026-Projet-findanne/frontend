import { useState } from "react";
import { Link } from "react-router";
import { 
  Plus, Search, Filter, Edit2, Trash2, Eye, 
  Users, GraduationCap, TrendingUp, Award, MoreVertical, Upload,
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  ComposedChart, Line, Legend
} from "recharts";

const MOCK_PROMOTIONS = [
  { id: 1, name: "Promo 2023", responsible: "Dr. Ada Lovelace", students: 130, average: 13.2, successRate: 92, status: "Terminée" },
  { id: 2, name: "Promo 2024", responsible: "Dr. Alan Turing", students: 145, average: 12.8, successRate: 88, status: "Active" },
  { id: 3, name: "Promo 2025", responsible: "Dr. Marie Curie", students: 160, average: 11.5, successRate: 75, status: "Active" },
  { id: 4, name: "Promo 2026", responsible: "Dr. Grace Hopper", students: 180, average: 0, successRate: 0, status: "À venir" },
];

const PROMO_COMPARISON_DATA = [
  { name: "Promo 2021", moyenne: 11.8, success: 82 },
  { name: "Promo 2022", moyenne: 12.1, success: 85 },
  { name: "Promo 2023", moyenne: 13.2, success: 92 },
  { name: "Promo 2024", moyenne: 12.8, success: 88 },
  { name: "Promo 2025", moyenne: 11.5, success: 75 },
];

const KPIS = [
  { label: "Total Promotions", value: "8", icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-100" },
  { label: "Étudiants Actifs", value: "305", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
  { label: "Moyenne Globale", value: "12.5", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-100" },
  { label: "Taux R. Record", value: "92%", icon: Award, color: "text-orange-600", bg: "bg-orange-100" },
];

export function Promotions() {
  
  const [yearFilter, setYearFilter] = useState("Toutes");
  const [levelFilter, setLevelFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tous");

  const filteredPromos = MOCK_PROMOTIONS.filter(promo => {
    const matchesSearch = promo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          promo.responsible.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "Tous" || promo.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gestion des Promotions</h1>
          <p className="text-slate-500 text-sm mt-1">Supervisez les cohortes et comparez leurs performances</p>
        </div>
        

        <div className="flex gap-3">

         <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">

           <Upload size={16} />

           Import CSV

        </button>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">

           <Plus size={16} />

           Créer une promotion

        </button>

         </div>


       </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map((kpi, index) => (
          <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-2">{kpi.label}</p>
              <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${kpi.bg} ${kpi.color}`}>
              <kpi.icon size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900 mb-6">Comparaison des performances par Promotion</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={PROMO_COMPARISON_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
              <YAxis yAxisId="left" domain={[0, 20]} axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
              <YAxis yAxisId="right" orientation="right" domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
              <RechartsTooltip 
                contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
              />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
              <Bar yAxisId="left" name="Moyenne Générale" dataKey="moyenne" barSize={40} fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Line yAxisId="right" name="Taux de réussite (%)" type="monotone" dataKey="success" stroke="#F97316" strokeWidth={3} dot={{r: 5, fill: '#fff', stroke: '#F97316', strokeWidth: 2}} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher une promotion, un responsable..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-slate-700 w-full sm:w-auto"
          >
            <option value="Tous">Tous les statuts</option>
            <option value="Active">Active</option>
            <option value="Terminée">Terminée</option>
            <option value="À venir">À venir</option>
          </select>
          <select
           value={yearFilter}
           onChange={(e) => setYearFilter(e.target.value)}
           className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
          >
           <option value="Toutes">Toutes les années</option>
           <option value="2024">2024</option>
           <option value="2025">2025</option>
          </select>

          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
          >
            <option value="Tous">Tous les niveaux</option>
            <option value="Année 1">Année 1</option>
            <option value="Année 2">Année 2</option>
            <option value="Année 3">Année 3</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Nom de la Promotion</th>
                <th className="px-6 py-4">Responsable</th>
                <th className="px-6 py-4 text-center">Étudiants</th>
                <th className="px-6 py-4 text-center">Moyenne</th>
                <th className="px-6 py-4 text-center">Réussite</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPromos.length > 0 ? (
                filteredPromos.map((promo) => (
                  <tr key={promo.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900 flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
                          <GraduationCap size={16} />
                        </div>
                        {promo.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{promo.responsible}</td>
                    <td className="px-6 py-4 text-center font-medium text-slate-700">{promo.students}</td>
                    <td className="px-6 py-4 text-center">
                      {promo.average > 0 ? (
                        <span className="font-medium text-slate-900">{promo.average.toFixed(2)}/20</span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {promo.successRate > 0 ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${promo.successRate >= 80 ? 'bg-emerald-500' : promo.successRate >= 60 ? 'bg-yellow-500' : 'bg-orange-500'}`}
                              style={{ width: `${promo.successRate}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium w-8 text-right">{promo.successRate}%</span>
                        </div>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                        ${promo.status === 'Active' ? 'bg-green-100 text-green-700' : ''}
                        ${promo.status === 'Terminée' ? 'bg-slate-100 text-slate-600' : ''}
                        ${promo.status === 'À venir' ? 'bg-blue-100 text-blue-700' : ''}
                      `}>
                        {promo.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors" title="Voir détails">
                          <Eye size={18} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Modifier">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Supprimer">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    Aucune promotion trouvée correspondant à vos critères.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}