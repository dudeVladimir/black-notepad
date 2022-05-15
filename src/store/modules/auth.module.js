import axios from 'axios'
import { error } from '@/utils/error'
const TOKEN_KEY = 'jwt-token'
const USER_ID = 'local-id'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY),
      localId: localStorage.getItem(USER_ID),
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    setlocalId(state, localId) {
      state.localId = localId
      localStorage.setItem(USER_ID, localId)
    },
    logout(state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
      state.localId = null
      localStorage.removeItem(USER_ID)
    },
  },
  actions: {
    async login({ commit }, user) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.post(url, {
          ...user,
          returnSecureToken: true,
        })
        commit('setToken', data.idToken)
        commit('setlocalId', data.localId)
      } catch (e) {
        console.log(error(e.response.data.error.message))
      }
    },
  },
  getters: {
    token(state) {
      return state.token
    },
    localId(state) {
      return state.localId
    },
    isAuthenticated(_, getters) {
      return !!getters.token
    },
  },
}
