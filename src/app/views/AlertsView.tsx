import React from "react";
import { Link } from "react-router";
import { AlertTriangle, Check, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from "../components/ui";
import { MOCK_ALERTS } from "../mockData";

export function AlertsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-orange-500" />
          Alertes & Décrochage
        </h1>
        <p className="text-slate-500 mt-1">Étudiants nécessitant une attention particulière.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Étudiants à risque identifiés</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 border-y border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Étudiant</th>
                  <th className="px-6 py-4 font-medium">Niveau Risque</th>
                  <th className="px-6 py-4 font-medium">Score (IA)</th>
                  <th className="px-6 py-4 font-medium">Action Requise</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_ALERTS.map((alert) => (
                  <tr key={alert.id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-900">{alert.student}</td>
                    <td className="px-6 py-4">
                      <Badge variant={alert.risk === 'faible' ? 'success' : alert.risk === 'modéré' ? 'warning' : 'danger'}>
                        {alert.risk}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-200 rounded-full h-2 max-w-[100px]">
                          <div 
                            className={`h-2 rounded-full ${alert.score > 80 ? 'bg-red-500' : alert.score > 50 ? 'bg-orange-500' : 'bg-emerald-500'}`} 
                            style={{width: `${alert.score}%`}}
                          ></div>
                        </div>
                        <span className="text-xs font-medium">{alert.score}/100</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{alert.action}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link to="/students">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0" title="Voir étudiant">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50" title="Marquer comme lu">
                          <Check className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
