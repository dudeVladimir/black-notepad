export default {
  namespaced: true,
  state() {
    return {
      notes: [],
    }
  },
  getters: {
    notes(state) {
      return state.notes
    },
  },
}
