import { useUpdateSession } from 'vtex.session-client'


import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  const updateSession = useUpdateSession();

  updateSession({
    variables: {

      Checkout: { sameSite: "None" }

    }
  })
}