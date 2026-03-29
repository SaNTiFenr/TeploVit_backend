<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;
use Illuminate\Support\Str;
use Carbon\Carbon;

class NewsSeeder extends Seeder
{
    public function run(): void
    {
        $newsItems = [
            [
                'title' => 'Запуск нового продукта TEPLOVIT 2025',
                'content' => 'Компания TEPLOVIT представила новую линейку тепловых приборов для дома и офиса.',
                'slug' => Str::slug('Запуск нового продукта TEPLOVIT 2025'),
                'image' => 'news/product_launch.jpg',
                'is_published' => true,
                'published_at' => Carbon::now()->subDays(5),
            ],
            [
                'title' => 'Советы по безопасному использованию обогревателей',
                'content' => 'Правильное использование обогревателей снижает риск пожара и повышает эффективность.',
                'slug' => Str::slug('Советы по безопасному использованию обогревателей'),
                'image' => 'news/safety_tips.jpg',
                'is_published' => true,
                'published_at' => Carbon::now()->subDays(3),
            ],
            [
                'title' => 'TEPLOVIT открывает новый сервисный центр',
                'content' => 'Новый сервисный центр обеспечит быстрый ремонт и обслуживание техники.',
                'slug' => Str::slug('TEPLOVIT открывает новый сервисный центр'),
                'image' => 'news/service_center.jpg',
                'is_published' => true,
                'published_at' => Carbon::now()->subDays(2),
            ],
            [
                'title' => 'Скидки на зимнюю коллекцию TEPLOVIT',
                'content' => 'Только до конца месяца действуют специальные скидки на все обогреватели.',
                'slug' => Str::slug('Скидки на зимнюю коллекцию TEPLOVIT'),
                'image' => 'news/winter_sale.jpg',
                'is_published' => true,
                'published_at' => Carbon::now()->subDay(),
            ],
            [
                'title' => 'Новое руководство по эксплуатации оборудования',
                'content' => 'Обновлённое руководство поможет правильно настроить и использовать приборы TEPLOVIT.',
                'slug' => Str::slug('Новое руководство по эксплуатации оборудования'),
                'image' => 'news/manual_update.jpg',
                'is_published' => false,
                'published_at' => null,
            ],
        ];

        foreach ($newsItems as $item) {
            News::create($item);
        }

        $this->command->info('✅ Добавлено 5 тестовых новостей!');
    }
}
