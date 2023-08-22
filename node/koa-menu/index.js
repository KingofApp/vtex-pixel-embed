const { Service } = require('@vtex/api')

module.exports = new Service({
  routes: {
    async getMenu(ctx) {
      const menu = await ctx.clients.menu.getMenu()

      ctx.set('Content-Type', 'application/json')
      ctx.body = menu
    },
  },
  clients: {
    menu(ctx) {
      return {
        getMenu() {
          return ctx.clients.vtex.get('/menu')
        },
      }
    },
  },
})
