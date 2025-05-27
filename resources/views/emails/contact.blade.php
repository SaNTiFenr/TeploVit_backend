<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Новое сообщение с сайта</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; }
        .header { color: #2d3748; font-size: 1.5rem; margin-bottom: 1rem; }
        .details { margin: 1rem 0; }
        .label { font-weight: bold; color: #4a5568; }
        .message { background: #f7fafc; padding: 1rem; border-radius: 4px; margin-top: 1rem; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            Новое сообщение с сайта ТеплоВит
        </div>

        <div class="details">
            <p><span class="label">Имя:</span> {{ $name }}</p>
            <p><span class="label">Email:</span> {{ $email }}</p>
        </div>

        <div class="message">
            <p class="label">Сообщение:</p>
            <p>{{ $messageText }}</p>
        </div>
    </div>
</body>
</html>
