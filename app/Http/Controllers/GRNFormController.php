<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class GRNFormController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('GRNForm/Index');
    }
}
