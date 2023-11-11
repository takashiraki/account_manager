<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

// Route::get('/test', function () {
//     return view('dashboard');
// });

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/login', function () {
//     return view('Auth.login');
// });

// Route::get('/forget-password', function () {
//     return view('Auth.forget-password');
// });

// Route::get('/completed-password-reset-request', function () {
//     return view('Auth.complete-request-forget-password');
// });

// Route::get('/reset-password', function () {
//     return view('Auth.reset-password');
// });
