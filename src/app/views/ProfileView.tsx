import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Users,
  FileText,
  CheckCircle
} from "lucide-react";

import { MOCK_USER } from "../mockData";
import { Card, CardContent } from "../components/ui";

export function ProfileView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Mon Profil
        </h1>
        <p className="text-slate-500 mt-2">
          Informations personnelles et paramètres du compte
        </p>
      </div>

      {/* Carte principale */}
      <Card>
        <CardContent className="p-10">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <img
                src={MOCK_USER.avatar}
                alt={MOCK_USER.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-50"
              />

              <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-700">
                Changer la photo
              </button>
            </div>

            {/* Infos */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-900">
                {MOCK_USER.name}
              </h2>

              <p className="text-slate-600 text-xl mt-1">
                Enseignant
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">

                <InfoItem
                  icon={<Mail className="w-6 h-6 text-purple-600" />}
                  title="Email"
                  value="enseignant@university.fr"
                  bg="bg-purple-100"
                />

                <InfoItem
                  icon={<Phone className="w-6 h-6 text-orange-600" />}
                  title="Téléphone"
                  value="+33 6 12 34 56 78"
                  bg="bg-orange-100"
                />

                <InfoItem
                  icon={<MapPin className="w-6 h-6 text-blue-600" />}
                  title="Bureau"
                  value="Bâtiment B - Bureau 108"
                  bg="bg-blue-100"
                />

                <InfoItem
                  icon={<BookOpen className="w-6 h-6 text-emerald-600" />}
                  title="Département"
                  value="Mathématiques"
                  bg="bg-emerald-100"
                />

                <InfoItem
                  icon={<Calendar className="w-6 h-6 text-indigo-600" />}
                  title="En poste depuis"
                  value="Septembre 2022"
                  bg="bg-indigo-100"
                />

              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StatCard
          title="Groupes encadrés"
          value="3"
          subtitle="77 étudiants au total"
          icon={<Users className="w-6 h-6 text-purple-600" />}
          bg="bg-purple-100"
        />

        <StatCard
          title="Notes saisies"
          value="142"
          subtitle="Cette année universitaire"
          icon={<FileText className="w-6 h-6 text-orange-600" />}
          bg="bg-orange-100"
        />

        <StatCard
          title="Évaluations réalisées"
          value="67"
          subtitle="Examens et contrôles"
          icon={<CheckCircle className="w-6 h-6 text-green-600" />}
          bg="bg-green-100"
        />

      </div>

      {/* Préférences */}
      <Card>
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            Préférences
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">
                Notifications email
              </span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">
                Alertes étudiants à risque
              </span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-slate-600">
                Résumé hebdomadaire
              </span>

              <input type="checkbox" defaultChecked />
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({
  icon,
  title,
  value,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  bg: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg}`}>
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="font-semibold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon,
  bg,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-slate-600 font-medium">
            {title}
          </h4>

          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg}`}>
            {icon}
          </div>
        </div>

        <div className="text-5xl font-bold text-slate-900">
          {value}
        </div>

        <p className="text-slate-500 mt-2">
          {subtitle}
        </p>
      </CardContent>
    </Card>
  );
}