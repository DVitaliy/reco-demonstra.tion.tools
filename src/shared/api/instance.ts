import createFetchClient from "openapi-fetch"
import createClient from "openapi-react-query"
import type { ApiPaths } from "./schema"
// import { useSession } from "../model/session";

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
})
export const rqClient = createClient(fetchClient)

fetchClient.use({
  async onRequest({ request }) {
    const token = localStorage.getItem("accessToken")
    if (token) request.headers.set("Authorization", `Bearer ${token}`)
    return request
  },
})

// export const publicFetchClient = createFetchClient<ApiPaths>({
//   baseUrl: import.meta.env.VITE_API_BASE_URL,
// })
// export const publicRqClient = createClient(publicFetchClient)

// fetchClient.use({
//   async onRequest({ request }) {
//     const token = await useSession.getState().refreshToken();

//     if (token) {
//       request.headers.set("Authorization", `Bearer ${token}`);
//     } else {
//       return new Response(
//         JSON.stringify({
//           code: "NOT_AUTHOIZED",
//           message: "You are not authorized to access this resource",
//         } as ApiSchemas["Error"]),
//         {
//           status: 401,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         },
//       );
//     }
//   },
// });
