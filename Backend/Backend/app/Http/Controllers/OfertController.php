<?php

namespace App\Http\Controllers;
use App\Models\oferts;

use Illuminate\Http\Request;

class OfertController extends Controller
{
    public function GetOferts()
    {
        $oferts = oferts::all();
        return response()->json($oferts);
    }
}
