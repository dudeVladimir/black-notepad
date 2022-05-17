import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

export function useUpdateForm() {
  const store = useStore()
  const route = useRoute()
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

  const note = computed(() => store.getters['request/request'])

  title.value = note.value.title
  body.value = note.value.body
  type.value = note.value.type

  const onSubmit = handleSubmit(async (values) => {
    await store.dispatch('request/update', { ...values, id: route.params.id })
  })

  return {
    note,
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
}
