[Demo](https://polishchukviacheslav.github.io/myContacts), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# Приложение Контакты
В качестве источника данных была взята публичная REST API randomuser.me версия 1.3


## Разделы:
1. Аутентификация
2. Профиль пользователя
3. Список контактов
4. CRUD операции

### Этап 1. Аутентификация

В хедере находится кнопка “Sign In”. При клике на кнопку открывается попап, в
котором будет форма аутентификации
аутентификация “фейковоя”
В качестве менеджера форм был взят классический пакет redux-form
Данная форма содержит два поля: email и пароль. Поля формы
валидируются по таким правилам:

email
* обязательно к заполнению
* корректный формат (RFC5322)

пароль
* обязательно к заполнению
* минимум 8 символов

 допустимые символы:
- латиница (case insensitive)
- числа от 0 до 9
- доп. символы: .-_

У поля пароля есть функциональность просмотра введенного значения
Сабмит формы проходит только в случае если форма валидна

При отмене аутентификации, попап закрывается

При успешном сабмите, попап закрывается, а данные авторизации записываются в
localStorage.
При обновлении страницы, если в localStorage имеются авторизационные данные,
нужно восстановить пользователя без повторного запроса аутентификации

### Этап 2. Профиль пользователя

При успешной аутентификации запрошиваются данные профиля пользователя,
перенаправляем по маршруту /profile и там отображаем полученные данные


В хедере кнопка “Sing In” смениться приветствием пользователя по имени с
выводом его аватара, а также выпадающее меню в котором есть возможность перейти
в профиль или разлогиниться
В навигации появиться ссылка на страницу списка контактов

При logout-те, пользователя перенаправит на главную, а данные авторизации
очищены из localStorage

### Этап 3. Список контактов

По маршруту /contacts происходит запрос коллекции данных с последующим
отображением в виде таблицы.
Есть возможность переключения режима просмотра данных:
- табличный вид
- плиточный вид

Если страница посещается
впервые, то использовать по-умолчанию табличный вид
Есть возможность обновить данные по клику на кнопку без перезагрузки
страницы
- день рождения пользователя  в американском формате
- email кликабельным
- телефон кликабельныq
- адрес в формате:
/страна/
номер улицы название улицы, город, штат индекс


Есть возможность фильтровать данные:
- по полному имени;
- по половому признаку;
- по национальности;

Фильтрация происходит без ручной отправки формы
Сама форма реализована без использования пакета redux-form
Очистка фильтра возвращает коллекцию к изначальному состоянию
Фильтруем всю коллекцию, а не только ту часть которая сейчас в таблице
отображается

Есть возможность сортировать данные по полному имени в трех состояниях:
- от A до Z;
- от Z до A;
- изначальный порядок;

Сортируем всю коллекцию, а не только ту часть которая сейчас в таблице
отображается

Под таблицей выведена статистика по данным
- размер коллекции
- кол-во мужчин, женщин и неопределившихся
- кого больше
- кол-во контактов по каждой национальности
Выведена пагинацию

### Этап 4. CRUD операции

Просмотр пользователя
По клику на имя пользователя произойдет переход на страницу
просмотра данных пользователя и кнопка возврата к списку контактов
При возврате со страницы просмотра на страницу списка контактов,
сохранено и применено ранее выбранное состояние фильтра, сортировки

