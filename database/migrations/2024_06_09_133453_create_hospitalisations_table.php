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

        Schema::create('hospitalisations', function (Blueprint $table) {
            $table->id();
            $table->date('entre')->nullable();
            $table->date('sortie')->nullable();
            $table->integer('age')->nullable();
            $table->text('motif')->nullable();
            $table->text('diagnostic')->nullable();
            $table->text('traitement')->nullable();
            $table->unsignedBigInteger('dossier_id');
            $table->foreign('dossier_id')->references('id')->on('dossier')->onDelete('CASCADE')->onUpdate('RESTRICT');
            $table->unsignedBigInteger('medecin_id')->nullable();
            $table->foreign('medecin_id')->references('id')->on('medecins')->onDelete('SET NUll')->onUpdate('RESTRICT');
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
        Schema::dropIfExists('hospitalisations');
    }
};
