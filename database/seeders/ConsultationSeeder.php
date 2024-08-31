<?php

namespace Database\Seeders;

use App\Models\Consultation as ModelsConsultation;

use Illuminate\Database\Seeder;

class ConsultationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ModelsConsultation::factory()->count(10)->create();
    }
}
