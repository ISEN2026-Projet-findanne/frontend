import { useParams, Link } from "react-router";
import { ArrowLeft, Download, AlertTriangle, GraduationCap, Calendar, Users, TrendingUp, Calculator, Brain } from "lucide-react";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip
} from "recharts";
import { MOCK_STUDENTS } from "../data/mockData";

const RADAR_DATA = [
  { subject: 'Mathématiques', A: 120, fullMark: 150 },
  { subject: 'Physique', A: 98, fullMark: 150 },
  { subject: 'Informatique', A: 86, fullMark: 150 },
  { subject: 'Langues', A: 99, fullMark: 150 },
  { subject: 'Économie', A: 85, fullMark: 150 },
  { subject: 'Gestion', A: 65, fullMark: 150 },
];

const PROGRESS_DATA = [
  { month: 'Sep', note: 12 },
  { month: 'Oct', note: 11.5 },
  { month: 'Nov', note: 13 },
  { month: 'Déc', note: 14 },
  { month: 'Jan', note: 13.5 },
  { month: 'Fév', note: 15 },
  { month: 'Mar', note: 16 },
];

export function StudentProfile() {
  const { id } = useParams();
  const student = MOCK_STUDENTS.find(s => s.id === id) || MOCK_STUDENTS[0];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <Link to="/students" className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{student.firstName} {student.lastName}</h1>
            <p className="text-slate-500 text-sm mt-0.5">N° Étudiant : {student.studentNumber}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Calculator size={16} />
            Simuler
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Download size={16} />
            Générer PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Info & Risk */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* General Info */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-50/50">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <Users size={18} className="text-purple-600" />
                Informations Générales
              </h2>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Promotion</span>
                <span className="font-medium text-slate-900">{student.promo}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Groupe</span>
                <span className="font-medium text-slate-900">{student.group}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Année d'étude</span>
                <span className="font-medium text-slate-900">Année {student.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Statut</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${student.status === 'Validé' ? 'bg-green-100 text-green-700' : ''}
                  ${student.status === 'Non Validé' ? 'bg-red-100 text-red-700' : ''}
                  ${student.status === 'En attente' ? 'bg-yellow-100 text-yellow-700' : ''}
                `}>
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          {/* Risk Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-50/50">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <AlertTriangle size={18} className="text-orange-600" />
                Analyse de Risque
              </h2>
            </div>
            <div className="p-5">
              <div className="flex items-end justify-between mb-2">
                <div className="text-3xl font-bold text-slate-900">{student.riskScore}<span className="text-lg text-slate-500 font-medium">/100</span></div>
                <div className={`text-sm font-semibold mb-1
                  ${student.riskLevel === 'Faible' ? 'text-emerald-600' : ''}
                  ${student.riskLevel === 'Modéré' ? 'text-yellow-600' : ''}
                  ${student.riskLevel === 'Élevé' ? 'text-orange-600' : ''}
                  ${student.riskLevel === 'Critique' ? 'text-red-600' : ''}
                `}>
                  Niveau {student.riskLevel}
                </div>
              </div>
              
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-4">
                <div 
                  className={`h-full rounded-full
                    ${student.riskLevel === 'Faible' ? 'bg-emerald-500' : ''}
                    ${student.riskLevel === 'Modéré' ? 'bg-yellow-500' : ''}
                    ${student.riskLevel === 'Élevé' ? 'bg-orange-500' : ''}
                    ${student.riskLevel === 'Critique' ? 'bg-red-500' : ''}
                  `}
                  style={{ width: `${student.riskScore}%` }}
                />
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-700 mb-2">Remarques enseignants</p>
                <div className="bg-orange-50 text-orange-800 text-sm p-3 rounded-lg border border-orange-100">
                  "Difficultés récurrentes en mathématiques appliquées. Besoin d'accompagnement sur le TD2."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Results & Analytics */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Results Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Moyenne S1</p>
              <p className="text-2xl font-bold text-slate-900">{student.averageS1.toFixed(2)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Moyenne S2</p>
              <p className="text-2xl font-bold text-slate-900">{student.averageS2.toFixed(2)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm bg-purple-50/50">
              <p className="text-slate-600 text-xs font-medium uppercase tracking-wider mb-1">Moyenne Annuelle</p>
              <p className="text-2xl font-bold text-purple-700">{student.annualAverage.toFixed(2)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">Rang</p>
              <p className="text-2xl font-bold text-slate-900">{student.rank}<span className="text-sm font-normal text-slate-500"> / 250</span></p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Brain size={18} className="text-purple-600" />
                Forces & Faiblesses
              </h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={RADAR_DATA}>
                    <PolarGrid stroke="#E2E8F0" />
                    <PolarAngleAxis dataKey="subject" tick={{fill: '#64748B', fontSize: 11}} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar name="Résultats" dataKey="A" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.4} />
                    <RechartsTooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp size={18} className="text-purple-600" />
                Courbe de progression
              </h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={PROGRESS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                    <YAxis domain={[0, 20]} axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                    <RechartsTooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="note" 
                      stroke="#F97316" 
                      strokeWidth={3}
                      dot={{r: 4, strokeWidth: 2, fill: '#fff'}}
                      activeDot={{r: 6, strokeWidth: 0, fill: '#F97316'}}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          {/* Simulation Section */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Calculator size={120} />
            </div>
            <div className="relative z-10">
              <h2 className="text-lg font-semibold mb-2">Simulation Pédagogique</h2>
              <p className="text-slate-400 text-sm mb-6 max-w-lg">
                Utilisez l'outil de simulation pour évaluer l'impact d'un rattrapage sur la moyenne annuelle et le statut de validation de l'étudiant.
              </p>
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <Calculator size={18} />
                Lancer une simulation
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}