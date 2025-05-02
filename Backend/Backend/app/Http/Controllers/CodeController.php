<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class codeController extends Controller
{
    public function canjearCupon(Request $request)
    {
        $codeId = $request->code;
        $code = auth()->user()->promotionsCode()->where("id", $codeId)->first();
        $code->canjeado = true;
        $code->save();
        return response()->json(['message' => 'Código canjeado correctamente.']);


    }
}
