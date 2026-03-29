<?php

namespace Database\Seeders;

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
        // Берём логин и пароль из .env
        $adminEmail = env('NOVA_ADMIN_EMAIL', 'admin@teplovit.com');
        $adminPassword = env('NOVA_ADMIN_PASSWORD', 'password');
        $adminName = env('NOVA_ADMIN_NAME', 'Nova Admin');

        // Проверяем, существует ли уже админ
        if (!User::where('email', $adminEmail)->exists()) {
            User::create([
                'name' => $adminName,
                'email' => $adminEmail,
                'email_verified_at' => now(),
                'password' => Hash::make($adminPassword),
            ]);

            $this->command->info('Nova Admin создан успешно!');
            $this->command->info("Email: {$adminEmail}");
            $this->command->info("Password: {$adminPassword}");
        } else {
            $this->command->info('Nova Admin уже существует!');
        }
    }
}