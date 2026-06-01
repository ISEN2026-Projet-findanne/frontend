import React from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, Select } from "../components/ui";

import { MOCK_HISTOGRAM_DATA, MOCK_CURVE_DATA } from "../mockData";

export function AnalyticsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics & KPI</h1>
          <p className="text-slate-500 mt-1">Analyse détaillée des performances de vos matières.</p>
        </div>
        <div className="flex gap-3">
          <Select className="w-48 bg-white">
            <option value="all">Toutes mes matières</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </Select>
          <Select className="w-48 bg-white">
            <option value="all">Tous mes groupes</option>
            <option value="td1">TD1</option>
            <option value="td2">TD2</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <StatCard label="Moyenne" value="12.4" />
        <StatCard label="Min" value="4.5" />
        <StatCard label="Max" value="19.0" />
        <StatCard label="Médiane" value="12.0" />
        <StatCard label="Écart-type" value="2.8" />
        <StatCard label="Réussite" value="82%" color="text-emerald-600" />
        <StatCard label="Échec" value="11%" color="text-red-600" />
        <StatCard label="Rattrapage" value="7%" color="text-orange-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribution des notes (Histogramme)</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_HISTOGRAM_DATA} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip cursor={{fill: '#f1f5f9'}} />
                <Bar dataKey="count" fill="#3730a3" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comparaison des groupes (Box Plot Simulé)</CardTitle>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center bg-slate-50/50 rounded-b-xl border-t border-slate-100">
            {/* Box plot requires a more complex Recharts setup or custom SVG, using a placeholder for visual matching */}
            <div className="text-center">
              <div className="w-64 h-48 border-l-2 border-b-2 border-slate-300 relative mx-auto">
                 <div className="absolute bottom-4 left-8 w-12 h-24 bg-indigo-200 border-2 border-indigo-600 rounded-sm">
                   <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-800"></div>
                 </div>
                 <div className="absolute bottom-8 left-28 w-12 h-20 bg-emerald-200 border-2 border-emerald-600 rounded-sm">
                   <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-emerald-800"></div>
                 </div>
                 <div className="absolute bottom-2 left-48 w-12 h-32 bg-orange-200 border-2 border-orange-600 rounded-sm">
                   <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-orange-800"></div>
                 </div>
              </div>
              <div className="flex justify-center gap-10 mt-4 text-sm font-medium text-slate-500 pl-4">
                <span>TD1</span>
                <span>TD2</span>
                <span>TD3</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Évolution des résultats au cours de l'année</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_CURVE_DATA} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip />
                <Line type="monotone" dataKey="avg" name="Moyenne Globale" stroke="#f97316" strokeWidth={3} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ label, value, color = "text-slate-900" }: { label: string, value: string, color?: string }) {
  return (
    <Card>
      <div className="p-4 text-center">
        <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">{label}</div>
        <div className={`text-xl font-bold ${color}`}>{value}</div>
      </div>
    </Card>
  );
}
