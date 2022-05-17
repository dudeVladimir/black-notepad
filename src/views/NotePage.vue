<template>
  <app-loader v-if="loading"></app-loader>
  <div v-else>
    <div class="note" v-if="note">
      <app-page-title :title="`Заметка с ID: ${$route.params.id}`">
        <a class="back" @click.prevent="$router.go(-1)">&#9668;</a>
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
        <small class="create__error-message" v-if="tyError">{{
          tyError
        }}</small>
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
  </div>
</template>

<script>
import AppPageTitle from '@/components/ui/AppPageTitle.vue'
import { onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useUpdateForm } from '@/use/update-form'
import AppLoader from '@/components/ui/AppLoader.vue'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const loading = ref(false)

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/loadById', route.params.id)
      loading.value = false
    })

    const remove = async (id) => {
      await store.dispatch('request/remove', id)
      router.push('/')
    }

    return { loading, remove, ...useUpdateForm() }
  },
  components: {
    AppPageTitle,
    AppLoader,
  },
}
</script>

<style></style>
