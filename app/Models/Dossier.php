<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



use App\Models\Medecin;
use App\Models\Patient;
use App\Models\Consultation;
use App\Models\Diversification;
use App\Models\Coverture;
use App\Models\Examen;
use App\Models\Hospitalisation;
use App\Models\Probleme;
use App\Models\Vaccin;
use App\Models\Visite;
use App\Models\Antecedent;
use App\Models\Allergie;
use App\Models\Affectation;
use App\Models\Vitamine;


class Dossier extends Model

{
    use HasFactory;
    protected $fillable = [
        'patient_id',
        'acouchment_suivre',
        'echographie_anténatable',
        'type_intervention_naissance',
        'milieu_naissance',
        'examan_salle_naissance',
    ];

    protected $casts = [
        'acouchment_suivre' => 'boolean',
    ];
    public function medecin()
    {
        return $this->belongsTo(Medecin::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function consultations()
    {
        return $this->hasMany(Consultation::class);
    }

    public function covertures()
    {
        return $this->hasMany(Coverture::class);
    }

    public function diversification()
    {
        return $this->hasOne(Diversification::class);
    }
    public function examens()
    {
        return $this->hasMany(Examen::class);
    }
    // public function problemes()
    // {
    //     return $this->hasMany(Problem::class);
    // }
    public function vaccins()
    {
        return $this->hasMany(Vaccin::class);
    }
    public function visites()
    {
        return $this->hasMany(Visite::class);
    }


    public function antecedents()
    {
        return $this->hasMany(Antecedent::class);
    }

    public function allergies()
    {
        return $this->hasMany(Allergie::class);
    }

    public function affectations()
    {
        return $this->hasMany(Affectation::class);
    }
    public function vitamines()
    {
        return $this->hasMany(Vitamine::class);
    }
}

