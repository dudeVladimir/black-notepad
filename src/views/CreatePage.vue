<template>
  <section class="create">
    <app-page-title title="Создание заметки"></app-page-title>
    <form class="create__form" @submit.prevent="onSubmit">
      <input
        type="text"
        name="title"
        id="title"
        :class="['create__input', { 'create-invalid': tError }]"
        placeholder="Заголовок"
        v-model="title"
      />
      <small class="create__error-message" v-if="tError">{{ tError }}</small>
      <textarea
        name=""
        id="body"
        rows="10"
        :class="['create__body', { 'create-invalid': bError }]"
        placeholder="Введите текст заметки"
        v-model="body"
      ></textarea>
      <small class="create__error-message" v-if="bError">{{ bError }}</small>
      <div>
        <select
          name="type"
          id="type"
          :class="['create__select', { 'create-invalid': tyError }]"
          v-model="type"
        >
          <option value="note" selected>Заметка</option>
          <option value="important">Важное</option>
        </select>
        <button class="create__btn" :disabled="isSubmitting">Добавить</button>
      </div>
      <small class="create__error-message" v-if="tyError">{{ tyError }}</small>
    </form>
  </section>
</template>

<script>
import AppPageTitle from '@/components/ui/AppPageTitle.vue'
import { useCreateForm } from '@/use/create-form'

export default {
  setup() {
    return {
      ...useCreateForm(),
    }
  },
  components: { AppPageTitle },
}
</script>

<style></style>
