<?php

namespace App\Http\Controllers;

use App\Models\Consultation;
use App\Http\Requests\StoreConsultationRequest;
use App\Http\Requests\UpdateConsultationRequest;
use App\Http\Resources\dossier\ConsultationResource;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    /**
     * Display a listing of the resource.,  
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $data = Consultation::all();
        return response()->json($data);    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreConsultationRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $consultation = Consultation::create($data);

        return response($consultation , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Consultation $consultation
     * @return \Illuminate\Http\Response
     */
    public function show(Consultation $consultation)
    {
        return new ConsultationResource($consultation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateConsultationRequest $request
     * @param \App\Models\Consultation                     $consultation
     * @return \Illuminate\Http\Response
     */
    public function update(StoreConsultationRequest $request, Consultation $consultation)
    {
        $data = $request->validated();
        $consultation->update($data);

        return new ConsultationResource($consultation);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Consultation $consultation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Consultation $consultation)
    {
        $consultation->delete();

        return response("", 204);
    }
}
