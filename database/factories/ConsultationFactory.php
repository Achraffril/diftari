<?php

namespace Database\Factories;

use App\Models\Consultation;
use App\Models\Dossier;
use App\Models\Medecin;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConsultationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Consultation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'age_en_mois' => $this->faker->numberBetween(1, 100),
            'motif' => $this->faker->sentence,
            'T' => $this->faker->randomFloat(2, 35, 40),
            'poids' => $this->faker->randomFloat(2, 10, 100),
            'taille' => $this->faker->randomFloat(2, 50, 200),
            'imc' => $this->faker->randomFloat(2, 15, 40),
            'pc' => $this->faker->randomFloat(2, 30, 60),
            'dossier_id' => Dossier::inRandomOrder()->first()->id,
            'medecin_id' => Medecin::inRandomOrder()->first()->id,
        ];
    }
}
