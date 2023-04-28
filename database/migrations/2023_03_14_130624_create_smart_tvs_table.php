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
        Schema::create('smart_tvs', function (Blueprint $table) {
            $table->id();
            $table->string('title','50');
            $table->string('category','50');
            $table->float('price');
            $table->longText('description');
            $table->binary('article');
            $table->string('date_publication');
            $table->unsignedBigInteger('user_id')->constrained()->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('smart_tvs');
    }
};
