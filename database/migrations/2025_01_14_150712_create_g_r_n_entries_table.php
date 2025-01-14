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
            $table->float('exchangeRate', precision: 2)->nullable();
            $table->float('poreference',  precision: 2)->nullable();
            $table->date('receivedDate')->nullable();
            $table->string('originCountry')->nullable();
            $table->string('supplierCode')->nullable();
            $table->string('supplierInvoice')->nullable();
            $table->string('packingDetails')->nullable();
            $table->text('orderLines')->nullable();
            $table->string('totalItems')->nullable();
            $table->string('hashTotalQuantity')->nullable();
            $table->string('hashLineValue')->nullable();
            $table->string('receivingStoreCostCenter')->nullable();
            $table->string('remarks')->nullable();
            $table->string('goodsReceivedBy')->nullable();
            $table->string('freightCharges')->nullable();
            $table->string('freightSupplierCode')->nullable();
            $table->string('freightSupplierName')->nullable();
            $table->string('insuranceCharges')->nullable();
            $table->string('insuranceSupplierCode')->nullable();
            $table->string('insuranceSupplierName')->nullable();
            $table->string('handlingCharges')->nullable();
            $table->string('handlingSupplierCode')->nullable();
            $table->string('handlingSupplierName')->nullable();
            $table->string('cartageCharges')->nullable();
            $table->string('cartageSupplierCode')->nullable();
            $table->string('cartageSupplierName')->nullable();
            $table->string('otherCharges')->nullable();
            $table->string('otherSupplierCode')->nullable();
            $table->string('otherSupplierName')->nullable();
            $table->string('vatCharges')->nullable();
            $table->string('vatSupplierCode')->nullable();
            $table->string('vatSupplierName')->nullable();
            $table->string('depositCharges')->nullable();
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
