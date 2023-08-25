import { canUseDOM } from 'vtex.render-runtime'
import { useUpdateSession } from 'vtex.session-client'


export function handleEvents() {

  const updateSession = useUpdateSession()

        updateSession({

          variables: {

            Checkout: { 'sameSite'= 'None')

          }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
