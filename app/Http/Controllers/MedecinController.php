<?php

namespace App\Http\Controllers;
use App\Models\Medecin;

use App\Http\Requests\StoreMedecinRequest;
use App\Http\Requests\UpdateMedecinRequest;
use App\Http\Resources\MedecinResource;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
// use App\Models\User;
// use App\Models\Admin;
use http\Env\Response;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class MedecinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return MedecinResource::collection(Medecin::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreMedecinRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->validated();
        $medecin = Medecin::create($data);


    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Medecin $medecin
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        // return new MedecinResource($medecin);
        $medecin = Medecin::find($id);
        return response()->json($medecin);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateMedecinRequest $request
     * @param \App\Models\Medecin                     $medecin
     * @return \Illuminate\Http\Response
     */

    public function update(UpdateMedecinRequest $request, Medecin $medecin)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $medecin->update($data);

        return new MedecinResource($medecin);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Medecin $medecin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medecin $medecin)
    {
        $medecin->delete();

        return response("", 204);
    }


    public function getMedecins(){
        $medecins = Medecin::where('account_status','active')->get();
        return response()->json($medecins);
    }
    public function getConsultations($id){
        $medecin = Medecin::find($id);
        $consulation = $medecin->consultations()
        ->with('dossier.patient')
        ->get();
        return response()->json($consulation);
    }
    public function profile(int $id){
        return response()->json(Medecin::find($id));
    }
    public function getDemandes(){
        $demandes = Medecin::where('account_status','pending')->get();
        return response()->json($demandes);
    }
    public function activateAccount(int $medecinID)
    {      
        $medecin = Medecin::find($medecinID);
        if (!$medecin) {
            return response()->json(['message' => 'Doctor not found'], 404);
        }
        $medecin->account_status = "active";
        $medecin->update();
        return response()->json(['message' => 'Doctor account activated successfully']);
    }
    public function cancelDemande(int $medecinID)
    {      
        $medecin = Medecin::find($medecinID);
        if (!$medecin) {
            return response()->json(['message' => 'Doctor not found'], 404);
        }
        $medecin->account_status = "unverified";
        $medecin->update();
        return response()->json(['message' => 'Doctor account Unverified ']);
    }
    

    

}
