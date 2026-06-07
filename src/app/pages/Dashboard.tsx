import { Users, GraduationCap, UserSquare2, AlertTriangle, TrendingUp, TrendingDown, Upload } from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from "recharts";
import { MOCK_RECENT_ALERTS, MOCK_RECENT_GRADES } from "../data/mockData";

const KPI_DATA = [
  { label: "Étudiants", value: "1,245", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
  { label: "Promotions", value: "8", icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-100" },
  { label: "Enseignants", value: "84", icon: UserSquare2, color: "text-emerald-600", bg: "bg-emerald-100" },
  { label: "À risque", value: "32", icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-100" },
  { label: "Taux de réussite", value: "88%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-100" },
  { label: "Taux d'échec", value: "12%", icon: TrendingDown, color: "text-red-600", bg: "bg-red-100" },
];

const EVOLUTION_DATA = [
  { month: "Sep", moyenne: 11.2 },
  { month: "Oct", moyenne: 11.5 },
  { month: "Nov", moyenne: 12.1 },
  { month: "Déc", moyenne: 11.8 },
  { month: "Jan", moyenne: 12.4 },
  { month: "Fév", moyenne: 12.7 },
  { month: "Mar", moyenne: 13.0 },
  { month: "Avr", moyenne: 13.2 },
];

const REPARTITION_NOTES = [
  { range: "0-5", count: 12 },
  { range: "5-10", count: 45 },
  { range: "10-12", count: 120 },
  { range: "12-14", count: 200 },
  { range: "14-16", count: 150 },
  { range: "16-20", count: 80 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>

          <h1 className="text-2xl font-bold text-slate-900">
            Vue d'ensemble
          </h1>
          <p className="text-slate-500 text-sm mt-1">Vue globale de l'établissement</p>

        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Upload size={16} />
          Importer CSV
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {KPI_DATA.map((kpi, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${kpi.bg} ${kpi.color} mb-3`}>
              <kpi.icon size={20} />
            </div>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{kpi.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Évolution des moyennes générales</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={EVOLUTION_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis domain={[0, 20]} axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dx={-10} />
                <RechartsTooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Line 
                  type="monotone" 
                  dataKey="moyenne" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{r: 4, strokeWidth: 2, fill: '#fff'}}
                  activeDot={{r: 6, strokeWidth: 0, fill: '#8B5CF6'}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Distribution des résultats</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REPARTITION_NOTES} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <RechartsTooltip 
                  cursor={{fill: '#F1F5F9'}}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {REPARTITION_NOTES.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index < 2 ? '#F97316' : '#8B5CF6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-base font-semibold text-slate-900">Dernières notes ajoutées</h2>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-700">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3">Matière</th>
                  <th className="px-5 py-3">Épreuve</th>
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3 text-right">Moyenne</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_RECENT_GRADES.map((grade) => (
                  <tr key={grade.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-slate-900">{grade.subject}</td>
                    <td className="px-5 py-3 text-slate-600">{grade.exam}</td>
                    <td className="px-5 py-3 text-slate-500">{new Date(grade.date).toLocaleDateString('fr-FR')}</td>
                    <td className="px-5 py-3 text-right font-medium text-slate-900">{grade.average}/20</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-base font-semibold text-slate-900">Alertes récentes</h2>
            <button className="text-orange-600 text-sm font-medium hover:text-orange-700">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3">Étudiant</th>
                  <th className="px-5 py-3">Type</th>
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3 text-right">Niveau</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_RECENT_ALERTS.map((alert) => (
                  <tr key={alert.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-slate-900">{alert.student}</td>
                    <td className="px-5 py-3 text-slate-600">{alert.type}</td>
                    <td className="px-5 py-3 text-slate-500">{new Date(alert.date).toLocaleDateString('fr-FR')}</td>
                    <td className="px-5 py-3 text-right">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium
                        ${alert.level === 'Critique' ? 'bg-red-100 text-red-700' : ''}
                        ${alert.level === 'Élevé' ? 'bg-orange-100 text-orange-700' : ''}
                        ${alert.level === 'Modéré' ? 'bg-yellow-100 text-yellow-700' : ''}
                      `}>
                        {alert.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}