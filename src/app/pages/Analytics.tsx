import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Activity, 
  Download,
  Filter
} from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ComposedChart, Area, Scatter
} from "recharts";

const PROMO_KPIS = [
  { label: "Moyenne Générale", value: "12.4", trend: "+0.3", icon: Target, color: "text-purple-600", bg: "bg-purple-100" },
  { label: "Médiane", value: "12.8", trend: "+0.1", icon: Activity, color: "text-blue-600", bg: "bg-blue-100" },
  { label: "Taux de Réussite", value: "85%", trend: "+2%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-100" },
  { label: "Matière la plus difficile", value: "Maths Appliquées", trend: "8.2 moy", icon: BarChart3, color: "text-orange-600", bg: "bg-orange-100" },
];

const DISTRIBUTION_DATA = [
  { range: "0-4", count: 5 },
  { range: "4-8", count: 15 },
  { range: "8-10", count: 35 },
  { range: "10-12", count: 85 },
  { range: "12-14", count: 120 },
  { range: "14-16", count: 90 },
  { range: "16-18", count: 40 },
  { range: "18-20", count: 10 },
];

const EVOLUTION_YEARS_DATA = [
  { year: "2021", promo1: 11.2, promo2: 12.0 },
  { year: "2022", promo1: 11.5, promo2: 12.3 },
  { year: "2023", promo1: 12.1, promo2: 11.8 },
  { year: "2024", promo1: 11.8, promo2: 12.5 },
  { year: "2025", promo1: 12.4, promo2: 13.1 },
];

const GROUP_COMPARISON_DATA = [
  { group: "TD1", moyenne: 13.2, min: 8, max: 18 },
  { group: "TD2", moyenne: 11.5, min: 5, max: 16 },
  { group: "TD3", moyenne: 12.8, min: 7, max: 17 },
  { group: "TD4", moyenne: 10.9, min: 4, max: 15 },
  { group: "TD5", moyenne: 14.1, min: 9, max: 19 },
];

const HEATMAP_DATA = [
  { subject: "Maths", p2023: 8.5, p2024: 9.2, p2025: 8.8 },
  { subject: "Physique", p2023: 11.2, p2024: 10.8, p2025: 11.5 },
  { subject: "Info", p2023: 14.5, p2024: 15.1, p2025: 14.8 },
  { subject: "Anglais", p2023: 13.2, p2024: 13.5, p2025: 13.9 },
  { subject: "Éco", p2023: 10.5, p2024: 11.0, p2025: 9.8 },
];

// Helper for heatmap colors
const getHeatmapColor = (value: number) => {
  if (value < 10) return "bg-red-100 text-red-700 border-red-200";
  if (value < 12) return "bg-orange-100 text-orange-700 border-orange-200";
  if (value < 14) return "bg-yellow-100 text-yellow-700 border-yellow-200";
  return "bg-emerald-100 text-emerald-700 border-emerald-200";
};

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics & KPI</h1>
          <p className="text-slate-500 text-sm mt-1">Analyse détaillée des performances académiques</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Filter size={16} />
            Filtrer
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Download size={16} />
            Exporter Rapport
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROMO_KPIS.map((kpi, index) => (
          <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-2">{kpi.label}</p>
              <div className="flex items-end gap-2">
                <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
                <span className={`text-sm font-medium mb-1 ${kpi.trend.startsWith('+') ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {kpi.trend}
                </span>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${kpi.bg} ${kpi.color}`}>
              <kpi.icon size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Histogram: Distribution of grades */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-slate-900">Distribution Globale des Notes</h2>
            <select className="text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-slate-600 outline-none">
              <option>Promo 2025</option>
              <option>Promo 2024</option>
            </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DISTRIBUTION_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <RechartsTooltip 
                  cursor={{fill: '#F1F5F9'}}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {DISTRIBUTION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={parseInt(entry.range.split('-')[0]) < 10 ? '#F97316' : '#8B5CF6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart: Evolution over years */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-slate-900">Évolution Inter-promotions</h2>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={EVOLUTION_YEARS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis domain={[8, 16]} axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dx={-10} />
                <RechartsTooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Line type="monotone" name="Moyenne S1" dataKey="promo1" stroke="#8B5CF6" strokeWidth={3} dot={{r: 4}} />
                <Line type="monotone" name="Moyenne S2" dataKey="promo2" stroke="#F97316" strokeWidth={3} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Box-plot alternative (Composed Chart for Min/Max/Avg) */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-slate-900">Comparaison des Groupes (TD)</h2>
            <span className="text-xs text-slate-500">Moyenne, Min & Max</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={GROUP_COMPARISON_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="group" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis domain={[0, 20]} axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <RechartsTooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="moyenne" barSize={30} fill="#E2E8F0" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="max" stroke="#10B981" strokeWidth={0} dot={{r: 5, fill: '#10B981'}} />
                <Line type="monotone" dataKey="min" stroke="#EF4444" strokeWidth={0} dot={{r: 5, fill: '#EF4444'}} />
                <Line type="monotone" dataKey="moyenne" stroke="#8B5CF6" strokeWidth={0} dot={{r: 6, fill: '#8B5CF6', stroke: '#fff', strokeWidth: 2}} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heatmap (Custom implementation using Grid) */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-semibold text-slate-900">Heatmap : Difficulté par Matière</h2>
          </div>
          <div className="flex-1 overflow-x-auto">
            <div className="min-w-[400px]">
              {/* Header */}
              <div className="grid grid-cols-4 gap-2 mb-2">
                <div className="text-xs font-medium text-slate-500 uppercase">Matière</div>
                <div className="text-xs font-medium text-slate-500 uppercase text-center">Promo 2023</div>
                <div className="text-xs font-medium text-slate-500 uppercase text-center">Promo 2024</div>
                <div className="text-xs font-medium text-slate-500 uppercase text-center">Promo 2025</div>
              </div>
              {/* Body */}
              <div className="space-y-2">
                {HEATMAP_DATA.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-2 items-center">
                    <div className="text-sm font-medium text-slate-700">{row.subject}</div>
                    <div className={`p-2 rounded border text-center text-sm font-semibold transition-colors ${getHeatmapColor(row.p2023)}`}>
                      {row.p2023}
                    </div>
                    <div className={`p-2 rounded border text-center text-sm font-semibold transition-colors ${getHeatmapColor(row.p2024)}`}>
                      {row.p2024}
                    </div>
                    <div className={`p-2 rounded border text-center text-sm font-semibold transition-colors ${getHeatmapColor(row.p2025)}`}>
                      {row.p2025}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-100 border border-red-200"></div> &lt; 10</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-orange-100 border border-orange-200"></div> 10 - 12</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-yellow-100 border border-yellow-200"></div> 12 - 14</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-100 border border-emerald-200"></div> &gt; 14</div>
          </div>
        </div>

      </div>
    </div>
  );
}