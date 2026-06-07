import React from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";
import { 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from "../components/ui";
import { MOCK_STUDENTS, MOCK_RADAR_DATA, MOCK_CURVE_DATA } from "../mockData";

export function StudentDetailView() {
  const { id } = useParams();
  const student = MOCK_STUDENTS.find(s => s.id === id) || MOCK_STUDENTS[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/students" className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dossier Étudiant</h1>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="gap-2"><Mail className="w-4 h-4"/> Contacter</Button>
          <Button variant="primary" size="sm" className="gap-2"><MessageSquare className="w-4 h-4"/> Ajouter remarque</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=e0e7ff&color=3730a3&size=120`}
                alt={student.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-bold text-slate-900">{student.name}</h2>
              <p className="text-slate-500">{student.group} • Promo {student.promo}</p>
              <div className="mt-4">
                <Badge variant={student.risk === 'faible' ? 'success' : student.risk === 'modéré' ? 'warning' : 'danger'}>
                  Risque {student.risk}
                </Badge>
              </div>
            </div>
            <div className="py-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Moyenne S1</span>
                <span className="font-medium">13.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Moyenne S2</span>
                <span className="font-medium">11.8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Moyenne Annuelle</span>
                <span className="font-bold text-orange-600">{student.avg}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Rang</span>
                <span className="font-medium">12 / 25</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Forces & Faiblesses</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={MOCK_RADAR_DATA}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{fill: '#64748b', fontSize: 10}} />
                    <Radar name="Étudiant" dataKey="B" stroke="#f97316" fill="#f97316" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Évolution des résultats</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={MOCK_CURVE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                    <Tooltip />
                    <Line type="monotone" dataKey="avg" stroke="#1e1b4b" strokeWidth={2} dot={{r: 3}} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Détail des notes</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 bg-slate-50 border-y border-slate-200">
                  <tr>
                    <th className="px-6 py-3 font-medium">Matière</th>
                    <th className="px-6 py-3 font-medium">Note</th>
                    <th className="px-6 py-3 font-medium">Moy. Classe</th>
                    <th className="px-6 py-3 font-medium">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3 text-slate-900 font-medium">Java</td>
                    <td className="px-6 py-3 font-bold text-emerald-600">14.5</td>
                    <td className="px-6 py-3 text-slate-500">12.4</td>
                    <td className="px-6 py-3"><Badge variant="success">Validé</Badge></td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-3 text-slate-900 font-medium">Maths</td>
                    <td className="px-6 py-3 font-bold text-red-600">8.0</td>
                    <td className="px-6 py-3 text-slate-500">10.5</td>
                    <td className="px-6 py-3"><Badge variant="danger">Rattrapage</Badge></td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Remarques Enseignant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="success">Positive</Badge>
                    <span className="text-xs text-slate-500">12 Oct 2025</span>
                  </div>
                  <p className="text-sm text-slate-700">Très bonne participation en TD Java. Élève moteur pour son groupe.</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="warning">Neutre</Badge>
                    <span className="text-xs text-slate-500">05 Nov 2025</span>
                  </div>
                  <p className="text-sm text-slate-700">Doit approfondir les concepts de complexité algorithmique.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
