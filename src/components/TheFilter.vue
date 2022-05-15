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
      <button class="filter__btn_danger">Очистить</button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const title = ref(null)
    const type = ref(null)
    return {
      title,
      type,
    }
  },
}
</script>

<style></style>
