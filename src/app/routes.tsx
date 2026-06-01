import { createBrowserRouter, redirect, useRouteError } from "react-router";
import { Layout } from "./components/Layout";
import { LoginView } from "./views/LoginView";
import { DashboardView } from "./views/DashboardView";
import { GroupsView } from "./views/GroupsView";
import { GroupDetailView } from "./views/GroupDetailView";
import { StudentsView } from "./views/StudentsView";
import { StudentDetailView } from "./views/StudentDetailView";
import { GradesView } from "./views/GradesView";
import { AnalyticsView } from "./views/AnalyticsView";
import { AlertsView } from "./views/AlertsView";
import { ReportsView } from "./views/ReportsView";
import { ProfileView } from "./views/ProfileView";
import { LevelView } from "./views/LevelView";

function RootErrorBoundary() {
  const error = useRouteError() as Error;
  return (
    <div className="p-8 text-red-500">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <pre className="mt-4 p-4 bg-red-50 rounded whitespace-pre-wrap">{error?.message || "Unknown error"}</pre>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginView,
  },
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: RootErrorBoundary,
    children: [
      {
        index: true,
        loader: () => redirect("/dashboard"),
      },
      {
        path: "dashboard",
        Component: DashboardView,
      },
      {
        path: "groups",
        Component: GroupsView,
      },
      {
        path: "groups/:subjectId/:levelId",
        Component: LevelView,
      },

      {
        path: "groups/:subjectId/:levelId/:classId",
        Component: GroupDetailView,
      },
      {
        path: "students",
        Component: StudentsView,
      },
      
      {
        path: "students/:id",
        Component: StudentDetailView,
      },
      {
        path: "grades",
        Component: GradesView,
      },
      {
        path: "analytics",
        Component: AnalyticsView,
      },
      {
        path: "alerts",
        Component: AlertsView,
      },
      {
        path: "reports",
        Component: ReportsView,
      },
      {
        path: "profile",
        Component: ProfileView,
      },
    ],
  },
]);
