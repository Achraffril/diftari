<?php

namespace Database\Seeders;

use App\Models\dossier\Visite;
use App\Models\Visite as ModelsVisite;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VisiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ModelsVisite::factory()->count(50)->create();
    }
}
