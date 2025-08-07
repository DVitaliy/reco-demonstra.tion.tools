import { Outlet } from "react-router"
import SideBar from "@/features/side-bar/"

export default function App() {
  return (
    <div className="min-h-screen flex flex-row">
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
