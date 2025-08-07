import { Link, useLocation } from "react-router"
import Logo from "@/assets/logo.png"

const items = [
  { title: "Apps Discovery", url: "/apps-discovery" },
  { title: "Apps Inventory", url: "/apps-inventory" },
  { title: "Settings", url: "/settings" },
]

export default function SideBarLayout() {
  const location = useLocation()

  return (
    <aside className="bg-zinc-900 w-60 min-h-screen p-6 flex flex-col items-start text-white space-y-8">
      <img src={Logo} alt="Reco logo" className="w-20" />

      <ul className="flex flex-col gap-4 text-sm uppercase font-semibold tracking-wide">
        {items.map((item) => {
          const isActive = location.pathname === item.url

          return (
            <li key={item.title}>
              <Link
                to={item.url}
                className={`flex items-center gap-2 pl-2 transition-colors ${
                  isActive
                    ? "border-l-4 border-lime-400 text-white"
                    : "border-l-4 border-transparent text-gray-400 hover:text-lime-400"
                }`}
              >
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
