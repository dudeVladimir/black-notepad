<template>
  <div class="notes">
    <div
      class="notes__card"
      v-for="(note, idx) in notes"
      :key="note.id"
      @click="navigate(note.id)"
    >
      <div class="card__title">
        <h4>
          <span>{{ idx + 1 }}.</span> {{ note.title }}
        </h4>
        <app-badge :type="note.type"></app-badge>
      </div>
      <p>{{ note.body }}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import AppBadge from './AppBadge.vue'

export default {
  props: {
    notes: { type: Array },
  },
  setup() {
    const router = useRouter()
    return {
      navigate: (id) => {
        router.push(`/notes/${id}`)
      },
    }
  },
  components: { AppBadge },
}
</script>

<style scoped>
span {
  font-weight: 300;
}
</style>
