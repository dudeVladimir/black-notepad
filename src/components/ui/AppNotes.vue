<template>
  <div class="notes">
    <div class="notes__card" v-for="note in notes" :key="note.id">
      <div class="card__title">
        <h4>{{ note.title }}</h4>
        <app-badge :type="note.type"></app-badge>
      </div>
      <p>{{ note.body }}</p>
    </div>
  </div>
</template>

<script>
import AppBadge from './AppBadge.vue'

export default {
  props: {
    notes: { type: Array },
  },
  components: { AppBadge },
}
</script>

<style></style>
