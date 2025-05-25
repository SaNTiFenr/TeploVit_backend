<?php

namespace App\Http\Controllers;

use App\Http\Resources\WorksResource;
use App\Models\Work;

class WorksController extends Controller
{
    public function index()
    {
        return WorksResource::collection(Work::all());
    }

    public function show($id)
    {
        try {
            $work = Work::findOrFail($id);
            return new WorksResource($work);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Работа не найдена'], 404);
        }
    }
}
