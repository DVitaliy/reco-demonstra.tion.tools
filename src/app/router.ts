import { createBrowserRouter, redirect } from "react-router"

import App from "@/app/app"

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/apps-discovery",
        lazy: () => import("@/features/apps-discovery/apps-discovery.page"),
      },
      { path: "/apps-inventory", lazy: () => import("@/features/apps-inventory/apps-inventory.page") },
      {
        path: "/settings",
        lazy: () => import("@/features/settings/settings.page"),
      },
    ],
  },
  {
    path: "/",
    loader: () => redirect("/apps-discovery"),
  },
])

export default router
