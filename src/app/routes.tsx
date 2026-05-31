import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Promotions } from "./components/Promotions";
import { PromotionDetails } from "./components/PromotionDetails";
import { Students } from "./components/Students";
import { StudentDetails } from "./components/StudentDetails";
import { Analytics } from "./components/Analytics";
import { Comparisons } from "./components/Comparisons";
import { Alerts } from "./components/Alerts";
import { Simulation } from "./components/Simulation";
import { Reports } from "./components/Reports";
import { Profile } from "./components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "promotions", Component: Promotions },
      { path: "promotions/:id", Component: PromotionDetails },
      { path: "students", Component: Students },
      { path: "students/:id", Component: StudentDetails },
      { path: "analytics", Component: Analytics },
      { path: "comparisons", Component: Comparisons },
      { path: "alerts", Component: Alerts },
      { path: "simulation", Component: Simulation },
      { path: "reports", Component: Reports },
      { path: "profile", Component: Profile },
    ],
  },
]);
