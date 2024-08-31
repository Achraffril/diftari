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

        Schema::create('dossiers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('patient_id');
            $table->foreign('patient_id')
            ->references('id')
            ->on('patients')
            ->onDelete('CASCADE')
            ->onUpdate('RESTRICT');            
            $table->boolean('acouchment_suivre')->default(false);
            $table->integer('echographie_anténatable')->nullable();
            $table->string('type_intervention_naissance')->nullable();
            $table->string('milieu_naissance')->nullable();
            $table->integer('examan_salle_naissance')->nullable();
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
        Schema::dropIfExists('dossiers');
    }
};
