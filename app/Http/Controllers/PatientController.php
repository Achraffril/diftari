<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StorePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use App\Http\Resources\PatientResource;
use App\Models\Patient;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;


class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return PatientResource::collection(Patient::query()->orderBy('id', 'desc')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StorePatientRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePatientRequest $request)
    {
        $data = $request->validated();
        $patient = Patient::create($data);

        return response(new PatientResource($patient) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Patient $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        return new PatientResource($patient);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdatePatientRequest $request
     * @param \App\Models\Patient                     $patient
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePatientRequest $request, Patient $patient)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $patient->update($data);

        return new PatientResource($patient);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Patient $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();

        return response("", 204);
    }
    public function GetDossier(string $v){
        $patient = Patient::find(); // Find a patient by ID
        $dossier = $patient->dossier; // Access the associated dossier
    }

    public function getPatients(){
        $patients = Patient::where('account_status','active')->get();
        return response()->json($patients);
    }
    public function test(Request $request){
        // $dossier = Patient::create($request->all());   
        return response()->json($request);
    }

    public function profile(int $id){
        return response()->json(Patient::find($id));
    }
    public function getDemandes(){
        $demandes = Patient::where('account_status','pending')->get();
        return response()->json($demandes);
    }

    public function activateAccount(int $patientID)
    {      
        $patient = Patient::find($patientID);
        if (!$patient) {
            return response()->json(['message' => 'patient not found'], 404);
        }
        $patient->account_status = "active";
        $patient->update();
        return response()->json(['message' => 'patient account activated successfully']);
    }
    public function cancelDemande(int $patientID)
    {      
        $patient = Patient::find($patientID);
        if (!$patient) {
            return response()->json(['message' => 'patient not found'], 404);
        }
        $patient->account_status = "unverified";
        $patient->update();
        return response()->json(['message' => 'patient account unverified']);
    }
}
