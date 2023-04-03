import { Service } from '@vtex/api'

export default new Service({
  routes: {
    getMenu: async (ctx: any) => {
      const menu = await ctx.clients.menu.getMenu()
      ctx.set('Content-Type', 'application/json')
      ctx.body = menu
    }
  },
  clients: {
    menu: (ctx: any) => ({
      getMenu: () => ctx.clients.vtex.get('/menu')
    })
  }
})