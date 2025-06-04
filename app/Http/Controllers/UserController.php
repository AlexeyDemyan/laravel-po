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
    public function index(): Response
    {
        $users = DB::select('select * from users');

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    public function destroy(User $user): RedirectResponse
    {
        $restrictedNames = ['Admin', 'admin'];

        if (in_array($user->name, $restrictedNames)) {
            return redirect()->route('users.index')
                ->with('error', "You can't delete user: {$user->name}");
        }

        $user->delete();

        return redirect()->route('users.index')
            ->with('success', "User {$user->name} deleted.");
    }
}
