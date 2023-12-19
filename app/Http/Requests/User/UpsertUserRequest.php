<?php

declare(strict_types=1);

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpsertUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_name' => ['required', 'string', 'between:1,256'],
            'email' => ['required', 'email:filter,dns', 'unique:App\Models\User,email'],
            'nick_name' => 'nullable|string|between:1,256',
            'accounts' => 'nullable|array',
        ];
    }

    public function attributes(): array
    {
        return [
            'user_name' => 'user name',
            'nick_name' => 'nick name',
            'email' => 'email',
            'accounts' => 'account',
        ];
    }
}
