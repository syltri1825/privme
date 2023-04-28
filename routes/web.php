<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AdrController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\DashController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CMailController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\SmartTvController;
use App\Http\Controllers\ComputerController;
use App\Http\Controllers\DealMailController;
use App\Http\Controllers\TutorielController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SmartPhoneController;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[HomeController::class, 'home'])->name('home');


//-------------------------------------------------------------------------------------------------


Route::controller(SmartPhoneController::class)->group(function(){

    Route::get('/dashboard/smartphone' , 'indexSmartphone')
    ->middleware(['auth', 'verified'])
    ->name('smartphone');
    Route::post('/formaddsmartphone', 'createSmartPhone')
    ->middleware(['auth', 'verified'])
    ->name('postSmartphone');
    Route::get('/dashboard/details/smartphone/{id}' , 'productSmartphone');
    Route::post('/formupdsmartphone/{id}' , 'upMeSmartphone');
    Route::delete('dashboard/delete/smartphone/{id}', 'suppressionSmartphone')
    ->middleware(['auth', 'verified'])
    ->name('deleteSmartphone');

});


//-------------------------------------------------------------------------------------------------


Route::controller(SmartTvController::class)->group(function(){

    Route::get('/dashboard/smarttv' , 'indexSmartTv')
    ->middleware(['auth', 'verified'])
    ->name('smarttv');
    Route::post('/formaddsmarttv', 'createSmartTv')
    ->middleware(['auth', 'verified'])
    ->name('postSmarttv');
    Route::get('/dashboard/details/smarttv/{id}' , 'productSmarttv');
    Route::post('/formupdsmarttv/{id}' , 'upMeSmartTv');
    Route::delete('dashboard/delete/smarttv/{id}', 'suppressionSmartTv')
    ->middleware(['auth', 'verified'])
    ->name('deleteSmarttv');

});

//-------------------------------------------------------------------------------------------------


Route::controller(ProduitController::class)->group(function(){

    Route::get('/dashboard/produit' , 'indexProduit')
    ->middleware(['auth', 'verified'])
    ->name('produit');
    Route::post('/formaddproduit', 'createProduit')
    ->middleware(['auth', 'verified'])
    ->name('postProduit');
    Route::get('/dashboard/details/produit/{id}' , 'productProduit');
    Route::post('/formupdproduit/{id}' , 'upMeProduit');
    Route::delete('dashboard/delete/produit/{id}', 'suppressionProduit')
    ->middleware(['auth', 'verified'])
    ->name('deleteProduit');

});


//------------------------------------------------------------------------------

Route::controller(EmailController::class)->group(function(){

    Route::get('/dashboard/mail' , 'indexMail')
    ->middleware(['auth', 'verified'])
    ->name('mail');
    Route::post('/formaddmail', 'createMail')
    ->middleware(['auth', 'verified'])
    ->name('postMail');
    Route::get('/dashboard/details/mail/{id}' , 'productMail');
    Route::post('/formupdmail/{id}' , 'upMeMail');
    Route::delete('dashboard/delete/mail/{id}', 'suppressionMail')
    ->middleware(['auth', 'verified'])
    ->name('deleteMail');

});




// ------------------------------------------------------------------------------------------------


Route::controller(ComputerController::class)->group(function(){

    Route::get('/dashboard/computer' , 'indexComputer')
    ->middleware(['auth', 'verified'])
    ->name('computer');
    Route::post('/formaddcomputer', 'createComputer')
    ->middleware(['auth', 'verified'])
    ->name('postComputer');
    Route::get('/dashboard/details/computer/{id}' , 'productComputer');
    Route::post('/formupdcomputer/{id}' , 'upMeComputer');
    Route::delete('dashboard/delete/computer/{id}', 'suppressionComputer')
    ->middleware(['auth', 'verified'])
    ->name('deleteComputer');

});


// ------------------------------------------------------------------------------------------------

