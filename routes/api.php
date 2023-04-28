<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FrontEndController;
use App\Http\Controllers\TutorielController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::controller(TutorielController::class)->group(function(){
    Route::get('/pointclient/tuto/{id}' , 'tutoriel');
    Route::get('/pointclient/tuto/next/{id}' , 'tutorielNext');
    Route::get('/pointclient/tuto/prev/{id}' , 'tutorielPrev');
    Route::get('/pointclient/tuto/list/computer' , 'computerList');
});

Route::controller(DashboardController::class)->group(function(){
    Route::get('/post/command/{id}' , 'postCommand');
    Route::get('/search/product/{id}' , 'searchAllProduct');
    Route::get('/smartphone/one/vague' , 'smartPhoneOneVague');
    Route::get('/smartphone/unique/product/{id}','spOnly');
    Route::get('/computer/one/vague' , 'computerOneVague');
    Route::get('/computer/unique/product/{id}','cpOnly');
    Route::get('/smarttv/one/vague' , 'smartTvOneVague');
    Route::get('/smarttv/unique/product/{id}','stOnly');
    Route::get('/electro/one/vague' , 'produitOneVague');
    Route::get('/produit/unique/product/{id}','pdOnly');
    Route::get('/allproduct/one/vague' , 'allProductOneVague');
    Route::get('/purchase/unique/product/{id}','pdOnly');
});




Route::controller(PortContactController::class)->group(function(){
    Route::post('/jm/portfolio/contact' , 'portContact');
});


Route::controller(FrontEndController::class)->group(function(){
    Route::post('/service/login' , 'authentication');
    Route::post('/service/register' , 'register');
    // Route::post('/service/disconnect/user' , 'logOutUser');
});

Route::controller(ContactController::class)->group(function(){
    Route::post('/service/contact' , 'receiveUserMessage');
});

Route::middleware('auth:front')->group( function () {
    Route::get('/user', [FrontEndController::class,'giveUserConnect']);
    Route::post('/service/disconnect/user' , [FrontEndController::class,'logOutUser']);
});

