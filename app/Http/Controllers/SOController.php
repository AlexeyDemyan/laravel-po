<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\SOEntry;
use Illuminate\Support\Facades\DB;

class SOController extends Controller
{
    // public function index(): Response
    // {

    //     $entries = DB::select('select * from p_o_entries order by orderNumber desc');

    //     return Inertia::render('POList/Index', [
    //         'entries' => $entries,
    //     ]);
    // }

    public function store(Request $request): RedirectResponse
    {
        SOEntry::create([
            'company' => $request->company,
            'supplier' => $request->supplier,
            'supplierAddress' => $request->supplierAddress,
            'telephone' => $request->telephone,
            'supplierCode' => $request->supplierCode,
            'supplierVATNumber' => $request->supplierVATNumber,
            'date' => $request->date,
            'referenceNumber' => $request->referenceNumber,
            'orderLines' => $request->orderLines,
            'subTotalAmount' => $request->subTotalAmount,
            'vatAmount' => $request->vatAmount,
            'totalAmount' => $request->totalAmount,
            'dueDate' => $request->dueDate,
            'paymentTerms' => $request->paymentTerms,
            'budgetHeadRef' => $request->budgetHeadRef,
            'orderFormRaisedBy' => $request->orderFormRaisedBy,
            'authorisedBy' => $request->authorisedBy,
            'userId' => $request->userId
        ]);

        return redirect(route('SOForm.index'));
    }

    // public function update(Request $request, $orderNumber): RedirectResponse
    // {
    //     DB::table('p_o_entries')->where('orderNumber', $orderNumber)->update([
    //         'company' => $request->company,
    //         'date' => $request->date,
    //         'supplierAddress' => $request->supplierAddress,
    //         'supplierCode' => $request->supplierCode,
    //         'supplier' => $request->supplier,
    //         'deliveryDate' => $request->deliveryDate,
    //         'orderLines' => $request->orderLines,
    //         'paymentTerms' => $request->paymentTerms,
    //         'otherRemarks' => $request->otherRemarks,
    //         'discount' => $request->discount,
    //         'netTotalValue' => $request->netTotalValue,
    //         'priceIncludesVat' => $request->priceIncludesVat
    //     ]);

    //     return redirect(route('POEntry.index'));
    // }

    // public function destroy($number): RedirectResponse
    // {
    //     DB::table('p_o_entries')->where('orderNumber', $number)->delete();

    //     return redirect(route('POEntry.index'));
    // }
}
