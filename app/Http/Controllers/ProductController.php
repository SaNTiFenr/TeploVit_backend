<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    /**
     * Display a listing of the products with filters and sorting.
     */
    public function index(Request $request): JsonResponse
    {
        // Base query with category relationship
        $query = Product::with('category');

        // Filter by category
        if ($request->has('category') && $request->category !== 'all') {
            $query->where('category_id', $request->category);
        }

        // Search by product name
        if ($request->has('search') && !empty($request->search)) {
            $query->where('name', 'like', '%'.$request->search.'%');
        }

        // Sorting logic
        $sortParams = $this->parseSortOption($request->sort_option ?? 'name-asc');
        $query->orderBy($sortParams['field'], $sortParams['direction']);

        // Pagination
        $perPage = $request->itemsPerPage ?? 8;
        $products = $query->paginate($perPage);

        return response()->json([
            'data' => $products->items(),
            'meta' => [
                'current_page' => $products->currentPage(),
                'total_items' => $products->total(),
                'items_per_page' => $products->perPage(),
                'total_pages' => $products->lastPage(),
            ]
        ]);
    }

    /**
     * Parse sorting option into field and direction
     */
    private function parseSortOption(string $sortOption): array
    {
        $sortParts = explode('-', $sortOption);

        $validFields = ['name', 'price'];
        $validDirections = ['asc', 'desc'];

        $field = in_array($sortParts[0], $validFields)
            ? $sortParts[0]
            : 'name';

        $direction = in_array($sortParts[1] ?? '', $validDirections)
            ? $sortParts[1]
            : 'asc';

        return [
            'field' => $field,
            'direction' => $direction
        ];
    }
}
