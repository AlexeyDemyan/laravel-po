<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SOEntry extends Model
{
    protected $fillable = [
        'company',
        'supplier',
        'supplierAddress',
        'telephone',
        'supplierCode',
        'supplierVATNumber',
        'date',
        'referenceNumber',
        'orderLines',
        'subTotalAmount',
        'vatAmount',
        'totalAmount',
        'dueDate',
        'paymentTerms',
        'budgetHeadRef',
        'orderFormRaisedBy',
        'authorisedBy',
        'userId'
    ];
}
