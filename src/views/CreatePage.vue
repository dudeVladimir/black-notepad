<template>
  <section class="create">
    <form class="create__form" @submit.prevent>
      <input
        type="text"
        name="title"
        id="title"
        class="create__input"
        placeholder="Заголовок"
        v-model="title"
      />
      <textarea
        name=""
        id="body"
        rows="10"
        class="create__body"
        placeholder="Введите текст заметки"
        v-model="body"
      ></textarea>
      <div>
        <select name="type" id="type" class="create__select" v-model="type">
          <option value="note" selected>Заметка</option>
          <option value="important">Важное</option>
        </select>
        <button class="create__btn">Добавить</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
import { error } from '@/utils/error'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {},
}
</script>

<style></style>
