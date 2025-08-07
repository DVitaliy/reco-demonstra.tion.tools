import createFetchClient from "openapi-fetch"
import createClient from "openapi-react-query"
import type { paths } from "./schema/generated"

export const fetchClient = createFetchClient<paths>({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
})
export const rqClient = createClient(fetchClient)
