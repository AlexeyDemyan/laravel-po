<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class POEntry extends Model
{
    protected $fillable = [
        'company',
        'date',
        'supplier'
    ];
}
