export function validFormLogin(authObj) {
    if (authObj?.password.length) return 'Неверные данные'

    if (!authObj?.login.length) return 'Данного аккаунта не существует';
}

export function validFormRegistration(authObj) {
    if (authObj?.password?.length < 8) return 'Пароль меньше 8 символов';

    if (authObj?.password !== authObj?.passwordConfirm) return 'Пароли не совпадают';

    if (authObj?.login?.length < 3) return 'Логин меньше 3 символов';
}