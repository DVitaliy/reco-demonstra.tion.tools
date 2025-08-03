type TActionState = {
  // success: boolean;
  error?: string
}

export function loginService() {
  return async function (prevState: TActionState, formData: FormData): Promise<TActionState> {
    console.log("Login service called", prevState, formData.get("email")?.toString())
    return {}
  }
}
