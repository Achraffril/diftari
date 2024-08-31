<?php

use App\Http\Controllers\AllergieController;
use App\Http\Controllers\AntecedentController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MedecinAuthController;
use App\Http\Controllers\Api\UserController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AdminController;
use App\Http\Controllers\MedecinController;
use App\Http\Controllers\PatientController;

use App\Http\Controllers\ConsultationController ;
use App\Http\Controllers\CovertureController as ControllersCovertureController;
use App\Http\Controllers\DossierController;
use App\Http\Controllers\VisiteController;
use App\Http\Controllers\ExamenController as ControllersExamenController;
use App\Http\Controllers\VaccinController as ControllersVaccinController;
use App\Http\Controllers\VisiteController as ControllersVisiteController;

use App\Http\Controllers\VitamineController;
use App\Http\Controllers\InsightController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('/users', UserController::class);

    Route::get('/patient/{id}', [MedecinController::class, 'show']);
});

Route::post('/medecin/signup', [MedecinAuthController::class, 'signup']);


Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/medecin/signup', [AuthController::class, 'signup_medecin']);
Route::post('/medecin/login', [AuthController::class, 'login_medecin']);
Route::post('/patient/signup', [AuthController::class, 'signup_patient']);
Route::post('/patient/login', [AuthController::class, 'login_patient']);

Route::post('/admin/login', [AuthController::class, 'login_admin']);

Route::apiResource('/dossiers', DossierController::class);
Route::prefix('/dossiers/{dossierId}')->group(function () {

    
    Route::get('/covertures', [DossierController::class, 'getCovertures']);
    Route::get('/antecedents', [DossierController::class, 'getAntecedents']);
    Route::get('/allergies', [DossierController::class, 'getAllergies']);
    Route::get('/examens', [DossierController::class, 'getExamens']);
    Route::get('/vaccins', [DossierController::class, 'getVaccins']);
    Route::get('/vitamines', [DossierController::class, 'getVitamines']);
    Route::get('/consultations', [DossierController::class, 'getConsultations']);
    Route::get('/visites', [DossierController::class, 'getVisites']);

    Route::get('/',[DossierController::class,'show']);
    Route::get('/patient', [DossierController::class, 'getPatient']);
    Route::apiResource('/covertures', ControllersCovertureController::class)->except(['index']);
    Route::apiResource('/antecedents', AntecedentController::class)->except(['index']);
    Route::apiResource('/allergies', AllergieController::class)->except(['index']);
    Route::apiResource('/examens', ControllersExamenController::class)->except(['index']);
    Route::apiResource('/vaccins', ControllersVaccinController::class)->except(['index']);
    Route::apiResource('/vitamines', VitamineController::class)->except(['index']);
    Route::apiResource('/consultations', ConsultationController::class)->except(['index']);
    Route::apiResource('/visites', ControllersVisiteController::class)->except(['index']);

    Route::post('consultations',[ConsultationController::class,'store']);


});




Route::prefix('/comptes')->group(function () {

    // GET /api/dossiers/{dossierId}/patient
    Route::get('/patients',[PatientController::class,'getPatients']);
    Route::get('/medecins',[MedecinController::class,'getMedecins']);

    Route::get('/patients/{patientId}',[PatientController::class,'show']);
    Route::get('/medecins/{medecinID}',[MedecinController::class,'show']);

    Route::post('/patients/{patientId}',[PatientController::class,'update']);
    Route::post('/medecins/{medecinID}',[MedecinController::class,'update']);

});





Route::post('/testDossier',[PatientController::class,'test']);


Route::middleware('auth:sanctum')->group(function () {



    // Route::apiResource('/medecin',MedecinController::class);


});


Route::get('/admin/{adminId}',[AdminController::class,'show']);
// Route::get('/admin', function(){
//     return response()->json(array('message'=>'hello api'));
// });

Route::prefix('/comptes')->group(function () {

    Route::get('/patients',[PatientController::class,'getPatients']);
    Route::get('/medecins',[MedecinController::class,'getMedecins']);

    Route::get('/demandes/patients',[PatientController::class,'getDemandes']);
    Route::get('/demandes/medecins',[MedecinController::class,'getDemandes']);
    
    Route::post('/demandes/patients/{patientId}/activate',[PatientController::class,'activateAccount']);
    Route::post('/demandes/medecins/{medecinID}/activate',[MedecinController::class,'activateAccount']);

    Route::post('/demandes/patients/{patientId}/cancel',[PatientController::class,'cancelDemande']);
    Route::post('/demandes/medecins/{medecinID}/cancel',[MedecinController::class,'cancelDemande']);
    Route::get('/insights',[AdminController::class,'insights']);
});


    
    Route::get('/medecin/{medecin}',[MedecinController::class,'show']); 
    Route::get('/medecin/{medecin}/consultation',[MedecinController::class,'getConsultations']);
    Route::get('/medecin/{medecin}/insights', [InsightController::class, 'medecin_insights']);

