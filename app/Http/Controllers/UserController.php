<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    //
    public function index(): Response
    {
        $users = DB::select('select * from users');

        // foreach( $users as $user) {
        //     echo $user->name;
        // }

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    // public function show(): Response
    // {
    //     $users = DB::select('select * from users');

    //     foreach( $users as $user) {
    //         echo $user->name;
    //     }

    //     return Inertia::render('Dashboard', [
    //         'users' => User::all(),
    //     ]);
    // }

    public function destroy(User $user): RedirectResponse
    {
        $user->delete();

        return redirect(route('users.index'));
    }
}
