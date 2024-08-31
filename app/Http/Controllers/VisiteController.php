<?php

namespace App\Http\Controllers;

use App\Models\Visite;
use App\Http\Requests\StoreVisiteRequest;
use App\Http\Requests\UpdateVisiteRequest;
use App\Http\Resources\VisiteResource;
use Illuminate\Http\Request;

class VisiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return VisiteResource::collection(Visite::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreVisiteRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVisiteRequest $request)
    {
        $data = $request->validated();
        $Visite = Visite::create($data);

        return response(new VisiteResource($Visite) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Visite $Visite
     * @return \Illuminate\Http\Response
     */
    public function show(Visite $Visite)
    {
        return new VisiteResource($Visite);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\StoreVisiteRequest $request
     * @param \App\Models\Visite                     $Visite
     * @return \Illuminate\Http\Response
     */
    public function update(StoreVisiteRequest $request, Visite $Visite)
    {
        $data = $request->validated();
        $Visite->update($data);

        return new VisiteResource($Visite);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Visite $Visite
     * @return \Illuminate\Http\Response
     */
    public function destroy(Visite $Visite)
    {
        $Visite->delete();

        return response("", 204);
    }
}
