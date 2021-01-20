# ДЕМО

https://codesandbox.io/s/rough-brook-86fed

# 📝 Домашнее задание

Необходимо разработать список задач и понять, как производить манипуляции с массивом, данные которого будут выводиться в вашем приложении.
Ниже будут перечислены чекпоинты, которые вы можете выполнить. Красным отмечены те чекпоинты, которые необходимо выполнить, чтобы задание считалось завершёным.

### 1. Создание задачи

Необходимо получать из инпута текст задачи и сохранить объект в массиве `tasks`.
Учитывай то, что у каждой задачи должен быть свой уникальный `id`.
При каждом создании задачи, `id` должен увеличиваться на **+1** в новом объекте.

### 2. Удаление задачи

Реализуй возможность удаления задачи. Ты уже знаешь, как выводить массив каких-то объектов и как устанавливать `onClick` на HTML-элементы.
При клике на кнопку удаления, необходимо выводить окно подтверждения. Если юзер кликнет "**ОК**", то необходимо удалить из стейта конкретный объект с этой задачей.

### 3. Редактирование задачи

Если ты смог реализовать удаление, то тебе не составит труда реализовать редактирование задачи. Ты, как мега-крутой JS-разработчик знаешь о существовании в `window` метода, который умеет выводить окошко с полем ввода текста (не плагин).

1. Определи `id` задачи.
2. Выводи это окно с полем ввода текста.
3. Получи введённое значение.
4. Найди задачу в массиве и замени старый текст на тот, что был указан в окне ввода.

### 4. Выбор цвета задачи

При создании задачи, нужно указывать цвет задачи. По умолчанию указываем цвет `grey`.
**Пример:**

```json
{
  "id": 1,
  "text": "Тестовая задача",
  "color": "grey"
}
```

При клике на любой цвет, установи в свойстве `className` доп. класс `active`, который визуально даст понять, какой цвет будет установлен при создании задачи.
Не меняй напрямую DOM-свойства, для этого есть `useState`.
Когда задача добавлена, сбрасывай цвет на серый.

### 5. Задача выполнена

При создании объекта задачи, по умолчанию указывай `completed: false`.
Необходимо реализовать установку статуса задачи "**Выполнено**". Когда пользователь кликнет по галочке слева, в массиве конкретной задачи нужно установить свойство `completed: true`.
Для этого необходимо определить `id` задачи.
У каждой галочки есть своё HTML-свойство `id`. Не забудь указать в этом свойстве `id` самой задачи, чтобы при клике на третью ил четвёртую галочку, не отмечалась первая.

### 6. Фокус на инпут

После каждого добавления задачи, устанавливай фокус снова на инпут, чтобы юзеру не пришлось кликать снова по полю, чтобы ввести текст.

### 7. Сохранение задач в localStorage

У нас нет сервера и соответственно БД, но твоя мама попросила записать список продуктов (не меня), которые тебе необходимо купить.
Если ты добавишь эти продукты в свою тудушку, то после перезагрузки страницы, список стирается.
Реализуй сохранение задач в `localStorage`. Если в локалсторе есть ранее добавленные задачи, то заранее устанавливай их в массив задач.
