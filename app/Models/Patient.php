<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use App\Models\Consultation;
use App\Models\Coverture;
use App\Models\Diversification;
use App\Models\Dossier;
use App\Models\Examen;
use App\Models\Probleme;
use App\Models\Vaccin;
use App\Models\Visite;


use Spatie\Permission\Traits\HasRoles;


class Patient extends Model
{
    use HasFactory, HasRoles;


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
        'photo',
        'accepted_at',
        'accepted',
        'date_naissance',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'date_naissance' => 'date',
    ];

    public function dossier()
    {
        return $this->hasOne(Dossier::class);
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

}
