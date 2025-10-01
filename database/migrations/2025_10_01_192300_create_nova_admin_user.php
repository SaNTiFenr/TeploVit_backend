<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Создаем администратора Nova
        User::create([
            'name' => 'Nova Admin',
            'email' => 'admin@teplovit.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Удаляем созданного администратора
        User::where('email', 'admin@teplovit.com')->delete();
    }
};
