<template>
  <div class="home-page">
    <the-sidebar>
      <the-filter></the-filter>
    </the-sidebar>
    <section class="home-page__content">
      <app-notes :notes="notes" v-if="notes.length > 0"></app-notes>
      <h3 v-else>
        Заметок нет,
        <router-link to="/create" class="home-to-create"
          >создайте новую</router-link
        >
      </h3>
    </section>
  </div>
</template>

<script>
import TheSidebar from '@/components/ui/TheSidebar.vue'
import TheFilter from '@/components/TheFilter.vue'
import AppNotes from '@/components/ui/AppNotes.vue'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const notes = computed(() => store.getters['notes/notes'])

    return { notes }
  },
  components: { TheFilter, TheSidebar, AppNotes },
}
</script>

<style scoped>
.home-to-create:hover {
  color: #d6d8db;
}
</style>
