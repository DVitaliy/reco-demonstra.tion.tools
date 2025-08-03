import { fetchClient } from "@/shared/api/instance"

type TActionState = {
  // success: boolean;
  error?: string
}

export function loginService() {
  return async function (_: TActionState, formData: FormData): Promise<TActionState> {
    const body = {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    }

    const data = await fetchClient.POST("/auth/login", {
      body,
    })
    console.log(data)
    return {}
  }
}
