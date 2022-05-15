<template>
  <nav>
    <h2 class="title">Заметки</h2>
    <div class="nav-link-block">
      <router-link to="/" class="nav-link-block__link">Главная</router-link>
      <router-link to="/create" class="nav-link-block__link"
        >Создать</router-link
      >
      <router-link to="/faq" class="nav-link-block__link">FAQ</router-link>
      <a
        href="https://github.com/dudeVladimir"
        target="_blank"
        class="nav-link-block__link"
        >GitHub</a
      >
      <router-link to="/auth" class="nav-link-block__link" @click="logout"
        >Выйти</router-link
      >
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      logout: () => {
        store.commit('auth/logout')
      },
    }
  },
}
</script>

<style></style>
