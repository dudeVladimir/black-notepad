<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <div :class="['auth-form__form-control', { invalid: eError }]">
      <label for="email">Почта:</label>
      <input
        type="email"
        class="auth-form__form-control__input"
        id="email"
        v-model="email"
      />
      <small class="form-control__error-message" v-if="eError">{{
        eError
      }}</small>
    </div>
    <div :class="['auth-form__form-control', { invalid: pError }]">
      <label for="password">Пароль:</label>
      <input
        :type="show ? 'text' : 'password'"
        class="auth-form__form-control__input"
        id="password"
        autocomplete="on"
        v-model="password"
      />
      <div class="password_mask" @click="show = !show">
        <img src="@/assets/img/hide_icon.png" />
      </div>
      <small class="form-control__error-message" v-if="pError">{{
        pError
      }}</small>
    </div>
    <div class="auth-form__btn-box">
      <button
        type="submit"
        class="auth-form__btn_primary"
        :disabled="isSubmitting || isTooManyAttempts"
      >
        Войти
      </button>
      <button
        type="button"
        class="auth-form__btn"
        @click="$router.push('/signup')"
      >
        Зарегистрироваться
      </button>
    </div>
    <small class="error-message-btn" v-if="isTooManyAttempts"
      >Слишком много попыток входа, попробуйте позже</small
    >
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useLoginForm } from '../use/login-form'

export default {
  setup() {
    const show = ref(false)
    return {
      ...useLoginForm(),
      show,
    }
  },
}
</script>

<style></style>
