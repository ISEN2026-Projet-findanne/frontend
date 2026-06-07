import React from "react";
import { Link } from "react-router";
import { Search, Filter } from "lucide-react";
import { Card, CardContent, Input, Select, Badge } from "../components/ui";
import { MOCK_STUDENTS } from "../mockData";

export function StudentsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Mes Étudiants</h1>
        <p className="text-slate-500 mt-1">Liste complète des étudiants sous votre supervision.</p>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row gap-4 rounded-t-xl">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <Input type="text" placeholder="Rechercher un étudiant..." className="pl-9" />
          </div>
          <div className="flex gap-3">
            <Select className="w-40">
              <option value="">Tous les groupes</option>
              <option value="TD1">TD1</option>
              <option value="TD2">TD2</option>
              <option value="TD3">TD3</option>
            </Select>
            <Select className="w-40">
              <option value="">Niveau de risque</option>
              <option value="faible">Faible</option>
              <option value="modéré">Modéré</option>
              <option value="critique">Critique</option>
            </Select>
            <button className="px-4 py-2 border border-slate-200 rounded-lg flex items-center gap-2 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50">
              <Filter className="w-4 h-4" /> Filtres
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-medium">Étudiant</th>
                <th className="px-6 py-4 font-medium">Groupe</th>
                <th className="px-6 py-4 font-medium">Moyenne</th>
                <th className="px-6 py-4 font-medium">Risque</th>
                <th className="px-6 py-4 font-medium">Statut</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_STUDENTS.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                        {student.name.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{student.group}</td>
                  <td className="px-6 py-4 font-medium">{student.avg}</td>
                  <td className="px-6 py-4">
                    <Badge variant={student.risk === 'faible' ? 'success' : student.risk === 'modéré' ? 'warning' : 'danger'}>
                      {student.risk}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={student.status === 'validé' ? 'success' : student.status === 'rattrapage' ? 'warning' : 'danger'}>
                      {student.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/students/${student.id}`} className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                      Dossier
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
