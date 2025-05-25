<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/', function (Request $request) {
    return view('app',  [
        'url' => $request->path()
    ]);
});
