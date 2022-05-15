<template>
  <section class="create">
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
import axios from 'axios'
import { error } from '@/utils/error'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { values } from 'lodash'

export default {
  setup() {
    const store = useStore()
    const { handleSubmit, isSubmitting } = useForm()

    const {
      value: title,
      errorMessage: tError,
      handleBlur: tBlur,
    } = useField(
      'title',
      yup
        .string()
        .trim()
        .required('Это поле обязательно')
        .max(30, 'Максимальное количество символов - 30')
    )

    const {
      value: body,
      errorMessage: bError,
      handleBlur: bBlur,
    } = useField(
      'body',
      yup
        .string()
        .trim()
        .required('Это поле обязательно')
        .max(1000, 'Максимальное количество символов - 1000')
    )

    const {
      value: type,
      errorMessage: tyError,
      handleBlur: tyBlur,
    } = useField(
      'type',
      yup
        .string()
        .trim()
        .required('Это поле обязательно')
        .max(1000, 'Максимальное количество символов - 1000')
    )

    const onSubmit = handleSubmit(async (values) => {
      try {
        // await store.dispatch('create/create', values)
        console.log(values)
      } catch (e) {}
    })

    return {
      title,
      tBlur,
      tError,
      body,
      bBlur,
      bError,
      type,
      tyBlur,
      tyError,
      onSubmit,
      isSubmitting,
    }
  },
}
</script>

<style></style>
