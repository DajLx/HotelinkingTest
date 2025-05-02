<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class OfertsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('oferts')->insert([
            [
                'id' => 2,
                'imgSrc' => 'https://www.notebookcheck.org/fileadmin/Notebooks/HP/ZBook_Studio_G5-4QH10EA/teaser2.jpg',
                'producto' => 'Laptop UltraBook Z5',
                'descripcion' => 'Intel i7, 16GB RAM, 512GB SSD, pantalla de 14\'\' FHD.',
                'precio_original' => 1199.99,
                'precio_oferta' => 899.99,
                'descuento' => '25%',
                'disponible_hasta' => '2025-05-10',
            ],
            [
                'id' => 3,
                'imgSrc' => 'https://i.blogs.es/737b5b/galaxy-s10-x/1366_2000.jpg',
                'producto' => 'Smartphone Galaxy X',
                'descripcion' => 'Pantalla AMOLED 6.5", 128GB, Cámara de 48MP.',
                'precio_original' => 799.99,
                'precio_oferta' => 599.99,
                'descuento' => '25%',
                'disponible_hasta' => '2025-06-01',
            ],
            [
                'id' => 4,
                'imgSrc' => 'https://i.blogs.es/2955ac/xiaomi-watch-2-pro/1366_2000.jpeg',
                'producto' => 'Smartwatch Pro 2',
                'descripcion' => 'Pantalla táctil de 1.5", GPS, resistencia al agua.',
                'precio_original' => 199.99,
                'precio_oferta' => 149.99,
                'descuento' => '25%',
                'disponible_hasta' => '2025-07-01',
            ],
            [
                'id' => 5,
                'imgSrc' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJx6cOlUsojtAf8--CSpN1Ql44cPNVZBUJw&s',
                'producto' => 'Auriculares Bluetooth Z',
                'descripcion' => 'Sonido envolvente, 20 horas de batería, conexión rápida.',
                'precio_original' => 129.99,
                'precio_oferta' => 99.99,
                'descuento' => '25%',
                'disponible_hasta' => '2025-05-20',
            ]
        ]);
    }
}
