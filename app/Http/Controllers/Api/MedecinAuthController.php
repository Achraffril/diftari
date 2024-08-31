<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Medecin;
use Illuminate\Http\Request;

class MedecinAuthController extends Controller
{
   public function signup(Request $request){
            // Validate incoming request data
            $medecin  = $request->all();

            Medecin::create($medecin);
    
            // Optionally, you can return a response indicating success or redirect the user
            return response()->json(['message' => 'Medecin created successfully'], 201);
   }
}
