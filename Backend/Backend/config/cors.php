<?php

return [

    'paths' => ['getoPi', 'login', 'getOfferts', "register", 'createCode','getCodes',"checkCode"],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['http://localhost:5173'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => ['X-CSRF-TOKEN'],

    'max_age' => 0,

    'supports_credentials' => true,

];
