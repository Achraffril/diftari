<?php

namespace Database\Factories;

use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PatientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Patient::class;

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
            'cin' => $this->faker->unique()->randomNumber(8),
            'ville' => $this->faker->city,
            'province' => $this->faker->state,
            'code_postal' => $this->faker->randomNumber(5),
            'tel' => $this->faker->randomNumber(5),
            'tel_ext' => $this->faker->randomNumber(5),
            'email' => $this->faker->unique()->safeEmail,
            'photo' => $this->faker->imageUrl(),
            'date_naissance' => $this->faker->date(),
            'accepted_at' => now(),
            'accepted_by' => \App\Models\Admin::factory(),
            'account_status' => 'pending',
            'email_verified_at' => now(),
            'password' => bcrypt('password'), // or Hash::make('password')
            'remember_token' => Str::random(10),
        ];
    }
}
