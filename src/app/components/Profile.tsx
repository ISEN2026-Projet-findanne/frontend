import { User, Mail, Phone, MapPin, Calendar, Briefcase, Settings } from "lucide-react";

export function Profile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Mon Profil</h1>
        <p className="text-gray-600 mt-2">
          Informations personnelles et paramètres du compte
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="size-32 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-4">
              MR
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              Changer la photo
            </button>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Mme Responsable</h2>
              <p className="text-gray-600">Responsable Pédagogique</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="size-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Email</p>
                  <p className="text-sm font-medium text-gray-800">
                    responsable@university.fr
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Phone className="size-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Téléphone</p>
                  <p className="text-sm font-medium text-gray-800">+33 6 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="size-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Bureau</p>
                  <p className="text-sm font-medium text-gray-800">Bâtiment A - Bureau 205</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="size-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Département</p>
                  <p className="text-sm font-medium text-gray-800">Sciences et Technologies</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Calendar className="size-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">En poste depuis</p>
                  <p className="text-sm font-medium text-gray-800">Septembre 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques personnelles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Promotions supervisées</h3>
            <div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <User className="size-5 text-purple-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">8</p>
          <p className="text-sm text-gray-500 mt-1">920 étudiants au total</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Rapports générés</h3>
            <div className="size-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Briefcase className="size-5 text-orange-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">142</p>
          <p className="text-sm text-gray-500 mt-1">Cette année académique</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Alertes traitées</h3>
            <div className="size-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="size-5 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">67</p>
          <p className="text-sm text-gray-500 mt-1">37 en attente</p>
        </div>
      </div>

      {/* Préférences */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="size-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Préférences</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Notifications par email</p>
              <p className="text-sm text-gray-600">Recevoir les alertes importantes par email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Alertes en temps réel</p>
              <p className="text-sm text-gray-600">
                Notification immédiate pour les étudiants à risque critique
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Résumé hebdomadaire</p>
              <p className="text-sm text-gray-600">
                Recevoir un rapport hebdomadaire des performances
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-800">Rapports automatiques</p>
              <p className="text-sm text-gray-600">
                Génération automatique des rapports mensuels
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          Enregistrer les modifications
        </button>
        <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors">
          Annuler
        </button>
      </div>
    </div>
  );
}
