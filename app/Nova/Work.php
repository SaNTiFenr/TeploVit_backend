<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Fields\Image;

class Work extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Work>
     */
    public static $model = \App\Models\Work::class;
     public function fields(Request $request)
    {
    return [
        ID::make()->sortable(),

        Text::make('Заголовок', 'title')
            ->rules('required', 'max:255'),

        Textarea::make('Краткое описание', 'description')
            ->rules('required'),

        Textarea::make('Полное описание', 'full_description')
            ->hideFromIndex(),

        Image::make('Изображение', 'image_path')
            ->disk('public')
            ->path('works')
            ->rules('required', 'image', 'max:2048'),
    ];
    }

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @return array<int, \Laravel\Nova\Fields\Field>
     */

    /**
     * Get the cards available for the resource.
     *
     * @return array<int, \Laravel\Nova\Card>
     */
    public function cards(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @return array<int, \Laravel\Nova\Filters\Filter>
     */
    public function filters(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @return array<int, \Laravel\Nova\Lenses\Lens>
     */
    public function lenses(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @return array<int, \Laravel\Nova\Actions\Action>
     */
    public function actions(NovaRequest $request): array
    {
        return [];
    }
}
