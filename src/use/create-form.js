import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'

export function useCreateForm() {
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
    await store.dispatch('request/create', values)
    title.value = ''
    body.value = ''
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
}
