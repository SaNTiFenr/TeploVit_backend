<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    protected $fillable = ['title', 'description', 'full_description', 'image_path'];

    public function getImageUrlAttribute()
    {
        return asset('storage/'.$this->image_path);
    }
    protected $casts = [
    'id' => 'integer'
    ];
}
