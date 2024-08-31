<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use App\Models\Admin;
use App\Models\Medecin;
use App\Models\Patient;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }
        


        /** @var \App\Models\User $user */
        $user = Auth::user();
        if ($user->account_status !== 'active') {
            return response([
                'message' => 'Your account is inactive. Please contact support.'
            ], 403); 
        }
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
        // return response()->json($request);
    }

    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
    
    public function login_medecin(LoginRequest $request){
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        if ($user->account_status !== 'active') {
            return response([
                'message' => 'Your account is inactive. Please contact support.'
            ], 403); 
        }
    
        $token = $user->createToken('main')->plainTextToken;
        return response()->json(compact('user', 'token'));
        return response()->json($request);
       
    
    }
    public function login_admin(LoginRequest $request){
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        if ($user->account_status !== 'active') {
            return response([
                'message' => 'Your account is inactive. Please contact support.'
            ], 403); 
        }
        $token = $user->createToken('main')->plainTextToken;
        return response()->json(compact('user', 'token'));
       
    
    }
    public function login_patient(LoginRequest $request){
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        if ($user->account_status !== 'active') {
            return response([
                'message' => 'Your account is inactive. Please contact support.'
            ], 403); 
        }
        $token = $user->createToken('main')->plainTextToken;
        return response()->json(compact('user', 'token'));
       
    
    }



    public function signup_patient(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\Patient $Patient */
        $patient = Patient::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $patient->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function signup_medecin(Request $request)
    {
        $data = $request->all();
        /** @var \App\Models\Medecin $medecin */
        $data['password'] = bcrypt($request['password']);
        $medecin = Medecin::create($data);

        $token = $medecin->createToken('main')->plainTextToken;
        return response(compact('medecin', 'token'));
    }
}
