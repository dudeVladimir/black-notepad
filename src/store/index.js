import { createStore, createLogger } from 'vuex'
import auth from './modules/auth.module'
import signup from './modules/signup.module'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  modules: {
    auth,
    signup,
  },
})
