<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Dossier;
use App\Http\Resources\dossier\DossierResource;


class DossierController extends Controller
{
    public function index()
    {
        return DossierResource::collection(Dossier::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreDossierRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDossierRequest $request)
    {
        $data = $request->validated();
        $dossier = Dossier::create($data);

        return response(new DossierResource($dossier) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Dossier $dossier
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $dossier = Dossier::find($id);
        return response()->json($dossier);
    }
    public function getPatient(int $dossierId)
    {
        $dossier = Dossier::find($dossierId);
        if (!$dossier) {
            return response()->json(['error' => 'Dossier not found'], 404);
        }
        $patient = $dossier->patient; 
        return response()->json($patient);
    }
    public function getCovertures(int $dossierId)
    {
        // Find the dossier by ID
        $dossier = Dossier::find($dossierId);

        if (!$dossier) {
            return response()->json(['error' => 'Dossier not found'], 404);
        }
        $covertures = $dossier->covertures;  // Assuming a 'covertures' relationship

        // Return the covertures data
        return response()->json($covertures);
    }
    public function getAntecedents(int $dossierId)
    {
        $dossier = Dossier::find($dossierId);

        if (!$dossier) {
            return response()->json(['error' => 'Dossier not found'], 404);
        }
        $antecedents = $dossier->antecedents;  // Assuming a 'antecedents' relationship

        // Return the antecedents data
        return response()->json($antecedents);
    }
    public function getAllergies(int $dossierId)
    {
        $dossier = Dossier::find($dossierId);

        if (!$dossier) {
            return response()->json(['error' => 'Dossier not found'], 404);
        }
        $allergies = $dossier->allergies;  // Assuming a 'allergies' relationship

        // Return the allergies data
        return response()->json($allergies);
    }
    public function getExamens(int $dossierId)
    {
        $dossier = Dossier::find($dossierId);

        if (!$dossier) {
            return response()->json(['error' => 'Dossier not found'], 404);
        }
        $examens = $dossier->examens;  // Assuming a 'examens' relationship

        // Return the examens data
        return response()->json($examens);
    }
    public function getVaccins(int $dossierId)
    {
        $dossier = Dossier::find($dossierId);

        if (!$dossier) {
            return response()->json(
                [
                    'error' => 'Dossier not found',
                    'table' => []
                ]
                , 404);
        }
        $vaccins = $dossier->vaccins;  // Assuming a 'vaccins' relationship

        // Return the vaccins data
        return response()->json($vaccins);
    }
    public function getVitamines(int $dossierId)
    {
        $dossier = Dossier::find($dossierId);

        if (!$dossier) {
            return response()->json(['error' => 'Dossier not found'], 404);
        }
        $vitamines = $dossier->vitamines;  // Assuming a 'vitamines' relationship

        // Return the vitamines data
        return response()->json($vitamines);
    }
    public function getConsultations(int $dossierId)
    {
        // Find the dossier by ID
        $dossier = Dossier::find($dossierId);

        if (!$dossier) {
            return response()->json(['error' => 'Dossier not found'], 404);
        }
        $consultations = $dossier->consultations()->with('medecin')->get();  // Assuming a 'consultations' relationship

        // Return the consultations data
        return response()->json($consultations);
    }
    public function getVisites(int $dossierId)
        {
        // Find the dossier by ID
        $dossier = Dossier::find($dossierId);

        if (!$dossier) {
            return response()->json(['error' => 'Dossier not found'], 404);
        }
        $visites = $dossier->visites;  // Assuming a 'visites' relationship

        // Return the visites data
        return response()->json($visites);
    }
    public function test(Request $request){
        $dossier = Dossier::create($request->all());   
        return response()->json($dossier);
    }
}
