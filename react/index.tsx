import { canUseDOM } from 'vtex.render-runtime'
import { useRenderSession, useUpdateSession } from 'vtex.session-client'


import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {

  const { session } = useRenderSession()

  console.log({ session })

  const updateSession = useUpdateSession()

        updateSession({

          variables: {

            Checkout: { 'sameSite'= 'None')

          }


  switch (e.data.eventName) {
    case 'vtex:pageView': {
      const pageTitle = e.data.pageTitle;
      console.log(`Page view event: ${pageTitle}`);
      break
    }

    default: {
      console.log(`Unrecognized event received: ${e.data.eventName}`);
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
