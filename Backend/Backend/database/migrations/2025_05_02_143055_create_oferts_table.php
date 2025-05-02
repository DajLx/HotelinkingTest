<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('oferts', function (Blueprint $table) {
            $table->id();
            $table->text('imgSrc');
            $table->string('producto');
            $table->string("descripcion");
            $table->string("precio_oferta");
            $table->string("precio_orignal");
            $table->string("descuento");
            $table->string("disponble_hasta");
            $table->boolean("");
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oferts');
    }
};
