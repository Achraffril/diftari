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

        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->nullable();
            $table->string('nom_ar')->nullable();
            $table->string('prenom')->nullable();
            $table->string('prenom_ar')->nullable();
            $table->string('sexe')->nullable();
            $table->string('pay')->nullable();
            $table->string('nationalite')->nullable();
            $table->text('adresse')->nullable();
            $table->bigInteger('cin')->nullable();
            $table->string('ville')->nullable();
            $table->string('province')->nullable();
            $table->bigInteger('code_postal')->nullable();
            $table->bigInteger('tel')->nullable();
            $table->integer('tel_ext')->nullable();
            $table->string('email')->nullable();
            $table->string('photo')->nullable();
            $table->date('date_naissance');
            $table->dateTime('accepted_at');
            $table->foreignId('accepted_by')->on('admins')->onDelete('SET NULL')->onUpdate('RESTRICT');

            $table->string('account_status')->default('pending');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
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
        Schema::dropIfExists('patients');
    }
};
