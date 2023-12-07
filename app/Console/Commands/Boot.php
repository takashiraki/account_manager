<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Models\User;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class Boot extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:boot';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Boot application command';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $password_hasher = new BcryptHasher();

        DB::beginTransaction();
        try {
            $user = User::create(
                [
                    'user_id' => (string)Str::uuid(),
                    'user_name' => config('define.root_user_name'),
                    'email' => config('define.root_user_email'),
                    'user_status' => 'active',
                    'password' => $password_hasher->make(config('define.root_user_password')),
                ]
            );

            DB::commit();
            $this->info('Succeed boot app. Welcome Account manager!!');
        } catch (Exception $exception) {
            Log::error(report($exception));
            DB::rollBack();
            $this->error($exception->getMessage());
        }
    }
}
