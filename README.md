0) Поднять докер (docker compose up)
1) Подключение к бд
2) Настрой .env под локальный MySQL (DB_HOST=127.0.0.1 и т.д.).
3) composer install --ignore-platform-req=ext-xml (установка зависимостей с игнорированием ext-xml)
4) php artisan key:generate (создание ключа APP)
5) php artisan migrate --seed (Создаст миграции и таблицы в бд и сущности)
6) npm i (установка зависимостей для front)(должна быть установлена нода)
7) php artisan db:seed --class=NovaAdminSeeder (накатил сиды)
(dev-разработка)
8) npm run dev (запускает сценарий сборки и запуска проекта в режиме разработки)
9) php artisan serve → открыть http://127.0.0.1:8000
(prod)
10)
