<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class Admin extends Model
{

    use HasApiTokens, HasFactory, Notifiable, HasRoles;
    protected $guard = 'admin'; // Specify the guard for admins
    protected $table = 'medecins';
    protected $fillable = [
        'nom',
        'prenom',
        'cin',
        'ville',
        'province',
        'email',
        'photo',
        'ville_travaile',
        'etablissment',
        'password',
    ];


       /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */


    protected $hidden = [
        'password',
        'remember_token',
    ];


       /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    

}
