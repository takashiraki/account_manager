<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpsertUserRequest;
use App\Models\User;
use Exception;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use illuminate\Support\Str;

use function Laravel\Prompts\password;

class CreateUserController extends Controller
{
    public function handle(UpsertUserRequest $http_request)
    {
        DB::beginTransaction();

        $raw_password = Str::random(12);
        $password_hasher = new BcryptHasher();
        
        try {
            $user = User::create(
                [
                    'user_id'=>(string)Str::uuid(),
                    'user_name'=>$http_request->user_name,
                    'email'=>$http_request->email,
                    'user_status'=>'active',
                    'password'=>$password_hasher->make($raw_password)
                ]
                );
                DB::commit();
        } catch (Exception $exception) {
            DB::rollBack();
            Log::error(report($exception));

            throw new Exception($exception->getMessage());
        }

        return new JsonResponse(
            [
                'status'=>200,
                'message'=>"success",
                'raw_password'=>$raw_password
            ]
            );
    }
}
