<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\GRNEntry;
use Illuminate\Support\Facades\DB;

class POEntryController extends Controller
{
    // public function index(): Response
    // {

    //     $entries = DB::select('select * from p_o_entries');

    //     return Inertia::render('GRNList/Index', [
    //         'entries' => $entries,
    //     ]);
    // }

    public function store(Request $request): RedirectResponse
    {
        GRNEntry::create([
            'company' => $request->company,
            'supplier' => $request->supplier,
            'country' => $request->country,
            'currency' => $request->currency,
            'exchangeRate' => $request->exchangeRate,
            'poreference' => $request->poreference,
            'receivedDate' => $request->receivedDate,
            'originCountry' => $request->originCountry,
            'supplierCode' => $request->supplierCode,
            'supplierInvoice' => $request->supplierInvoice,
            'packingDetails' => $request->packingDetails,
            'orderLines' => $request->orderLines,
            'totalItems' => $request->totalItems,
            'hashTotalQuantity' => $request->hashTotalQuantity,
            'hashLineValue' => $request->hashLineValue,
            'receivingStoreCostCenter' => $request->receivingStoreCostCenter,
            'remarks' => $request->remarks,
            'goodsReceivedBy' => $request->goodsReceivedBy,
            'freightCharges' => $request->freightCharges,
            'freightSupplierCode' => $request->freightSupplierCode,
            'freightSupplierName' => $request->freightSupplierName,
            'insuranceCharges' => $request->insuranceCharges,
            'insuranceSupplierCode' => $request->insuranceSupplierCode,
            'insuranceSupplierName' => $request->insuranceSupplierName,
            'handlingCharges' => $request->handlingCharges,
            'handlingSupplierCode' => $request->handlingSupplierCode,
            'handlingSupplierName' => $request->handlingSupplierName,
            'cartageCharges' => $request->cartageCharges,
            'cartageSupplierCode' => $request->cartageSupplierCode,
            'cartageSupplierName' => $request->cartageSupplierName,
            'otherCharges' => $request->otherCharges,
            'otherSupplierCode' => $request->otherSupplierCode,
            'otherSupplierName' => $request->otherSupplierName,
            'vatCharges' => $request->vatCharges,
            'vatSupplierCode' => $request->vatSupplierCode,
            'vatSupplierName' => $request->vatSupplierName,
            'depositCharges' => $request->depositCharges,
            'depositSupplierCode' => $request->depositSupplierCode,
            'depositSupplierName' => $request->depositSupplierName
        ]);

        return redirect(route('GRNForm.index'));
    }
}
