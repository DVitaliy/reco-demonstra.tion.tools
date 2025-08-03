import { createBrowserRouter } from "react-router"

import App from "@/app/app"

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        index: true,
        lazy: () => import("@/features/home/home.page"),
      },
      //   {
      //   loader: protectedLoader,
      //   element: (
      //     <>
      //       <AppHeader />
      //       <ProtectedRoute />
      //     </>
      //   ),
      //     children: [
      //       {
      //         path: ROUTES.BOARDS,
      //         lazy: () => import("@/features/boards-list/boards-list.page"),
      //       },
      //       {
      //         path: ROUTES.FAVORITE_BOARDS,
      //         lazy: () =>
      //           import("@/features/boards-list/boards-list-favorite.page"),
      //       },
      //       {
      //         path: ROUTES.RECENT_BOARDS,
      //         lazy: () =>
      //           import("@/features/boards-list/boards-list-recent.page"),
      //       },
      //       {
      //         path: ROUTES.BOARD,
      //         lazy: () => import("@/features/board/board.page"),
      //       },
      //     ],
      //   },

      {
        path: "login",
        lazy: () => import("@/features/auth/login.page"),
      },
      {
        path: "register",
        lazy: () => import("@/features/auth/register.page"),
      },
      {
        path: "*",
        lazy: () => import("@/features/not-found.page"),
      },
    ],
  },
])

export default router
