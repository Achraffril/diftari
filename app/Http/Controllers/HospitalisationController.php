<?php

namespace App\Http\Controllers;

use App\Models\Hospitalisation;
use App\Http\Requests\StoreHospitalisationRequest;
use App\Http\Requests\UpdateHospitalisationRequest;
use App\Http\Resources\HospitalisationResource;
use Illuminate\Http\Request;

class HospitalisationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return HospitalisationResource::collection(Hospitalisation::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreHospitalisationRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHospitalisationRequest $request)
    {
        $data = $request->validated();
        $Hospitalisation = Hospitalisation::create($data);

        return response(new HospitalisationResource($Hospitalisation) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Hospitalisation $Hospitalisation
     * @return \Illuminate\Http\Response
     */
    public function show(Hospitalisation $Hospitalisation)
    {
        return new HospitalisationResource($Hospitalisation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateHospitalisationRequest $request
     * @param \App\Models\Hospitalisation                     $Hospitalisation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHospitalisationRequest $request, Hospitalisation $Hospitalisation)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $Hospitalisation->update($data);

        return new HospitalisationResource($Hospitalisation);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Hospitalisation $Hospitalisation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hospitalisation $Hospitalisation)
    {
        $Hospitalisation->delete();

        return response("", 204);
    }
}
