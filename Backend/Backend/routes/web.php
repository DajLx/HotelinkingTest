<?php


use App\Http\Controllers\codeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use App\Http\Controllers\OfertController;

Route::post('/login', [UserController::class, 'Login']);


Route::post('/register', [UserController::class, 'Register']);
Route::get('/getoPi', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
Route::get('/getOfferts', [OfertController::class, 'GetOferts']);
Route::post('/createCode', [userController::class, 'createCode']);
Route::get('/getCodes', [userController::class, 'getCodesOfUser']);
Route::put("/checkCode", [codeController::class, "canjearCupon"]);
