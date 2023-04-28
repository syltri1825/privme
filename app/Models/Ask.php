<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ask extends Model
{
    use HasFactory;

    protected $table = 'asks';
    protected $fillable = [
        'message',
        'datePublication',
    ];
}
