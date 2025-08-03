// import { ROUTES } from "@/shared/model/routes";
import { Outlet, Navigate, redirect } from "react-router"
// import { useSession } from "@/shared/model/session";
// import { enableMocking } from "@/shared/api/mocks";

export function ProtectedRoute() {
  const { session } = useSession()

  if (!session) {
    return <Navigate to="login" />
  }

  return <Outlet />
}

export async function protectedLoader() {
  await enableMocking()

  const token = await useSession.getState().refreshToken()

  if (!token) {
    return redirect(ROUTES.LOGIN)
  }

  return null
}
