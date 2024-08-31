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

        Schema::create('diversifications', function (Blueprint $table) {
            $table->id();
            $table->boolean('is')->default(false);
            $table->string('consistance')->nullable();
            $table->integer('nbr_repas_par_j')->nullable();
            $table->integer('nbr_gouters_par_j')->nullable();
            $table->boolean('ration')->default(false);
            $table->boolean('plat_familial')->default(false);
            $table->boolean('alimentation_active')->default(false);
            $table->boolean('grignotage')->default(false);
            $table->boolean('petit_dejeuner')->default(false);
            $table->unsignedBigInteger('examen_id');
            $table->foreign('examen_id')->references('id')->on('examens')->onDelete('CASCADE')->onUpdate('RESTRICT');  
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
        Schema::dropIfExists('diversifications');
    }
};
