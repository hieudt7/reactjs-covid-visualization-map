import { lazy } from "react";

const Home = lazy(() => import("@/pages/home"));
const Dashboard = lazy(() => import("@/pages/dashboard"));

export { Dashboard, Home };
