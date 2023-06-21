import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      token: '',
      isAuthenticated: false
    }
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {//**user is authenticated, this will be called when we get into the app th check the user */
        state.user.token = localStorage.getItem('token')
        state.user.isAuthenticated = true
      } else {
        state.user.token = ''
        state.user.isAuthenticated = false
      }
    },
    setToken(state, token) {//**when user login */
      state.user.token = token
      state.user.isAuthenticated = true
    },
    removeToken(state) {//**when user sign out */
      state.user.token = ''
      state.user.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
