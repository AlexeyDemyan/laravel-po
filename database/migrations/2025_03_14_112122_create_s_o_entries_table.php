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
        Schema::create('s_o_entries', function (Blueprint $table) {
            $table->integer('orderNumber')->autoIncrement();
            $table->string('company');
            $table->string('supplier')->nullable();
            $table->string('supplierAddress')->nullable();
            $table->string('telephone')->nullable();
            $table->string('supplierCode')->nullable();
            $table->string('supplierVATNumber')->nullable();
            $table->date('date')->nullable();
            $table->string('referenceNumber')->nullable();
            $table->text('orderLines')->nullable();
            $table->float('subTotalAmount', precision: 4)->nullable();
            $table->float('vatAmount', precision: 4)->nullable();
            $table->float('totalAmount', precision: 4)->nullable();
            $table->date('dueDate')->nullable();
            $table->string('paymentTerms')->nullable();
            $table->string('budgetHeadRef')->nullable();
            $table->string('orderFormRaisedBy')->nullable();
            $table->string('authorisedBy')->nullable();
            $table->integer('userId')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('s_o_entries');
    }
};
