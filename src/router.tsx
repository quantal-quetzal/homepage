import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import App from "./App";
import { publications } from "./data/publications";
import PublicationPage from "./pages/PublicationPage";
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

const dropoutPublicationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: publications.dropout.path,
  component: () => (
    <PublicationPage
      publication={publications.dropout}
      relatedPublication={publications.performance}
    />
  ),
});

const performancePublicationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: publications.performance.path,
  component: () => (
    <PublicationPage
      publication={publications.performance}
      relatedPublication={publications.dropout}
    />
  ),
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
  dropoutPublicationRoute,
  performancePublicationRoute,
  legacyIndexRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
