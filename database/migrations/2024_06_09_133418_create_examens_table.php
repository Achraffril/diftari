<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('examens', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('dossier_id');
            $table->foreign('dossier_id')->references('id')->on('dossier')->onDelete('CASCADE')->onUpdate('RESTRICT');
            $table->integer('mois')->nullable();            
            $table->integer('age')->nullable();
            $table->float('poide')->nullable();
            $table->float('taille')->nullable();
            $table->float('imc')->nullable();
            $table->float('peremitre_cranien')->nullable();
            $table->unsignedBigInteger('temperature')->nullable();
            $table->boolean('ecm_paleur')->default(false);
            $table->boolean('ecm_ictere')->default(false);
            $table->boolean('ecm_angiome')->default(false);
            $table->string('et_anomalie_perimetre_cranien');
            $table->string('et_anomalie__fontanelle');
            $table->boolean('et_anencephalie')->default(false);
            $table->boolean('ea_infection_ombilic')->default(false);
            $table->boolean('ea_hepatomegalie')->default(false);
            $table->boolean('ea_splenomegalie')->default(false);
            $table->boolean('ea_hernie_ombilicale')->default(false);
            $table->boolean('ec_pouls')->default(false);
            $table->boolean('ec_soufle_cardiaque')->default(false);
            $table->boolean('er_dyspnee')->default(false);
            $table->boolean('er_cyanose')->default(false);
            $table->boolean('en_lethargie')->default(false);
            $table->boolean('en_hypotonie')->default(false);
            $table->boolean('en_reflexes')->default(false);
            $table->boolean('eoa_luxation')->default(false);
            $table->boolean('eoa_pieds_bots')->default(false);
            $table->boolean('anomalies_organes_externe')->default(false);
            $table->boolean('signes_evocateur')->default(false);
            $table->boolean('oph_globe')->default(false);
            $table->boolean('oph_opacite')->default(false);
            $table->boolean('oph_lueur')->default(false);
            $table->boolean('oph_poursuite')->default(false);
            $table->boolean('oph_strabisme')->default(false);
            $table->boolean('oph_nystagmus')->default(false);
            $table->boolean('oph_reflexes')->default(false);
            $table->boolean('autre_malformation_congenitales')->default(false);
            $table->boolean('probleme_surdite')->default(false);
            $table->boolean('depistage_hypothyroidie')->default(false);
            $table->boolean('vaccination_a_jour')->default(false);
            $table->string('supplementation_a_jour')->nullable();
            $table->string('mode_alimentation')->nullable();

            $table->unsignedBigInteger('diversification_id')->nullable();
            $table->foreign('diversification_id')->references('id')->on('diversifications')->onDelete('SET NULL')->onUpdate('RESTRICT');
            
            $table->string('problemes_stimulation')->nullable();
            $table->text('observation')->nullable();
            $table->unsignedBigInteger('medecin_id')->nullable();
            $table->foreign('medecin_id')->references('id')->on('medecins')->onDelete('SET NULL')->onUpdate('RESTRICT');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('examens');
    }
};
