<?php

use Illuminate\Support\Facades\Route;
use App\Models\Work;

Route::get('/test', function () {
    return response()->json(['status' => 'OK']);
});

Route::get('/works', function () {
    return Work::all();
});
