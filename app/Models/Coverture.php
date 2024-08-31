<?php

namespace App\Models;

use App\Models\Dossier;
use App\Models\Medecin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Coverture extends Model
{
    use HasFactory;
    public function medecin()
    {
        return $this->belongsTo(Medecin::class);
    }

    public function patient()
    {
        return $this->belongsTo(Dossier::class);
    }

}