Route::controller(TutorielController::class)->group(function(){
    
    Route::get('/dashboard/tutoriel' , 'indexTutoriel')
    ->middleware(['auth', 'verified'])
    ->name('tutoriel');
    Route::post('/formaddtutoriel', 'createTutoriel')
    ->middleware(['auth', 'verified'])
    ->name('postTutoriel');
    Route::post('/formupdtutoriel/{id}' , 'upMeTutoriel');
    Route::get('/dashboard/details/tutoriel/{id}' , 'productTutoriel')
    ->middleware(['auth', 'verified'])
    ->name('detailsTutoriel');
    Route::delete('dashboard/delete/tutoriel/{id}', 'suppressionTutoriel')
    ->middleware(['auth', 'verified'])
    ->name('deleteTutoriel');
    
});

// // ------------------------------------------------------------------


Route::controller(DashboardController::class)->group(function(){

    Route::delete('/dashboard/delete/ask/{id}', 'suppressionAsk')
    ->middleware(['auth', 'verified'])
    ->name('deleteAsk');
    
    Route::get('/acount/confirm','noticeAccount')
    ->middleware(['auth', 'verified'])
    ->name('message');
    Route::get('/dashboard/help','indexHelp')
    ->middleware(['auth', 'verified'])
    ->name('help');
    Route::get('/dashboard/setting','indexSetting')
    ->middleware(['auth', 'verified'])
    ->name('setting');
    Route::get('/dashboard/profile','indexProfile')
    ->middleware(['auth', 'verified'])
    ->name('profile');
    Route::get('/dashboard/news','indexNews')
    ->middleware(['auth', 'verified'])
    ->name('news');

    Route::get('/dashboard/add/computer' , 'formAddComputer')
    ->middleware(['auth', 'verified'])
    ->name('addComputer'); 
    
    Route::get('/dashboard/upd/computer/{id}' , 'formUpdComputer')
    ->middleware(['auth', 'verified'])
    ->name('updateComputer');

    Route::get('/dashboard/add/produit' , 'formAddProduit')
    ->middleware(['auth', 'verified'])
    ->name('addProduit');
    
    Route::get('/dashboard/upd/produit/{id}' , 'formUpdProduit')
    ->middleware(['auth', 'verified'])
    ->name('updateProduit');
    
    Route::get('/dashboard/add/smartphone' , 'formAddSmartphone')
    ->middleware(['auth', 'verified'])
    ->name('addSmartphone');

    Route::get('/dashboard/upd/smartphone/{id}' , 'formUpdSmartphone')
    ->middleware(['auth', 'verified'])
    ->name('updateSmartphone');
    
    Route::get('/dashboard/add/smarttv' , 'formAddSmartTv')
    ->middleware(['auth', 'verified'])
    ->name('addSmarttv');
    
    Route::get('/dashboard/upd/smarttv/{id}' , 'formUpdSmartTv')
    ->middleware(['auth', 'verified'])
    ->name('updateSmarttv');

    Route::get('/dashboard/add/mail' , 'formAddMail')
    ->middleware(['auth', 'verified'])
    ->name('addMail');
    
    Route::get('/dashboard/upd/mail/{id}' , 'formUpdMl')
    ->middleware(['auth', 'verified'])
    ->name('updateMail');
    
    Route::get('/dashboard/add/tutoriel' , 'formAddTutoriel')
    ->middleware(['auth', 'verified'])
    ->name('addTutoriel');
    
    Route::get('/dashboard/upd/tutoriel/{id}' , 'formUpdTutoriel')
    ->middleware(['auth', 'verified'])
    ->name('updateTutoriel');

    Route::get('/form/search/{id}' , 'searchMe')
    ->middleware(['auth', 'verified'])
    ->name('search');

    Route::get('/reporting' , 'indexReport')
    ->middleware(['auth', 'verified'])
    ->name('reporting');

    Route::get('/form/search/raccourcis/{id}' , 'searchRac')
    ->middleware(['auth', 'verified'])
    ->name('search.rac');

    Route::get('/dashboard','indexDashboard')
            ->middleware(['auth', 'verified'])
            ->name('dashboard');
    });

    Route::get('/email/verify',function(){
        return view('auth.verify-email');
    })->middleware('auth')->name('verification.notice');

    Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        $request->fulfill();
     
        return redirect('/home');
    })->middleware(['auth', 'signed'])->name('verification.verify');
    

require __DIR__.'/auth.php';























// Route::get('/', function () {
//     return Inertia::render('ShibatHome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// require __DIR__.'/auth.php';
