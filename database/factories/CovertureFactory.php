<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;

class CouvertureFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'titre' => $this->faker->sentence,
            'dossier_id' => function () {
                return \App\Models\Dossier::factory()->create()->id;
            },
            'medecin_id' => function () {
                return \App\Models\Medecin::factory()->create()->id;
            },
        ];
    }
}
