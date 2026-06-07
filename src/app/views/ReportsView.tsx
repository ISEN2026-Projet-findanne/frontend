import React from "react";
import { FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, Button } from "../components/ui";

export function ReportsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Rapports PDF</h1>
        <p className="text-slate-500 mt-1">Générez des documents officiels pour l'administration ou les étudiants.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ReportCard 
          title="Rapport Étudiant" 
          description="Bulletin individuel complet incluant les notes, graphiques de progression et remarques."
        />
        <ReportCard 
          title="Rapport Groupe" 
          description="Synthèse des performances d'un groupe de TD, avec statistiques globales et distribution."
        />
        <ReportCard 
          title="Rapport Matière" 
          description="Bilan de fin de semestre pour une matière, incluant le taux de réussite global."
        />
      </div>
    </div>
  );
}

function ReportCard({ title, description }: { title: string, description: string }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
          <FileText className="w-6 h-6" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        <p className="text-slate-500 text-sm mb-6">{description}</p>
        <Button className="w-full gap-2">
          <Download className="w-4 h-4" />
          Générer PDF
        </Button>
      </CardContent>
    </Card>
  );
}
