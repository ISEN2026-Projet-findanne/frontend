import React from "react";
import { Upload, Download, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Button, Select, Input } from "../components/ui";
import { MOCK_STUDENTS } from "../mockData";

export function GradesView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Saisie des Notes</h1>
          <p className="text-slate-500 mt-1">Sélectionnez le contexte pour saisir les évaluations.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2"><Upload className="w-4 h-4"/> Importer CSV</Button>
          <Button variant="outline" className="gap-2"><Download className="w-4 h-4"/> Exporter CSV</Button>
          <Button variant="primary" className="gap-2"><Save className="w-4 h-4"/> Enregistrer</Button>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-wrap gap-4 rounded-t-xl">
          <div className="w-48 space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase">Matière</label>
            <Select defaultValue="java">
              <option value="java">Programmation Java</option>
              <option value="cpp">C++</option>
              <option value="web">Développement Web</option>
            </Select>
          </div>
          <div className="w-48 space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase">Groupe</label>
            <Select defaultValue="td1">
              <option value="td1">TD1</option>
              <option value="td2">TD2</option>
              <option value="td3">TD3</option>
            </Select>
          </div>
          <div className="w-48 space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase">Semestre</label>
            <Select defaultValue="s1">
              <option value="s1">Semestre 1</option>
              <option value="s2">Semestre 2</option>
            </Select>
          </div>
          <div className="w-48 space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase">Type Évaluation</label>
            <Select defaultValue="cc1">
              <option value="cc1">Contrôle Continu 1 (CC)</option>
              <option value="ef">Examen Final (EF)</option>
              <option value="tp">Note de TP</option>
              <option value="rat">Rattrapage</option>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-xs text-slate-500 bg-slate-100/50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-medium border-r border-slate-200 w-16 text-center">N°</th>
                <th className="px-6 py-3 font-medium border-r border-slate-200">Étudiant</th>
                <th className="px-6 py-3 font-medium border-r border-slate-200 w-32 text-center">Note / 20</th>
                <th className="px-6 py-3 font-medium border-r border-slate-200">Commentaire (optionnel)</th>
                <th className="px-6 py-3 font-medium w-32 text-center">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_STUDENTS.slice(0, 10).map((student, index) => (
                <tr key={student.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-2 text-center text-slate-400 border-r border-slate-100">{index + 1}</td>
                  <td className="px-6 py-2 font-medium text-slate-900 border-r border-slate-100">{student.name}</td>
                  <td className="px-6 py-2 border-r border-slate-100">
                    <input 
                      type="number" 
                      min="0" max="20" step="0.5"
                      defaultValue={student.avg}
                      className="w-full text-center py-1.5 px-2 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-medium"
                    />
                  </td>
                  <td className="px-6 py-2 border-r border-slate-100">
                    <input 
                      type="text" 
                      placeholder="Ajouter une remarque..."
                      className="w-full py-1.5 px-3 border border-transparent hover:border-slate-200 rounded focus:outline-none focus:border-orange-500 bg-transparent focus:bg-white text-sm"
                    />
                  </td>
                  <td className="px-6 py-2 text-center text-xs text-emerald-600 font-medium bg-emerald-50">
                    Enregistré
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
