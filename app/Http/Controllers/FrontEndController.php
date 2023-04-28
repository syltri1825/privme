<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\LoginFrontRequest;

class FrontEndController extends Controller
{

    protected function giveUserConnect(Request $request)
    {
        $user = Auth::guard('front')->user();
        return $user;
    }

    protected function register(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required|max:50',
            'email' => 'required|email|unique:users,email',
            'password' => 'required| min:6 | max:8',
        ]);

        Visitor::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);

        return response()->json([
            'message' => "Successfull"
        ]);

    }

    protected function authentication(LoginFrontRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();

        $user = Auth::guard('front')->user();
        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'msg' => '',
            'client' => $user,
            'key' => $token        
        ]);
    }

    protected function logOutUser(Request $request)
    {
        // Auth::guard('front')->currentAcessToken()->delete();
        Auth::guard('front')->logout();
        $user = $request->user;
        $user->currentAcessToken()->delete();
        return response()->json(['msg'=>'',204]);

        // Auth::guard('front')->logout();
        // $user = $request->user();

        // $user->currentAcessToken()->delete();
    }
}
