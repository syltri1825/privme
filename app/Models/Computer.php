<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Computer extends Model
{
    use HasFactory;

    protected $table = 'computers';
    protected $fillable = [
        'title',
        'article',
        'category',
        'price',
        'description',
        'notice',
        'date_publication',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
