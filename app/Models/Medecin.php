<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
class Medecin extends Model
{

    use HasApiTokens, HasFactory, Notifiable, HasRoles;


    protected $fillable = [
        'nom',
        'nom_ar',
        'prenom',
        'prenom_ar',
        'sexe',
        'pay',
        'nationalite',
        'adresse',
        'cin',
        'ville',
        'province',
        'code_postal',
        'tel',
        'tel_ext',
        'email',
        'inpe',
        'photo',
        'specialite',
        'ville_travaile',
        'etablissment',
        'licence',
        'password',
    ];
    public $timestamps = true;

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function getFillable()
    {
        return $this->fillable;
    }



    public function dossiers(){}
    
    
    public function dossier()
    {
        return $this->hasMany(Dossier::class);
    }

    public function consultations()
    {
        return $this->hasMany(Consultation::class);
    }

    public function covertures()
    {
        return $this->hasMany(Coverture::class);
    }

    public function diversifications()
    {
        return $this->hasMany(Diversification::class);
    }
    public function examens()
    {
        return $this->hasMany(Examen::class);
    }
    public function problemes()
    {
        return $this->hasMany(Probleme::class);
    }
    public function vaccins()
    {
        return $this->hasMany(Vaccin::class);
    }
    public function visites()
    {
        return $this->hasMany(Visite::class);
    }


    // public function roles()
    // {
    //     return $this->belongsToMany(Role::class);
    // }

    // public function hasRole($role): bool
    // {
    //     return $this->roles->contains('name', $role);
    // }

    // public function hasAnyRole($roles): bool
    // {
    //     return $this->roles()->whereIn('name', $roles)->exists();
    // }

    // public function hasPermissionTo($permission): bool
    // {
    //     // Check permissions assigned directly to the user
    //     if ($this->hasDirectPermission($permission)) {
    //         return true;
    //     }

    //     // Check permissions through assigned roles
    //     return $this->roles->filter(function (Role $role) use ($permission) {
    //         return $role->hasPermissionTo($permission);
    //     })->isNotEmpty();
    // }

    // private function hasDirectPermission($permission): bool
    // {
    //     if (method_exists($this, 'hasPermission')) { // For compatibility with Laravel versions without built-in hasPermission
    //         return $this->hasPermission($permission);
    //     }

    //     return $this->permissions->contains('name', $permission);
    // }


}
