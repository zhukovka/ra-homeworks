Форма подписки
===

Ваша задача - реализовать форму для подписки на новости.

![SubscribeForm](./subscribeForm.gif)

## Описание компонента

Необходимо реализовать форму подписки на новости с встроенной валидацией.

* При вводе невалидного email-адреса форма получает класс `is-error` и пользователю показывается сообщение с текстом `Пожалуйста, проверьте корректность email`.
* При вводе корректного email-адреса форма получает класс `is-valid`.

HTML-структура формы:

```html
<div class="subscribe__form">
  <form class="form form--subscribe">
    <h4 class="form-title">Подписаться:</h4>
    <div class="form-group">
      <label for="input-email" class="sr-only">Email</label>
      <input type="email" id="input-email" placeholder="Email" class="form-control"/>
      <div class="form-error">Пожалуйста, проверьте корректность email</div>
      <button type="submit" class="form-next">
        <i class="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  </form>
</div>
```

## Реализация

Необходимо реализовать компонет `SubscribeForm`.

### Локально с использованием git

Компонент необходимо реализовать в файле `./js/SubscribeForm.js`. Файл уже подключен к документу, поэтому другие файлы изменять не требуется.
**Вы можете создавать любые дополнительные компоненты.**

### В песочнице CodePen

Реализуйте компонент во вкладке JS(Babel). Перед началом работы сделайте форк этого пена:

https://codepen.io/hoodsey20/pen/MEydyx