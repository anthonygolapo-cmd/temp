<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;



Route::get('/', function () {
    return view('welcome');
});

// Posts CRUD routes
Route::resource('posts', PostController::class);

