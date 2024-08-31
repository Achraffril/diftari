<?php

namespace Database\Factories;

use App\Models\Medecin;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class MedecinFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Medecin::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nom' => $this->faker->lastName,
            'nom_ar' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'prenom_ar' => $this->faker->firstName,
            'sexe' => $this->faker->randomElement(['male', 'female']),
            'pay' => $this->faker->country,
            'nationalite' => $this->faker->country,
            'adresse' => $this->faker->address,
            'cin' => $this->faker->unique()->numerify('########'),
            'ville' => $this->faker->city,
            'province' => $this->faker->state,
            'code_postal' => $this->faker->randomNumber(5),
            'tel' => $this->faker->randomNumber(5),
            'tel_ext' => $this->faker->randomNumber(5),
            'email' => $this->faker->unique()->safeEmail,
            'inpe' => $this->faker->numerify('##########'),
            'photo' => $this->faker->imageUrl(),
            'specialite' => $this->faker->randomNumber(),
            'ville_travaile' => $this->faker->city,
            'etablissment' => $this->faker->company,
            'licence' => $this->faker->word,
            'accepted_at' => now(),
            'accepted_by' => \App\Models\Admin::factory(),
            'account_status' => $this->faker->randomElement(['pending', 'active']),
            'email_verified_at' => now(),
            'password' => bcrypt('password'), // or Hash::make('password')
            'remember_token' => Str::random(10),
        ];
    }
}
