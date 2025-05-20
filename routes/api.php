<?php

use App\Http\Controllers\WorksController;
use Illuminate\Support\Facades\Route;
use App\Models\Work;

// Тестовый маршрут
Route::get('/test', function () {
    return response()->json(['status' => 'OK']);
});

// Маршрут для получения работ
Route::get('/works', [WorksController::class, 'index']);

Route::get('/works/{id}', [WorksController::class, 'show']);
