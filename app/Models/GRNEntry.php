<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GRNEntry extends Model
{
    protected $fillable = [
        'company',
        'supplier',
        'country',
        'currency',
        'exchangeRate',
        'poreference',
        'receivedDate',
        'originCountry',
        'supplierCode',
        'supplierInvoice',
        'packingDetails',
        'orderLines: orderLines',
        'totalItems',
        'hashTotalQuantity',
        'hashLineValue',
        'receivingStoreCostCenter',
        'remarks',
        'goodsReceivedBy',
        'freightCharges',
        'freightSupplierCode',
        'freightSupplierName',
        'insuranceCharges',
        'insuranceSupplierCode',
        'insuranceSupplierName',
        'handlingCharges',
        'handlingSupplierCode',
        'handlingSupplierName',
        'cartageCharges',
        'cartageSupplierCode',
        'cartageSupplierName',
        'otherCharges',
        'otherSupplierCode',
        'otherSupplierName',
        'vatCharges',
        'vatSupplierCode',
        'vatSupplierName',
        'depositCharges',
        'depositSupplierCode',
        'depositSupplierName'
    ];
}
