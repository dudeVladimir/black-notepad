<template>
  <app-loader v-if="loading"></app-loader>
  <div class="note" v-else-if="note">
    <app-page-title :title="`Заметка с ID: ${$route.params.id}`">
      <a class="back" @click="$router.go(-1)">&#9668;</a>
    </app-page-title>
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
        <button class="create__btn" :disabled="isSubmitting">Обновить</button>
      </div>
      <small class="create__error-message" v-if="tyError">{{ tyError }}</small>
    </form>
    <button class="note__btn_danger" @click="remove($route.params.id)">
      Удалить
    </button>
  </div>
  <div class="note" v-else>
    <h2>
      Заметки с ID ({{ $route.params.id }}) нет,
      <router-link to="/" class="to">вернуться на главную</router-link>
    </h2>
  </div>
</template>

<script>
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import AppPageTitle from '@/components/ui/AppPageTitle.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import { onMounted, ref } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    const loading = ref(true)
    const note = ref()

    onMounted(async () => {
      loading.value = true
      note.value = await store.dispatch('request/loadById', route.params.id)
      if (note.value) {
        title.value = note.value.title
        body.value = note.value.body
        type.value = note.value.type
      }
      loading.value = false
    })

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
      await store.dispatch('request/update', { ...values, id: route.params.id })
    })

    const remove = async (id) => {
      await store.dispatch('request/remove', id)
      router.push('/')
    }

    return {
      note,
      loading,
      remove,
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
  components: {
    AppPageTitle,
    AppLoader,
  },
}
</script>
