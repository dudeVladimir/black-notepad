import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting, submitCount } = useForm()

  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Это поле обязательно')
      .email('Введите корректный адрес почты')
  )
  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Это поле обязательно')
      .min(6, `Минимум 6 символов`)
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, (value) => {
    if (value) {
      setTimeout(() => (submitCount.value = 0), 3000)
    }
  })

  const onSubmit = handleSubmit(async (values) => {
    await store.dispatch('auth/login', values)
    router.push('/')
  })

  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts,
  }
}
