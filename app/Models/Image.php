<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $table = 'images';
    protected $fillable = [
        'title',
        'image',
        'category',
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
