<template>
  <span :class="['badge', { danger: type === 'important' ? true : false }]">{{
    typeText
  }}</span>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: {
    type: {
      type: String,
    },
  },
  setup(props) {
    const typeText = computed(() => {
      if (props.type === 'important') {
        return 'Важное'
      } else {
        return 'Заметка'
      }
    })
    return { typeText }
  },
}
</script>

<style></style>
