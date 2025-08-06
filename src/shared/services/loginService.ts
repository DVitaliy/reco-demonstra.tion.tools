import { fetchClient } from "@/shared/api/instance"

type TActionState = {
  // success: boolean;
  error?: string
}

export function loginService() {
  return async function (_: TActionState, formData: FormData): Promise<TActionState> {
    // @TODO validate formData
    const body = {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    }
    try {
      const data = await fetchClient.POST("/api/auth/login", {
        body,
      })
      console.log(data)
    } catch {}
    return {}
  }
}
