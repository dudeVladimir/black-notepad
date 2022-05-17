<template>
  <app-loader v-if="loading"></app-loader>
  <div class="home-page" v-else>
    <the-sidebar>
      <the-filter v-model="filter"></the-filter>
    </the-sidebar>
    <section class="home-page__content">
      <app-page-title title="Все заметки"></app-page-title>
      <app-notes :notes="notes" v-if="notes.length > 0"></app-notes>
      <h3 v-else>
        Заметок нет,
        <router-link to="/create" class="to">создайте новую</router-link>
      </h3>
    </section>
  </div>
</template>

<script>
import TheSidebar from '@/components/ui/TheSidebar.vue'
import TheFilter from '@/components/TheFilter.vue'
import AppNotes from '@/components/ui/AppNotes.vue'
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import AppPageTitle from '@/components/ui/AppPageTitle.vue'
import AppLoader from '@/components/ui/AppLoader.vue'

export default {
  setup() {
    const store = useStore()

    const loading = ref(false)
    const filter = ref({})

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    const notes = computed(() =>
      store.getters['request/requests']
        .filter((note) => {
          if (filter.value.title) {
            return note.title.includes(filter.value.title)
          } else {
            return note
          }
        })
        .filter((note) => {
          if (filter.value.type) {
            return note.type.includes(filter.value.type)
          } else {
            return note
          }
        })
    )

    return { loading, notes, filter }
  },
  components: { TheFilter, TheSidebar, AppNotes, AppPageTitle, AppLoader },
}
</script>

<style></style>
