import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

import { Dashboard } from "./pages/Dashboard";
import { StudentList } from "./pages/StudentList";
import { StudentProfile } from "./pages/StudentProfile";
import { Analytics } from "./pages/Analytics";
import { Promotions } from "./pages/Promotions";
import { Classes } from "./pages/Classes";
import { AdminProfileView } from "./pages/AdminProfileView";


import Subjects from "./pages/Subjects";
import Teachers from "./pages/Teachers";
import Grades from "./pages/Grades";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

import Reports from "./pages/Reports";
import CsvImport from "./pages/CsvImport";
import Responsables from "./pages/Responsables";
import ClassDetails from "./pages/ClassDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,

    children: [
      {
        index: true,
        Component: Dashboard,
      },

      {
        path: "students",
        Component: StudentList,
      },

      {
        path: "students/:id",
        Component: StudentProfile,
      },

      {
        path: "promotions",
        Component: Promotions,
      },

      {
        path: "classes",
        Component: Classes,
      },
       
      {
        path: "classes/:id",
        Component: ClassDetails,
      },
      
      {
        path: "analytics",
        Component: Analytics,
      },

      {
        path: "subjects",
        Component: Subjects,
      },

      {
        path: "teachers",
        Component: Teachers,
      },

      {
        path: "grades",
        Component: Grades,
      },

      {
        path: "alerts",
        Component: Alerts,
      },
      
      {
        path: "profile",
        Component: AdminProfileView,
      },

      {
        path: "settings",
        Component: Settings,
      },

      {
        path: "reports",
        Component: Reports,
      },

      {
        path: "csv-import",
        Component: CsvImport,
      },

      {
        path: "responsables",
        Component: Responsables,
      },
    ],
  },
]);