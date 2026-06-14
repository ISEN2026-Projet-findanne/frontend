import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Users,
  GraduationCap,
  BookOpen,
} from "lucide-react";

import { Card, CardContent } from "../components/ui/card";


export function AdminProfileView() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Mon Profil
        </h1>

        <p className="text-slate-500 mt-2">
          Informations personnelles et paramètres du compte
        </p>
      </div>

      <Card>
        <CardContent className="p-10">
          <div className="flex flex-col lg:flex-row gap-10">

            <div className="flex flex-col items-center">
              <img
                src="https://i.pravatar.cc/300?img=32"
                alt="Mme Admin"
                className="w-40 h-40 rounded-full object-cover border-4 border-orange-50"
              />

              <button className="mt-4 text-orange-600 font-medium hover:text-orange-700">
                Changer la photo
              </button>
            </div>

            <div className="flex-1">

              <h2 className="text-4xl font-bold text-slate-900">
                Mme Admin
              </h2>

              <p className="text-slate-600 text-xl mt-1">
                Administrateur
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">

                <InfoItem
                  icon={<Mail className="w-6 h-6 text-purple-600" />}
                  title="Email"
                  value="admin@edutrack.fr"
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
                  value="Administration Centrale"
                  bg="bg-blue-100"
                />

                <InfoItem
                  icon={<Shield className="w-6 h-6 text-red-600" />}
                  title="Niveau d'accès"
                  value="Administrateur principal"
                  bg="bg-red-100"
                />

                <InfoItem
                  icon={<Calendar className="w-6 h-6 text-indigo-600" />}
                  title="En poste depuis"
                  value="Septembre 2019"
                  bg="bg-indigo-100"
                />

              </div>

            </div>

          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Étudiants"
          value="920"
          subtitle="Toutes promotions"
          icon={<Users className="w-6 h-6 text-purple-600" />}
          bg="bg-purple-100"
        />

        <StatCard
          title="Enseignants"
          value="42"
          subtitle="Comptes actifs"
          icon={<GraduationCap className="w-6 h-6 text-orange-600" />}
          bg="bg-orange-100"
        />

        <StatCard
          title="Responsables"
          value="8"
          subtitle="Responsables pédagogiques"
          icon={<Shield className="w-6 h-6 text-indigo-600" />}
          bg="bg-indigo-100"
        />

        <StatCard
          title="Promotions"
          value="12"
          subtitle="Promotions académiques"
          icon={<BookOpen className="w-6 h-6 text-green-600" />}
          bg="bg-green-100"
        />
      </div>

      <Card>
        <CardContent className="p-8">

          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            Préférences administrateur
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">
                Notifications système
              </span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">
                Alertes critiques
              </span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-slate-600">
                Rapports automatiques
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
        <p className="text-sm text-slate-500">{title}</p>
        <p className="font-semibold text-slate-900">{value}</p>
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