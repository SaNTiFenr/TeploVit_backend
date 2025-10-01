<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class NovaAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Проверяем, существует ли уже админ
        if (!User::where('email', 'admin@teplovit.com')->exists()) {
            User::create([
                'name' => 'Nova Admin',
                'email' => 'admin@teplovit.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
            ]);
            // создаем категорию
            
            $this->command->info('Nova Admin создан успешно!');
            $this->command->info('Email: admin@teplovit.com');
            $this->command->info('Password: password');
        } else {
            $this->command->info('Nova Admin уже существует!');
        }
    }
}
