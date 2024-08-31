<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Dossier;
use App\Models\Medecin as ModelsMedecin;


class Examen extends Model
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
    
    public function medecin()
    {
        return $this->belongsTo(ModelsMedecin::class);
    }

    public function patient()
    {
        return $this->belongsTo(Dossier::class);
    }
}