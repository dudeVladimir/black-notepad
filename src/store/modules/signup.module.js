import axios from 'axios'
import { error } from '@/utils/error'

export default {
  namespaced: true,
  actions: {
    async signup({ dispatch }, user) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`
        await axios.post(url, {
          ...user,
          returnSecureToken: true,
        })
        commit('clearMessage', null, { root: true })
      } catch (e) {
        dispatch(
          'setMessage',
          {
            value: error(e.response.data.error.message),
            type: 'danger',
          },
          { root: true }
        )
        throw new Error()
      }
    },
  },
}
