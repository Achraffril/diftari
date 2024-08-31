<?php

namespace App\Http\Controllers;

use App\Models\Probleme;
use App\Http\Requests\StoreProblemeRequest;
use App\Http\Requests\UpdateProblemeRequest;
use App\Http\Resources\ProblemeResource;
use Illuminate\Http\Request;

class ProblemeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return ProblemeResource::collection(Probleme::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreProblemeRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProblemeRequest $request)
    {
        $data = $request->validated();
        $probleme = Probleme::create($data);

        return response(new ProblemeResource($probleme) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Probleme $probleme
     * @return \Illuminate\Http\Response
     */
    public function show(Probleme $probleme)
    {
        return new ProblemeResource($probleme);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateProblemeRequest $request
     * @param \App\Models\Probleme                     $probleme
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProblemeRequest $request, Probleme $probleme)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $probleme->update($data);

        return new ProblemeResource($probleme);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Probleme $probleme
     * @return \Illuminate\Http\Response
     */
    public function destroy(Probleme $probleme)
    {
        $probleme->delete();

        return response("", 204);
    }
}
