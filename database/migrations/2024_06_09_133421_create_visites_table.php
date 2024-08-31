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

        Schema::create('visites', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('dossier_id');
            $table->foreign('dossier_id')->references('id')->on('dossier')->onDelete('CASCADE')->onUpdate('RESTRICT');
            $table->unsignedBigInteger('medecin_id')->nullable();
            $table->foreign('medecin_id')->references('id')->on('medecins')->onDelete('SET NUll')->onUpdate('RESTRICT');
            $table->string('period')->nullable();
            $table->integer('age')->nullable();
            $table->float('poids')->nullable();
            $table->float('taille')->nullable();
            $table->float('imc')->nullable();
            $table->float('ta')->nullable();
            $table->float('temperature')->nullable();
            $table->string('e_orl_voix_chuchotee')->nullable();
            $table->boolean('paleur')->default(false);
            $table->boolean('ictere')->default(false);
            $table->boolean('dyspnee')->default(false);
            $table->boolean('cyanose')->default(false);
            $table->string('e_orl_tympans')->nullable();
            $table->boolean('ec_pouls')->default(false);
            $table->boolean('ec_soufle')->default(false);
            $table->string('e_la_gorge')->nullable();
            $table->string('e_dermatologique')->nullable();
            $table->boolean('ebd_caries')->default(false);
            $table->boolean('ebd_anomalie_dento_maxillofacialles')->default(false);
            $table->string('ebd_cuir_chevelu')->nullable();
            $table->string('ebd_phaneres')->nullable();
            $table->string('autre')->nullable();
            $table->integer('e_oph_acuite_od')->nullable();
            $table->integer('e_oph_acuite_og')->nullable();
            $table->boolean('e_oph_strabisme')->default(false);
            $table->boolean('e_oph_nystagmus')->default(false);
            $table->boolean('e_oph_poursuite')->default(false);
            $table->boolean('e_oph_reflexe')->default(false);
            $table->string('e_urogenital')->nullable();
            $table->string('e_neurologique')->nullable();
            $table->string('e_locomoteur')->nullable();
            $table->boolean('vaccination_a_jour')->default(false);
            $table->text('observation')->nullable();
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
        Schema::dropIfExists('visites');
    }
};
