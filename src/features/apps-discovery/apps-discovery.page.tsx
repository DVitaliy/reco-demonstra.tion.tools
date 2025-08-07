import { useEffect, useState } from "react"
import { useAppServiceGetApps } from "@/shared/api/app-service/app-service"
import type { V1GetAppsRequest } from "@/shared/api/generated.schemas"

export function AppsDiscoveryPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [page, setPage] = useState(1)
  const pageSize = 25

  const mutation = useAppServiceGetApps()

  const loadApps = () => {
    const request: V1GetAppsRequest = {
      appName: search,
      pageNumber: page,
      pageSize,
      category: category,
    }

    mutation.mutate({ data: request })
  }

  useEffect(() => {
    loadApps()
  }, [page, search, category, pageSize])

  const totalCount = mutation.data?.data.totalCount ?? 0
  const appRows = mutation.data?.data.appRows ?? []

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-row">
      {/* Table area */}
      <div className="flex-1 p-6 overflow-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead className="bg-[#3a3d2e] text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Connection</th>
            </tr>
          </thead>
          <tbody>
            {mutation.isPending ? (
              <tr>
                <td colSpan={3} className="text-center py-6">
                  Loading...
                </td>
              </tr>
            ) : appRows.length > 0 ? (
              appRows.map((app) => (
                <tr key={app.appId} className="bg-zinc-800 rounded-lg">
                  <td className="px-4 py-3">{app.appName || "Name"}</td>
                  <td className="px-4 py-3">{app.category || "Category"}</td>
                  <td className="px-4 py-3">Reco</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-6">
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page <= 1}
            className="px-4 py-2 bg-zinc-700 rounded disabled:opacity-50"
          >
            {"<"}
          </button>
          <span className="text-sm">{page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page * pageSize >= totalCount}
            className="px-4 py-2 bg-zinc-700 rounded disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Filter panel */}
      <aside className="w-64 bg-zinc-800 p-6 border-l border-zinc-700">
        <h2 className="text-md font-semibold mb-4 text-white uppercase">Filters</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Name Filter</label>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") loadApps()
            }}
            className="w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Category Filter</label>
          <input
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              setPage(1)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") loadApps()
            }}
            className="w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-white"
          />
        </div>

        <button
          onClick={() => {
            setPage(1)
            loadApps()
          }}
          className="mt-2 px-4 py-2 bg-green-700 hover:bg-green-600 rounded w-full text-sm"
        >
          ok
        </button>
      </aside>
    </div>
  )
}

export const Component = AppsDiscoveryPage
