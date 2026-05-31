import React from "react";
import { Link } from "react-router";
import { Users, BookOpen, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Button } from "../components/ui";
import { MOCK_GROUPS } from "../mockData";

export function GroupsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Mes Groupes</h1>
        <p className="text-slate-500 mt-1">Gérez les groupes et matières que vous enseignez.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_GROUPS.map((group) => (
          <Card key={group.id} className="hover:border-indigo-200 transition-colors">
            <CardHeader className="pb-3 border-none">
              <div className="flex justify-between items-start w-full">
                <div>
                  <Badge className="mb-2 bg-indigo-100 text-indigo-700">{group.subject}</Badge>
                  <CardTitle className="text-xl">{group.name}</CardTitle>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-slate-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 flex items-center gap-2"><Users className="w-4 h-4"/> Effectif</span>
                  <span className="font-medium">{group.students} étudiants</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 flex items-center gap-2"><BookOpen className="w-4 h-4"/> Moyenne</span>
                  <span className="font-medium text-orange-600">{group.avg} / 20</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 flex items-center gap-2"><Percent className="w-4 h-4"/> Réussite</span>
                  <span className="font-medium text-emerald-600">{group.successRate}%</span>
                </div>
              </div>
              <Link to={`/groups/${group.id}`}>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Voir détails
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Temporary Badge override for this file
function Badge({ children, className }: any) {
  return <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}>{children}</span>;
}
