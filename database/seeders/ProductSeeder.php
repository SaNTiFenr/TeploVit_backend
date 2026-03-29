<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Проверяем, есть ли хотя бы одна категория
        $category = Category::first();

        if (!$category) {
            $category = Category::create(['name' => 'Default Category']);
            $this->command->info('Создана категория: Default Category');
        }

        // Массив тестовых продуктов
        $products = [
            [
                'name' => 'Тепловентилятор TEPLOVIT 1000',
                'price' => 2999.99,
                'old_price' => 3499.99,
                'is_new' => true,
                'description' => 'Компактный тепловентилятор для дома и офиса.',
                'specs' => json_encode([
                    ['key' => 'Мощность', 'value' => '1000 Вт'],
                    ['key' => 'Напряжение', 'value' => '220 В'],
                ]),
                'image' => 'products/teplovit_1000.jpg',
                'images' => json_encode([
                    'products/gallery/teplovit_1000_1.jpg'
                ]),
            ],
        ];

        foreach ($products as $data) {
            Product::create(array_merge($data, [
                'category_id' => $category->id,
            ]));
        }

        $this->command->info('✅ Добавлено 5 тестовых продуктов!');
    }
}
