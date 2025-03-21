<?php

use App\Http\Controllers\ChirpController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\POEntryController;
use App\Http\Controllers\GRNFormController;
use App\Http\Controllers\GRNController;
use App\Http\Controllers\SOFormController;
use App\Http\Controllers\SOController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('chirps', ChirpController::class)->only(['index', 'store', 'update', 'destroy'])->middleware(['auth', 'verified']);

// Route::get('/users', [UserController::class, 'show']);

Route::resource('users', UserController::class);
Route::resource('POForm', FormController::class);
Route::resource('POEntry', POEntryController::class);
Route::resource('GRNForm', GRNFormController::class);
Route::resource('GRNEntry', GRNController::class);
Route::resource('SOForm', SOFormController::class);
Route::resource('SOEntry', SOController::class);

require __DIR__ . '/auth.php';
