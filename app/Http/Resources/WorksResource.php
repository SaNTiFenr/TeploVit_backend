<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WorksResource extends JsonResource {
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'imageUrl' => asset('storage/'.$this->image_path),
            'fullDescription' => $this->full_description // snake_case → camelCase
        ];
    }
}
