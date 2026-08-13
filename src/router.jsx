import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import App from "./App";
import SoftwarePage from "./pages/SoftwarePage";
import TrainingPage from "./pages/TrainingPage";
import WelcomePage from "./pages/WelcomePage";

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: WelcomePage,
});

const welcomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: WelcomePage,
});

const softwareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/software",
  component: SoftwarePage,
});

const trainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/personal-training",
  component: TrainingPage,
});

const legacyIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/index.html",
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});

const routeTree = rootRoute.addChildren([
  welcomeRoute,
  softwareRoute,
  trainingRoute,
  legacyIndexRoute,
]);

export const router = createRouter({ routeTree });
