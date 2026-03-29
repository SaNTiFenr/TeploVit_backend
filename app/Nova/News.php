<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Resource;
use Laravel\Nova\Http\Requests\NovaRequest;

class News extends Resource
{
    public static $model = \App\Models\News::class;

    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable(),

            Text::make('Title')->sortable()->rules('required', 'max:255'),
            Text::make('Slug')->sortable()->rules('required', 'unique:news,slug,{{resourceId}}'),
            Textarea::make('Content')->alwaysShow(),
            Image::make('Image')->disk('public')->path('news'),
            Boolean::make('Is Published'),
            DateTime::make('Published At'),
        ];
    }
}
