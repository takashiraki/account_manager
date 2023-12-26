<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AuthRequest;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(AuthRequest $http_request)
    {
        $credentials = $http_request->only(['email', 'password']);
        
        if (Auth::guard()->attempt($credentials)) {
            $http_request->session()->regenerate();

            return new JsonResponse(
                [
                    'status' => 200,
                    'message' => 'complete.',
                ]
            );
        }
        throw new AuthenticationException();
    }
}
