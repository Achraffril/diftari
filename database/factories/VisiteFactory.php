<?php

namespace Database\Factories;

use App\Models\Visite;
use App\Models\Dossier;
use App\Models\Medecin;
use Illuminate\Database\Eloquent\Factories\Factory;

class VisiteFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Visite::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'dossier_id' => Dossier::factory()->create()->id,
            'medecin_id' => Medecin::factory()->create()->id,
            'period' => $this->faker->randomElement(['Morning', 'Afternoon', 'Evening']),
            'age' => $this->faker->numberBetween(0, 100),
            'poids' => $this->faker->randomFloat(2, 1, 100),
            'taille' => $this->faker->randomFloat(2, 30, 200),
            'imc' => $this->faker->randomFloat(2, 10, 50),
            'ta' => $this->faker->randomFloat(2, 80, 200),
            'temperature' => $this->faker->randomFloat(2, 35, 40),
            'e_orl_voix_chuchotee' => $this->faker->randomElement(['Normal', 'Abnormal']),
            'paleur' => $this->faker->boolean,
            'ictere' => $this->faker->boolean,
            'dyspnee' => $this->faker->boolean,
            'cyanose' => $this->faker->boolean,
            'e_orl_tympans' => $this->faker->randomElement(['Normal', 'Abnormal']),
            'ec_pouls' => $this->faker->boolean,
            'ec_soufle' => $this->faker->boolean,
            'e_la_gorge' => $this->faker->sentence,
            'e_dermatologique' => $this->faker->sentence,
            'ebd_caries' => $this->faker->boolean,
            'ebd_anomalie_dento_maxillofacialles' => $this->faker->boolean,
            'ebd_cuir_chevelu' => $this->faker->sentence,
            'ebd_phaneres' => $this->faker->sentence,
            'autre' => $this->faker->sentence,
            'e_oph_acuite_od' => $this->faker->numberBetween(0, 10),
            'e_oph_acuite_og' => $this->faker->numberBetween(0, 10),
            'e_oph_strabisme' => $this->faker->boolean,
            'e_oph_nystagmus' => $this->faker->boolean,
            'e_oph_poursuite' => $this->faker->boolean,
            'e_oph_reflexe' => $this->faker->boolean,
            'e_urogenital' => $this->faker->sentence,
            'e_neurologique' => $this->faker->sentence,
            'e_locomoteur' => $this->faker->sentence,
            'vaccination_a_jour' => $this->faker->boolean,
            'observation' => $this->faker->text,
        ];
    }
}
