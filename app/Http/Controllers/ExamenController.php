<?php

namespace App\Http\Controllers;

use App\Models\Examen;
use App\Http\Requests\StoreExamenRequest;
use App\Http\Requests\UpdateExamenRequest;
use App\Http\Resources\ExamenResource;
use Illuminate\Http\Request;

class ExamenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return ExamenResource::collection(Examen::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreExamenRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreExamenRequest $request)
    {
        $data = $request->validated();
        $examen = Examen::create($data);

        return response(new ExamenResource($examen) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Examen $examen
     * @return \Illuminate\Http\Response
     */
    public function show(Examen $examen)
    {
        return new ExamenResource($examen);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateExamenRequest $request
     * @param \App\Models\Examen                     $examen
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateExamenRequest $request, Examen $examen)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $examen->update($data);

        return new ExamenResource($examen);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Examen $examen
     * @return \Illuminate\Http\Response
     */
    public function destroy(Examen $examen)
    {
        $examen->delete();

        return response("", 204);
    }
}
