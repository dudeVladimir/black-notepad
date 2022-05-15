const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с таким почтовым адресом не был найден',
  INVALID_PASSWORD: 'Неверный пароль',
  USER_DISABLED: 'Учетная запись пользователя отключена администратором',
  EMAIL_EXISTS: 'Данный адрес электронной почты уже зарегистрирован',
  TOO_MANY_ATTEMPTS_TRY_LATER:
    'Мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже.',
  auth: 'Пожалуйста войдите в систему',
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}
