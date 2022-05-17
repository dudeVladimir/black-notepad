<template>
  <div class="filter">
    <h4>Поиск</h4>
    <input
      type="text"
      class="filter__text"
      placeholder="Начните вводить название"
      v-model="title"
    />
    <div>
      <select name="type" id="type" class="filter__select" v-model="type">
        <option selected disabled>Выберите тип</option>
        <option value="note">Заметка</option>
        <option value="important">Важное</option>
      </select>
      <button class="filter__btn_danger" v-if="isActive" @click="reset">
        Очистить
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const title = ref()
    const type = ref()

    watch([title, type], (values) => {
      emit('update:modelValue', { title: values[0], type: values[1] })
    })

    const isActive = computed(() => title.value || type.value)

    return {
      title,
      type,
      isActive,
      reset: () => {
        ;(title.value = null), (type.value = null)
      },
    }
  },
}
</script>

<style></style>
