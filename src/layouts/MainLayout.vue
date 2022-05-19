<template>
  <the-navbar />
  <div class="container_with-nav">
    <app-message></app-message>
    <router-view></router-view>
  </div>
  <mobile-navbar />
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import AppMessage from '@/components/ui/AppMessage.vue'
import MobileNavbar from '@/components/MobileNavbar.vue'

export default {
  components: { TheNavbar, AppMessage, MobileNavbar },
}
</script>
