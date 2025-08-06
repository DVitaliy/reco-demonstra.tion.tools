import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type Session = { signedIn: boolean }

type User = {
  userId: string
  email: string
  userRoles: string[]
}

type AuthState = {
  session: Session
  user: User
}

type AuthAction = {
  setSessionSignedIn: (payload: boolean) => void
  setUser: (payload: User) => void
}

const initialState = {
  session: { signedIn: true },
  user: {
    userId: "",
    email: "",
    userRoles: [],
  },
}

export const useSessionUser = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      ...initialState,

      setSessionSignedIn: (payload) =>
        set((state) => ({
          session: { ...state.session, signedIn: payload },
        })),

      setUser: (payload) =>
        set((state) => ({
          user: { ...state.user, ...payload },
        })),
    }),
    {
      name: "sessionUser",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
