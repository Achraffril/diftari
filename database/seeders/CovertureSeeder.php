<?php

namespace Database\Seeders;

use App\Models\Coverture;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CovertureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Coverture::factory()->count(50)->create();
    }
}
