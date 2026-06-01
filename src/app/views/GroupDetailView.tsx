import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Button, Badge, cn } from "../components/ui";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import { MOCK_SUBJECTS, MOCK_STUDENTS } from "../mockData";

export function GroupDetailView() {
  const { subjectId, levelId, classId } = useParams();

  const subject = MOCK_SUBJECTS.find(
    (s) => s.id === subjectId
  );

  const level = subject?.levels.find(
    (l) => l.id === levelId
  );

  const group = level?.classes.find(
    (c) => c.id === classId
  );

  if (!subject || !level || !group) {
    return <div>Classe introuvable</div>;
  }

  const students = MOCK_STUDENTS.filter(
    (s) => s.group === group.name
  );
  const histogramData = [
    { range: "0-5", count: 2 },
    { range: "5-10", count: 5 },
    { range: "10-15", count: 18 },
    { range: "15-20", count: 12 },
  ];

  const curveData = [
    { month: "Sep", avg: 11.5 },
    { month: "Oct", avg: 12.2 },
    { month: "Nov", avg: 11.8 },
    { month: "Dec", avg: 12.9 },
    { month: "Jan", avg: 13.4 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/groups" className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{group.name}</h1>
          <p className="text-slate-500 mt-1"> {subject.name} • {level.name} </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <StatBox label="Étudiants" value="25" />
        <StatBox label="Moyenne" value="12.4" />
        <StatBox label="Min" value="5.5" />
        <StatBox label="Max" value="18.2" />
        <StatBox label="Médiane" value="11.8" />
        <StatBox label="Réussite" value="85%" color="text-green-600" />
        <StatBox label="Échec" value="10%" color="text-red-600" />
        <StatBox label="Rattrapage" value="5%" color="text-orange-600" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Étudiants à risque</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-red-50 p-4 rounded-xl">
              <div className="font-bold text-red-600">
                Critique
              </div>

              <div className="text-2xl font-bold">
                3
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-xl">
              <div className="font-bold text-orange-600">
                Modéré
              </div>

              <div className="text-2xl font-bold">
                6
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <div className="font-bold text-green-600">
                Faible
              </div>

              <div className="text-2xl font-bold">
                16
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribution des notes</CardTitle>
          </CardHeader>

          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={histogramData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3730a3" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Evolution */}
        <Card>
          <CardHeader>
            <CardTitle>Évolution de la moyenne</CardTitle>
          </CardHeader>

          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={curveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="avg"
                  stroke="#f97316"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>
              Performance moyenne par compétence
            </CardTitle>
          </CardHeader>

          <CardContent>

            <div className="space-y-4">

              {[
                ["Algorithmie", 85],
                ["Architecture", 70],
                ["Base de données", 65],
                ["Programmation", 78],
                ["Projet", 60],
                ["Maths", 55]
              ].map(([name, value]) => (
                <div key={String(name)}>
                  <div className="flex justify-between mb-1">
                    <span>{name}</span>
                    <span>{value}%</span>
                  </div>

                  <div className="h-3 bg-slate-100 rounded">
                    <div
                      className="h-3 bg-indigo-700 rounded"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}

            </div>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activités récentes</CardTitle>
          </CardHeader>

          <CardContent>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Lucas Martin</span>
                <Badge className="bg-green-100 text-green-700">
                  Validé
                </Badge>
              </div>

              <div className="flex justify-between">
                <span>Emma Bernard</span>
                <Badge className="bg-orange-100 text-orange-700">
                  Rattrapage
                </Badge>
              </div>

              <div className="flex justify-between">
                <span>Hugo Petit</span>
                <Badge className="bg-red-100 text-red-700">
                  Échec
                </Badge>
              </div>

            </div>

          </CardContent>
        </Card>

      </div>

      {/* Liste des étudiants */}
      <Card>
        <CardHeader>
          <CardTitle>Liste des étudiants</CardTitle>
        </CardHeader>

        <CardContent>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-3">Nom</th>

                  <th className="text-left py-3">Moyenne</th>

                  <th className="text-left py-3">Min</th>

                  <th className="text-left py-3">Max</th>

                  <th className="text-left py-3">Risque</th>

                  <th className="text-left py-3">Statut</th>

                  <th className="text-left py-3">Fiche</th>

                </tr>

              </thead>

              <tbody>

                {students.map((student) => {

                  const risk =
                    student.avg < 8
                      ? "Critique"
                      : student.avg < 10
                      ? "Modéré"
                      : "Faible";

                  const status =
                    student.avg >= 10
                      ? "Validé"
                      : student.avg >= 8
                      ? "Rattrapage"
                      : "Échec";

                  return (
                    <tr
                      key={student.id}
                      className="border-b hover:bg-slate-50"
                    >
                      <td className="py-3">
                        {student.name}
                      </td>

                      <td className="py-3 font-semibold">
                        {student.avg}
                      </td>

                      <td className="py-3">
                        {Math.max(student.avg - 4, 0).toFixed(1)}
                      </td>

                      <td className="py-3">
                        {Math.min(student.avg + 4, 20).toFixed(1)}
                      </td>

                      <td className="py-3">

                        <Badge
                          className={
                            risk === "Critique"
                              ? "bg-red-100 text-red-700"
                              : risk === "Modéré"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-green-100 text-green-700"
                          }
                        >
                          {risk}
                        </Badge>

                      </td>

                      <td className="py-3">

                        <Badge
                          className={
                            status === "Validé"
                              ? "bg-green-100 text-green-700"
                              : status === "Rattrapage"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-red-100 text-red-700"
                          }
                        >
                          {status}
                        </Badge>

                      </td>

                      <td className="py-3">

                        <Link
                          to={`/students/${student.id}`}
                          className="text-indigo-600 hover:underline"
                        >
                          Voir fiche
                        </Link>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

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
