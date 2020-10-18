# Шаг 6. Подключение бота к телеграм

Перейдите в каталог и выберете сервис API Gateway.
Выберете ранее созданный API-шлюз с именем `for-serverless-hello-telegram-bot`.
Измените спецификацию. Добавьте в нее секцию `fshtb-function` из файла `for-serverless-hello-telegram-bot.yml`.
Замените `IDYOURFUNCTION` на id вашей функции, созданной ранее.
Сохраните изменения.

Для создания связи между ранее созданным телеграм-ботом и вашей функцией необходимо. 
Заменить `YOURTOKEN` на токен вашего телеграм-бота и `YOURAPIGWURL` на url из секции `servers` вашего API-шлюза.
После этого в терминале вызвать веб-хук.

```
curl --request POST --url https://api.telegram.org/botYOURTOKEN/setWebhook --header 'content-type: application/json' --data '{"url": "YOURAPIGWURL/fshtb-function"}'
```

После положительного ответа связь создана. И вы можете поговорить со своим ботом.

Измените функцию, чтобы отправить картинку в телеграм.
Для этого внесите изменение в файл `index.js`, не забудте заменить `YOURAPIGWURL` на url из секции `servers` вашего API-шлюза.
После создания версии функции, ваш телеграм-бот будет отправлять вам картинку из вашего Object Storage, опубликованную через ваш API-шлюз. 
 
## Видео

https://youtu.be/eqWu1s16zbo