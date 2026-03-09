import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BurnsidePage from "./pages/suburbs/BurnsidePage";
import GlenelgPage from "./pages/suburbs/GlenelgPage";
import MarionPage from "./pages/suburbs/MarionPage";
import MawsonLakesPage from "./pages/suburbs/MawsonLakesPage";
import MitchamPage from "./pages/suburbs/MitchamPage";
import NorwoodPage from "./pages/suburbs/NorwoodPage";
import ProspectPage from "./pages/suburbs/ProspectPage";
import SalisburyPage from "./pages/suburbs/SalisburyPage";
import TeaTreeGullyPage from "./pages/suburbs/TeaTreeGullyPage";
import UnleyPage from "./pages/suburbs/UnleyPage";

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const norwoodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-norwood",
  component: NorwoodPage,
});

const glenelgRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-glenelg",
  component: GlenelgPage,
});

const unleyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-unley",
  component: UnleyPage,
});

const prospectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-prospect",
  component: ProspectPage,
});

const mitchamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-mitcham",
  component: MitchamPage,
});

const burnsideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-burnside",
  component: BurnsidePage,
});

const marionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-marion",
  component: MarionPage,
});

const teaTreeGullyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-tea-tree-gully",
  component: TeaTreeGullyPage,
});

const mawsonLakesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-mawson-lakes",
  component: MawsonLakesPage,
});

const salisburyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-salisbury",
  component: SalisburyPage,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  norwoodRoute,
  glenelgRoute,
  unleyRoute,
  prospectRoute,
  mitchamRoute,
  burnsideRoute,
  marionRoute,
  teaTreeGullyRoute,
  mawsonLakesRoute,
  salisburyRoute,
]);
