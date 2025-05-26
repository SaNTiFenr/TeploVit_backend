<?php

namespace App\Nova; // Добавляем неймспейс

use Illuminate\Http\Request; // Добавляем импорт Request
use Illuminate\Support\Str;
use Laravel\Nova\Resource; // Импортируем базовый класс
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;

class Product extends Resource // Теперь класс Resource доступен
{
    public static $model = \App\Models\Product::class;

    public function fields(NovaRequest $request)
    {
        return [
            Text::make('Name')->required(),
            BelongsTo::make('Category')->required(),
            Number::make('Price')->required()->step(0.01),
            Number::make('Old Price')->nullable()->step(0.01),
            Boolean::make('Is New'),
            Textarea::make('Description')->nullable(),
            Text::make('Specs')->help('JSON format: [{"key": "...", "value": "..."}]')->nullable(),
            Image::make('Main Image', 'image')
                ->disk('public')
                ->path('products'),
            Image::make('Gallery Images', 'images')
                ->disk('public')
                ->path('products/gallery')
                ->rules('image')
                ->hideFromIndex()
                ->storeAs(function (Request $request) {
                    return Str::uuid() . '.' . $request->images->extension();
                }),
        ];
    }
}
