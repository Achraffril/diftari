<?php

namespace App\Models;

use App\Models\Dossier as ModelsDossier;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Medecin as ModelsMedecin;



class Consultation extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function medecin()
    {
        return $this->belongsTo(ModelsMedecin::class);
    }

    public function dossier()
    {
        return $this->belongsTo(Dossier::class);
    }


}
