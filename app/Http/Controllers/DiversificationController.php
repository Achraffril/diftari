<?php

namespace App\Http\Controllers;

use App\Models\Diversification;
use App\Http\Requests\StoreDiversificationRequest;
use App\Http\Requests\UpdateDiversificationRequest;
use App\Http\Resources\DiversificationResource;
use Illuminate\Http\Request;

class DiversificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return DiversificationResource::collection(Diversification::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreDiversificationRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDiversificationRequest $request)
    {
        $data = $request->validated();
        $Diversification = Diversification::create($data);

        return response(new DiversificationResource($Diversification) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Diversification $Diversification
     * @return \Illuminate\Http\Response
     */
    public function show(Diversification $Diversification)
    {
        return new DiversificationResource($Diversification);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateDiversificationRequest $request
     * @param \App\Models\Diversification                     $Diversification
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDiversificationRequest $request, Diversification $Diversification)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $Diversification->update($data);

        return new DiversificationResource($Diversification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Diversification $Diversification
     * @return \Illuminate\Http\Response
     */
    public function destroy(Diversification $Diversification)
    {
        $Diversification->delete();

        return response("", 204);
    }
}
