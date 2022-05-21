<template>
  <nav class="mobile-nav">
    <div class="nav-link-block_mobile">
      <router-link to="/" class="nav-link-nav-link-block__link_mobile"
        ><img
          src="@/assets/img/home.png"
          alt="Главная"
          class="nav-img"
          id="home"
      /></router-link>
      <router-link to="/create" class="nav-link-nav-link-block__link_mobile"
        ><img
          src="@/assets/img/create.png"
          alt="Создать"
          class="nav-img"
          id="create"
      /></router-link>
      <router-link to="/faq" class="nav-link-nav-link-block__link_mobile"
        ><img src="@/assets/img/faq.png" alt="FAQ" class="nav-img"
      /></router-link>
      <a
        href="https://github.com/dudeVladimir/black-notepad"
        target="_blank"
        class="nav-link-nav-link-block__link_mobile"
        ><img src="@/assets/img/git.png" alt="GitHub" class="nav-img"
      /></a>
      <router-link
        to="/auth"
        class="nav-link-nav-link-block__link_mobile"
        @click="logout"
        ><img
          src="@/assets/img/logout.png"
          alt="Выход"
          class="nav-img"
          id="logout"
      /></router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    const logout = () => {
      store.commit('auth/logout')
    }
    return { logout }
  },
}
</script>
