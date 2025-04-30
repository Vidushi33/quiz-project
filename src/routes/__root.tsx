import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/header";
import "../../styles/App.css";

export const Route = createRootRoute({
  component: () => (
    <div className="relative flex h-screen overflow-hidden">
      <main className="flex flex-col w-full h-full bg-background">
        <div className="px-4 sm:px-6 lg:px-8 bg-white shadow-sm">

        <Header />
        </div>
        <div className="h-full overflow-hidden px-3 md:px-0 w-full md:w-11/12 mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  ),
});
