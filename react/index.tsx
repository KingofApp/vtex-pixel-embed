import { useUpdateSession } from 'vtex.session-client'

export function handleEvents() {
  const updateSession = useUpdateSession();

  updateSession({
    variables: {

      Checkout: { sameSite: "None" }

    }
  })
}