<?php

namespace Database\Seeders;

use App\Models\Dossier as ModelsDossier;
use App\Models\dossier\Dossier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;



class DossierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ModelsDossier::factory()->count(50)->create();
    }
}
