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
        Schema::create('g_r_n_entries', function (Blueprint $table) {
            $table->integer('orderNumber')->autoIncrement();
            $table->string('company');
            $table->string('supplier')->nullable();
            $table->string('country')->nullable();
            $table->string('currency')->nullable();
            $table->float('exchangeRate', precision: 4)->nullable();
            $table->date('receivedDate')->nullable();
            $table->string('originCountry')->nullable();
            $table->string('supplierCode')->nullable();
            $table->string('supplierInvoice')->nullable();
            $table->string('packingDetails')->nullable();
            $table->text('orderLines')->nullable();
            $table->integer('totalItems')->nullable();
            $table->float('hashTotalQuantity', precision: 2)->nullable();
            $table->float('hashLineValue', precision: 4)->nullable();
            $table->string('receivingStoreCostCenter')->nullable();
            $table->string('remarks')->nullable();
            $table->string('goodsReceivedBy')->nullable();
            $table->float('freightCharges', precision: 4)->nullable();
            $table->string('freightSupplierCode')->nullable();
            $table->string('freightSupplierName')->nullable();
            $table->float('insuranceCharges', precision: 4)->nullable();
            $table->string('insuranceSupplierCode')->nullable();
            $table->string('insuranceSupplierName')->nullable();
            $table->float('handlingCharges', precision: 4)->nullable();
            $table->string('handlingSupplierCode')->nullable();
            $table->string('handlingSupplierName')->nullable();
            $table->float('cartageCharges', precision: 4)->nullable();
            $table->string('cartageSupplierCode')->nullable();
            $table->string('cartageSupplierName')->nullable();
            $table->float('otherCharges', precision: 4)->nullable();
            $table->string('otherSupplierCode')->nullable();
            $table->string('otherSupplierName')->nullable();
            $table->float('vatCharges', precision: 4)->nullable();
            $table->string('vatSupplierCode')->nullable();
            $table->string('vatSupplierName')->nullable();
            $table->float('depositCharges', precision: 4)->nullable();
            $table->string('depositSupplierCode')->nullable();
            $table->string('depositSupplierName')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('g_r_n_entries');
    }
};
