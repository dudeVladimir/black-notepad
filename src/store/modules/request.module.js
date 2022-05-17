import axiosRequest from '@/axios/request'
import store from '../index'
import { error } from '@/utils/error'

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
      request: {},
    }
  },
  mutations: {
    setRequests(state, requsets) {
      state.requests = requsets
    },
    setRequest(state, request) {
      state.request = request
    },
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const token = store.getters['auth/token']
        const localId = store.getters['auth/localId']
        await axiosRequest.post(`/${localId}/notes.json?auth=${token}`, payload)
        commit('clearMessage', null, { root: true })
        dispatch(
          'setMessage',
          {
            value: 'Запись успешно создана',
            type: 'primary',
          },
          { root: true }
        )
      } catch (e) {
        commit('clearMessage', null, { root: true })
        dispatch(
          'setMessage',
          {
            value: `Заметка не была создана, ${error(e.message).toLowerCase()}`,
            type: 'danger',
          },
          { root: true }
        )
      }
    },
    async load({ commit, dispatch }) {
      try {
        const token = store.getters['auth/token']
        const localId = store.getters['auth/localId']
        const { data } = await axiosRequest.get(
          `/${localId}/notes.json?auth=${token}`
        )
        if (data) {
          const notes = Object.keys(data).map((key) => {
            return { ...data[key], id: key }
          })
          commit('setRequests', notes)
        }
      } catch (e) {
        commit('clearMessage', null, { root: true })
        dispatch(
          'setMessage',
          {
            value: error(e.message),
            type: 'warning',
          },
          { root: true }
        )
      }
    },
    async loadById({ commit }, id) {
      try {
        const token = store.getters['auth/token']
        const localId = store.getters['auth/localId']
        const { data } = await axiosRequest.get(
          `/${localId}/notes/${id}.json?auth=${token}`
        )
        if (data) {
          commit('setRequest', data)
        }
      } catch (e) {}
    },
    async update({ commit, dispatch }, note) {
      try {
        const token = store.getters['auth/token']
        const localId = store.getters['auth/localId']
        await axiosRequest.put(
          `/${localId}/notes/${note.id}.json?auth=${token}`,
          note
        )
        commit('clearMessage', null, { root: true })
        dispatch(
          'setMessage',
          {
            value: 'Запись успешно обновлена',
            type: 'primary',
          },
          { root: true }
        )
      } catch (e) {
        commit('clearMessage', null, { root: true })
        dispatch(
          'setMessage',
          {
            value: `Заметка не была обновлена, ${e.message}`,
            type: 'danger',
          },
          { root: true }
        )
      }
    },
    async remove({ state, commit, dispatch }, id) {
      try {
        const token = store.getters['auth/token']
        const localId = store.getters['auth/localId']
        state.requests.splice(
          state.requests.findIndex((e) => e.id === id),
          1
        )
        await axiosRequest.delete(`/${localId}/notes/${id}.json?auth=${token}`)
        commit('clearMessage', null, { root: true })
        dispatch(
          'setMessage',
          {
            value: 'Запись успешно удалена',
            type: 'primary',
          },
          { root: true }
        )
      } catch (e) {
        commit('clearMessage', null, { root: true })
        dispatch(
          'setMessage',
          {
            value: `Заметка не была удалена, ${e.message}`,
            type: 'danger',
          },
          { root: true }
        )
      }
    },
  },
  getters: {
    requests(state) {
      return state.requests
    },
    request(state) {
      return state.request
    },
  },
}
