<?php

namespace App\Http\Controllers;

use App\Models\Vaccin;
use App\Http\Requests\StoreVaccinRequest;
use App\Http\Requests\UpdateVaccinRequest;
use App\Http\Resources\VaccinResource;
use Illuminate\Http\Request;

class VaccinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return VaccinResource::collection(Vaccin::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreVaccinRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVaccinRequest $request)
    {
        $data = $request->validated();
        $vaccin = Vaccin::create($data);
        return response(new VaccinResource($vaccin) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Vaccin $vaccin
     * @return \Illuminate\Http\Response
     */
    public function show(Vaccin $vaccin)
    {
        return new VaccinResource($vaccin);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateVaccinRequest $request
     * @param \App\Models\Vaccin                     $vaccin
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVaccinRequest $request, Vaccin $vaccin)
    {
        $data = $request->validated();
        $vaccin->update($data);

        return new VaccinResource($vaccin);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Vaccin $vaccin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vaccin $vaccin)
    {
        $vaccin->delete();

        return response("", 204);
    }
}