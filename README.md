Домашние задания курса React
===

## Список заданий

1. [JSX](./jsx/)
2. [Функциональный компонент](./func-component/)
3. [События](./events/)
4. [Состояние компонентов](./state/)
5. [Композиция компонентов](./composition/)
6. [Контролируемые компоненты](./ctrl-component/)

## Рекомендации по выполнению домашних работ

- Используйте материалы лекции для выполнения заданий.
- Делайте ровно то, что требуется в задании с учетом всех ограничений.
- Качественно оформляйте код вашей работы. Следуйте рекомендациям по [стилю оформления кода](https://netology-university.bitbucket.io/codestyle/), и всегда думайте о преподавателе который будет читать ваш код.
- Если у вас возникают трудности и вопросы при выполнении задания, задайте их в группе на Facebook. Можно задавать любые вопросы по заданию, и подкреплять вопросы проблемными фрагментами кода (публикуйте их в [CodePen] или [Gist]). Но недопустимо публиковать ссылки на решение целиком.

## Реализация

### Локально с использованием git

#### Подготовка рабочей среды

Эти действия следует выполнить один раз перед выполнением первого задания.

Предварительно установите [git] и [NodeJS]. После чего перейдите в папку с проектами в консоле, и выполните следующие действия:

1. Клонируйте репозиторий:
  ```
  git clone https://github.com/netology-code/ra-homeworks.git
  ```
2. Перейдите в папку:
  ```
  cd ./ra-homeworks
  ```
3. Установите зависимости:
  ```
  npm install
  ```
4. Запустите локальный сервер:
  ```
  npm start
  ```

Рабочая среда готова. Теперь вы можете работать над заданиями, править файлы и открывать их используя локальный сервер.

Например для первой задачи задания по JSX вам нужно править файлы в папке `./jsx/store/`, а результат можно посмотреть по адресу:

> http://localhost:3000/jsx/store/

Страница в браузере будет обновляться автоматически при изменениях.

Настройка публикации результатов:

1. Зарегистрируйтесь и создайте репозиторий на [GitHub]
2. Чтобы сделать ваши работы доступными в сети перейдите в настройки репозитория «Settings» и в блоке «GitHub Pages» выберите «master branch» и нажмите «Save». Теперь ваши работы доступны по адресу указанному в этом блоке. Например первую работу после публикации можно будет посмотреть по адресу:
  https://user.github.io/repo/jsx/store/
3. Скопируйте адрес из блока «Clone or download». Рекомендуем использовать HTTPS версию (кнопка «Use HTTPS»).
4. Выполните команду
  ```
  git remote add homework https://github.com/user/repo.git
  ```

#### Публикация результатов

После того как работа выполнена, либо вы хотите зафиксировать и показать промежуточный результат, выполните команду:
```bash
git push homework master
```

После чего можно отправить ссылку на вашу работу в репозитории [GitHub] а также ссылку на демо-версию на «GitHub Pages».

#### Получение обновлений

Эти действия необходимо выполнить если у вас нет каких-то заданий, либо вы выяснили что ваша версия не актауальная.

Чтобы загрузить обновленные задания выполните следующие действия:

1. Получите обновления:
  ```
  git pull origin master
  ```
2. Обновите зависимости:
  ```
  npm install
  ```
3. Запустите локальный сервер:
  ```
  npm start
  ```

### В песочнице CodePen

#### Перед началом выполнения домашних заданий

Создайте аккаунт на сервисе [CodePen].

#### При выполнении задания

В описании каждой задачи будет доступна ссылка на заготовку задания в сервисе [CodePen]. Ваши действия:

0. Авторизуйтесь на [CodePen].
1. Перейти по этой ссылке.
2. Нажмите кнопку «Fork». Это действие создаст копию заготовки в вашем профиле.
3. Вносите требуемые изменения и нажимайте кнопку «Save» по необходимости, чтобы не потерять изменения.
4. Когда задание будет выполнено, нажмите «Save», скопируйте адрес открытой страницы.
5. Отправьте ссылку на все выполненные задачи преподавателю в личном кабинете.

Правки от преподавателя следует делать в той же заготовке.

Все заготовки которые вы когда либо создали доступны в профиле пользователя [CodePen]:
1. Кликаете свой аватар
2. В выпадающем меню в блоке «Your profile» кликните на ссылку «Pens» (в самом низу выпадающего меню).


[git]: https://git-scm.com/
[NodeJS]: https://nodejs.org/
[GitHub]: https://github.com/
[CodePen]: https://codepen.io/
[Gist]: https://gist.github.com
