<?php

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
            'user_name'=>['required','string','between:1,256'],
            'nick_name'=>'nullable|string|betweem:1,256',
            'accounts'=>'nullable|array',
        ];
    }

    public function attributes():array
    {
        return [
            'user_name'=>"ユーザー名",
            'nick_name'=>"ニックネーム",
            'accounts'=>"アカウント"
        ];
    }
}
