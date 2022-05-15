<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <div :class="['auth-form__form-control', { invalid: nError }]">
      <label for="name">Имя:</label>
      <input
        type="text"
        class="auth-form__form-control__input"
        id="name"
        v-model="name"
      />
      <small class="form-control__error-message" v-if="nError">{{
        nError
      }}</small>
    </div>
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
    <div :class="['auth-form__form-control', { invalid: eError }]">
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
        type="button"
        class="auth-form__btn"
        @click="$router.push('/auth')"
      >
        Вернуться на страницу входа
      </button>
      <button
        type="submit"
        class="auth-form__btn_primary"
        :disabled="isSubmitting || isTooManyAttempts"
      >
        Зарегистрироваться
      </button>
    </div>
    <small class="error-message-btn" v-if="isTooManyAttempts"
      >Слишком много попыток зарегистрироваться, попробуйте позже</small
    >
  </form>
</template>

<script>
import { useSignupForm } from '@/use/signup-form'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const show = ref(false)
    return {
      ...useSignupForm(),
      show,
    }
  },
}
</script>

<style></style>
