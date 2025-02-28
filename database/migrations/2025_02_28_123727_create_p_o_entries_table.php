<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('p_o_entries', function (Blueprint $table) {
            $table->integer('orderNumber')->autoIncrement();
            $table->string('company');
            $table->date('date')->nullable();
            $table->string('supplier')->nullable();
            $table->string('supplierAddress')->nullable();
            $table->string('supplierCode')->nullable();
            $table->string('deliveryDate')->nullable();
            $table->text('orderLines')->nullable();
            $table->string('paymentTerms')->nullable();
            $table->string('otherRemarks')->nullable();
            $table->float('discount', precision: 2)->nullable();
            $table->float('netTotalValue', precision: 4)->nullable();
            $table->string('priceIncludesVat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('p_o_entries');
    }
};
