export default {
  namespaced: true,
  state() {
    return {
      questions: [
        {
          question: 'Какие технологии использованны?',
          answer:
            'Это приложение написано с использованием Composition API, разделено на переиспользованные модули. Система авторизации, регистрации и БД - Firebase. Использованны VueJS, Vuex, VueRouter, Axios - для работы с запросами к Firebase, для валидации форм использованны vee-validate & yup',
          isOpen: false,
        },
        {
          question: 'Контакты',
          answer: 'email: dude.vladimir@ya.ru, Telegram: @DudeVladimir',
          isOpen: false,
        },
      ],
    }
  },
}
