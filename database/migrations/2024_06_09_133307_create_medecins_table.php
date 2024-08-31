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

        Schema::create('medecins', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->nullable();
            $table->string('nom_ar')->nullable();
            $table->string('prenom')->nullable();
            $table->string('prenom_ar')->nullable();
            $table->string('sexe')->nullable();
            $table->string('pay')->nullable();
            $table->string('nationalite')->nullable();
            $table->text('adresse')->nullable();
            $table->string('cin')->nullable();
            $table->string('ville')->nullable();
            $table->string('province')->nullable();
            $table->bigInteger('code_postal')->nullable();
            $table->bigInteger('tel')->nullable();
            $table->integer('tel_ext')->nullable();
            $table->string('email')->nullable();
            $table->string('inpe')->nullable();
            $table->string('photo')->nullable();
            $table->string('specialite')->nullable();
            $table->string('ville_travaile')->nullable();
            $table->string('etablissment')->nullable();
            $table->string('licence')->nullable();
            $table->dateTime('accepted_at')->nullable();

            $table->foreignId('accepted_by')->on('admins')->onDelete('SET NULL')->onUpdate('RESTRICT')->nullable();

            $table->string('account_status')->default('pending');

            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->default('cn123456');
            $table->rememberToken();
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
        Schema::dropIfExists('medecins');
    }
};
