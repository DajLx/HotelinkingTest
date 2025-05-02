<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class userController extends Controller
{
    //
    public function Register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:20',
            'email' => 'required|string|email|max:255|unique:users,email', // Verifica que el correo no esté en la base de datos
            'password' => 'required|string|min:8', // Requiere que la contraseña sea confirmada (campo password_confirmation)
        ]);

        // Si la validación falla
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => bcrypt($request->password),
        ]);
        return response()->json(['message' => 'Usuario registrado con éxito', 'user' => $user], 201);
    }
    public function Login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            $user = auth()->user();


            return response()->json(['message' => 'Login exitoso', 'user' => $user]);
        }

        return response()->json(['message' => 'Credenciales inválidas'], 401);
    }

    public function createCode(Request $request)
    {
        $promotion = auth()->user()->promotionsCode()->create([
            'descuento' => $request->numberD,
            'code' => Uuid::uuid4()->toString(),
        ]);
        return response()->json([
            'message' => 'Promoción creada con éxito',
            'promotion' => $promotion
        ]);

    }

    public function getCodesOfUser()
    {
       return response()->json(["res" => auth()->user()->promotionsCode]);
    }



}
