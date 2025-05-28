<?php

use App\Models\Work;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorksController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

// Тестовый маршрут
Route::get('/test', function () {
    return response()->json(['status' => 'OK']);
});

// Маршрут для получения работ
Route::get('/works', [WorksController::class, 'index']);

Route::get('/works/{id}', [WorksController::class, 'show']);

// Маршрут для получения продукции
Route::get('/products', [ProductController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/contact', [ContactController::class, 'send']);
