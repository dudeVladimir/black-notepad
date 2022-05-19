<template>
  <div class="questions">
    <app-page-title title="Вопросы"></app-page-title>
    <div
      class="question"
      v-for="q in questions"
      :key="q.question"
      @click="q.isOpen = !q.isOpen"
    >
      <h3>{{ q.question }}</h3>
      <span v-show="q.isOpen">{{ q.answer }}</span>
    </div>
  </div>
</template>

<script>
import AppPageTitle from '@/components/ui/AppPageTitle.vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    return { questions: store.state.faq.questions }
  },
  components: { AppPageTitle },
}
</script>
