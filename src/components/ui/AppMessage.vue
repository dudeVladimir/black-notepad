<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert__title" v-if="title">{{ title }}</p>
    <p>
      {{ message.value }}
    </p>
    <span class="alert__close" @click="$store.commit('clearMessage')"
      >&times;</span
    >
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const TITLE_MAP = {
      primary: 'Успешно',
      danger: 'Ошибка',
      warning: 'Внимание',
    }

    const message = computed(() => store.state.message)

    const title = computed(() =>
      message.value ? TITLE_MAP[message.value.type] : null
    )

    return {
      title,
      message,
    }
  },
}
</script>

<style></style>
