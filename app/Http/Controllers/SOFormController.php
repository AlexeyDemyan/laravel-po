<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class SOFormController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('SOForm/Index');
    }
}
