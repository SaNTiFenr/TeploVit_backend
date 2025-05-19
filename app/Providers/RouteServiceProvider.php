<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        parent::boot(); // Важно: вызов родительского метода

        $this->routes(function () {
            // API Routes
            Route::prefix('api')
                ->middleware('api')
                ->group(function () {
                    Route::get('/test', function () {
                        return response()->json(['status' => 'OK']);
                    });

                    Route::get('/works', function () {
                        return \App\Models\Work::all();
                    });
                });

            // Web Routes (если нужно)
            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
}
