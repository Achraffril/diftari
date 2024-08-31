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

        Schema::create('consultations', function (Blueprint $table) {
            $table->id();
            $table->integer('age_en_mois')->nullable();
            $table->text('motif')->nullable();
            $table->float('T')->nullable();
            $table->float('poids')->nullable();
            $table->float('taille')->nullable();
            $table->float('imc')->nullable();
            $table->float('pc')->nullable();
            $table->unsignedBigInteger('dossier_id');
            $table->foreign('dossier_id')->references('id')->on('dossiers')->onDelete('CASCADE')->onUpdate('RESTRICT');
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
        Schema::dropIfExists('consultations');
    }
};
