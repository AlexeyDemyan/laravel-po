<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\POEntry;
use Illuminate\Support\Facades\DB;

class POEntryController extends Controller
{
    public function index(): Response
    {

        $entries = DB::select('select * from p_o_entries');

        return Inertia::render('POList/Index', [
            'entries' => $entries,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        // Sort of default way to do create an entry

        // $poentry = new POEntry;
        // $poentry->date = $request->date;
        // $poentry->save();
        // return redirect(route('POForm.index'));

        // A better way to create an entry

        $poentry = POEntry::create([
            'company' => $request->company,
            'date' => $request->date,
            'supplier' => $request->supplier
        ]);

        echo($poentry);

        return redirect(route('POForm.index'));
    }
}