import axios from 'axios'
import { error } from '@/utils/error'

export default {
  namespaced: true,
  actions: {
    async signup(_, user) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`
        await axios.post(url, {
          ...user,
          returnSecureToken: true,
        })
      } catch (e) {
        console.log(error(e.response.data.error.message))
      }
    },
  },
}
