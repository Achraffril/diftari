<?php

namespace Database\Seeders;

use App\Models\Medecin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MedecinSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Medecin::factory()->count(50)->create();
    }
}
