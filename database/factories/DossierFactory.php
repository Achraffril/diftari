<?php

namespace Database\Factories;

use App\Models\Dossier;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dossier>
 */
class DossierFactory extends Factory
{
    protected $model = Dossier::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'patient_id' => \App\Models\Patient::factory(), // Ensure you have a Patient factory
            'acouchment_suivre' => $this->faker->boolean,
            'echographie_anténatable' => $this->faker->numberBetween(1, 10),
            'type_intervention_naissance' => $this->faker->word,
            'milieu_naissance' => $this->faker->word,
            'examan_salle_naissance' => $this->faker->numberBetween(1, 10),
        ];
    }
}
