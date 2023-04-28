<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SmartPhone extends Model
{
    use HasFactory;
    protected $table = 'smart_phones';
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
