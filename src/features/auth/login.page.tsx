import { loginService } from "@/shared/services/loginService"
import { LoginForm } from "@/shared/ui/login-form"
import { useActionState } from "react"

function LoginPage() {
  const [, submit] = useActionState(loginService(), {})

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <form action={submit}>
          <LoginForm />
        </form>
      </div>
    </div>
  )
}
export const Component = LoginPage
