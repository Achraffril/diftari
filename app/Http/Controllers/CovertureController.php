<?php

namespace App\Http\Controllers;

use App\Models\Coverture;
use App\Http\Requests\StoreCovertureRequest;
use App\Http\Requests\UpdateCovertureRequest;
use App\Http\Resources\CovertureResource;
use Illuminate\Http\Request;

class CovertureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return CovertureResource::collection(Coverture::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreCovertureRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCovertureRequest $request)
    {
        $data = $request->validated();
        $coverture = Coverture::create($data);

        return response(new CovertureResource($coverture) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Coverture $coverture
     * @return \Illuminate\Http\Response
     */
    public function show(Coverture $coverture)
    {
        return new CovertureResource($coverture);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateCovertureRequest $request
     * @param \App\Models\Coverture                     $coverture
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCovertureRequest $request, Coverture $coverture)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        $coverture->update($data);

        return new CovertureResource($coverture);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Coverture $coverture
     * @return \Illuminate\Http\Response
     */
    public function destroy(Coverture $coverture)
    {
        $coverture->delete();

        return response("", 204);
    }
}
