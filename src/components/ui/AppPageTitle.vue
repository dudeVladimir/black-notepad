<template>
  <div class="page-title">
    <slot />
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style></style>
