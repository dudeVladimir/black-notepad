import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export function useUpdateForm() {
  const store = useStore()
  const route = useRoute()

  return {}
}
