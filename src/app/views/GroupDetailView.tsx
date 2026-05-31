import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Button, Badge, cn } from "../components/ui";
import { MOCK_GROUPS, MOCK_STUDENTS } from "../mockData";

export function GroupDetailView() {
  const { id } = useParams();
  const group = MOCK_GROUPS.find(g => g.id === id) || MOCK_GROUPS[0];
  const [activeTab, setActiveTab] = useState("etudiants");

  const students = MOCK_STUDENTS.filter(s => s.group === group.name);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/groups" className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{group.name}</h1>
          <p className="text-slate-500 mt-1">Matière: {group.subject}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <StatBox label="Moyenne" value={group.avg} />
        <StatBox label="Min" value="5.5" />
        <StatBox label="Max" value="18.2" />
        <StatBox label="Médiane" value="11.8" />
        <StatBox label="Réussite" value={`${group.successRate}%`} color="text-emerald-600" />
        <StatBox label="Échec" value="10%" color="text-red-600" />
        <StatBox label="Rattrapage" value="5%" color="text-orange-600" />
      </div>

      <Card>
        <div className="border-b border-slate-200">
          <nav className="flex gap-4 px-6" aria-label="Tabs">
            {["etudiants", "notes", "analytics", "remarques"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "py-4 px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap",
                  activeTab === tab
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                )}
              >
                {tab === "etudiants" ? "Étudiants" : tab}
              </button>
            ))}
          </nav>
        </div>
        
        <CardContent className="p-0">
          {activeTab === "etudiants" && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">Nom</th>
                    <th className="px-6 py-4 font-medium">Moyenne</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-medium text-slate-900">{student.name}</td>
                      <td className="px-6 py-4 font-medium">{student.avg}</td>
                      <td className="px-6 py-4">
                        <Badge variant={student.status === 'validé' ? 'success' : student.status === 'rattrapage' ? 'warning' : 'danger'}>
                          {student.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link to={`/students/${student.id}`} className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                          Voir
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab !== "etudiants" && (
             <div className="p-12 text-center text-slate-500">
               Contenu de l'onglet {activeTab} en cours de construction...
             </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function StatBox({ label, value, color = "text-slate-900" }: { label: string, value: string | number, color?: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
      <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">{label}</div>
      <div className={cn("text-xl font-bold", color)}>{value}</div>
    </div>
  );
}
